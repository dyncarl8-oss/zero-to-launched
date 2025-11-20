import { type WhopUser, type InsertWhopUser } from "@shared/schema";
import { MongoClient, Db, Collection } from "mongodb";

export interface IStorage {
  getUser(whopUserId: string): Promise<WhopUser | undefined>;
  createUser(user: InsertWhopUser): Promise<WhopUser>;
  upsertUser(user: InsertWhopUser): Promise<WhopUser>;
}

export class MemStorage implements IStorage {
  private users: Map<string, WhopUser>;

  constructor() {
    this.users = new Map();
  }

  async getUser(whopUserId: string): Promise<WhopUser | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.whopUserId === whopUserId,
    );
  }

  async createUser(insertUser: InsertWhopUser): Promise<WhopUser> {
    const user: WhopUser = { 
      whopUserId: insertUser.whopUserId,
      email: insertUser.email ?? null,
      metadata: insertUser.metadata ?? null,
      hasManualAccess: insertUser.hasManualAccess ?? false,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };
    this.users.set(user.whopUserId, user);
    console.log(`📝 Created user in memory: ${user.whopUserId}`);
    return user;
  }

  async upsertUser(insertUser: InsertWhopUser): Promise<WhopUser> {
    const existing = await this.getUser(insertUser.whopUserId);
    if (existing) {
      const updated: WhopUser = {
        ...existing,
        email: insertUser.email ?? existing.email,
        metadata: insertUser.metadata ?? existing.metadata,
        hasManualAccess: insertUser.hasManualAccess ?? existing.hasManualAccess,
      };
      this.users.set(updated.whopUserId, updated);
      console.log(`🔄 Updated user in memory: ${insertUser.whopUserId}`);
      return updated;
    }
    return this.createUser(insertUser);
  }
}

export class MongoStorage implements IStorage {
  private client: MongoClient;
  private db!: Db;
  private users!: Collection<WhopUser>;

  constructor(uri: string) {
    this.client = new MongoClient(uri);
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db("whop-guide");
      this.users = this.db.collection<WhopUser>("whop_users");
      
      await this.users.createIndex({ whopUserId: 1 }, { unique: true });
      
      console.log("✅ Connected to MongoDB successfully");
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error);
      throw error;
    }
  }

  async getUser(whopUserId: string): Promise<WhopUser | undefined> {
    const user = await this.users.findOne({ whopUserId });
    console.log(`🔍 Looking up user by whopUserId: ${whopUserId}, found: ${user ? 'yes' : 'no'}`);
    return user || undefined;
  }

  async createUser(insertUser: InsertWhopUser): Promise<WhopUser> {
    const user: WhopUser = {
      whopUserId: insertUser.whopUserId,
      email: insertUser.email ?? null,
      metadata: insertUser.metadata ?? null,
      hasManualAccess: insertUser.hasManualAccess ?? false,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };
    
    console.log(`📝 Creating user in MongoDB: ${insertUser.whopUserId}`);
    const result = await this.users.insertOne(user);
    console.log(`✅ User created successfully in MongoDB with _id: ${result.insertedId}`);
    
    return user;
  }

  async upsertUser(insertUser: InsertWhopUser): Promise<WhopUser> {
    console.log(`🔄 Upserting user: ${insertUser.whopUserId}`);
    
    const existing = await this.getUser(insertUser.whopUserId);
    if (existing) {
      const updateData: Partial<WhopUser> = {};
      if (insertUser.email !== null && insertUser.email !== undefined) {
        updateData.email = insertUser.email;
      }
      if (insertUser.metadata !== null && insertUser.metadata !== undefined) {
        updateData.metadata = insertUser.metadata;
      }
      if (insertUser.hasManualAccess !== null && insertUser.hasManualAccess !== undefined) {
        updateData.hasManualAccess = insertUser.hasManualAccess;
      }
      
      if (Object.keys(updateData).length > 0) {
        await this.users.updateOne(
          { whopUserId: insertUser.whopUserId },
          { $set: updateData }
        );
        console.log(`🔄 Updated user in MongoDB: ${insertUser.whopUserId} with fields: ${Object.keys(updateData).join(', ')}`);
      } else {
        console.log(`♻️  User already exists, no updates needed: ${insertUser.whopUserId}`);
      }
      
      return { ...existing, ...updateData };
    }
    
    return this.createUser(insertUser);
  }

  async listAllUsers(): Promise<WhopUser[]> {
    const users = await this.users.find({}).toArray();
    console.log(`📊 Total users in MongoDB: ${users.length}`);
    return users;
  }
}

let storage: IStorage;

async function initializeStorage() {
  if (process.env.MONGODB_URI) {
    try {
      const mongoStorage = new MongoStorage(process.env.MONGODB_URI);
      await mongoStorage.connect();
      storage = mongoStorage;
      console.log("🔵 Using MongoDB storage");
    } catch (error) {
      console.error("⚠️  Failed to connect to MongoDB. Falling back to in-memory storage.");
      console.log("💡 To fix MongoDB: Update your MONGODB_URI secret with correct credentials from MongoDB Atlas");
      console.log("💡 Or remove MONGODB_URI to use in-memory storage");
      storage = new MemStorage();
      console.log("🟡 Using in-memory storage (data will be lost on restart)");
    }
  } else {
    storage = new MemStorage();
    console.log("🟡 Using in-memory storage (data will be lost on restart)");
  }
}

initializeStorage();

export { storage };
