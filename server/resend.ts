import { Resend } from 'resend';

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY not found in environment variables');
  }
  
  return new Resend(apiKey);
}

export async function sendPurchaseInitiatedEmail(userEmail: string, userId: string) {
  try {
    const resend = getResendClient();
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.NOTIFICATION_EMAIL || fromEmail;
    
    console.log('📧 Attempting to send email...');
    console.log('   From:', fromEmail);
    console.log('   To:', toEmail);
    console.log('   User Email:', userEmail);
    console.log('   User ID:', userId);
    
    const response = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: '🚀 New Purchase Initiated!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a855f7;">New Purchase Initiated</h2>
          <p>Someone just clicked "Get Instant Access Now"!</p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>User ID:</strong> ${userId}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${userEmail}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">This is an automated notification from your Whop course app.</p>
        </div>
      `,
    });
    
    console.log('✅ Purchase initiated email sent successfully!');
    console.log('   Response:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('❌ Failed to send purchase initiated email:', error);
    if (error instanceof Error) {
      console.error('   Error message:', error.message);
      console.error('   Error stack:', error.stack);
    }
  }
}

export async function sendPaymentSuccessEmail(userEmail: string, userId: string, paymentData?: any) {
  try {
    const resend = getResendClient();
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';
    const toEmail = process.env.NOTIFICATION_EMAIL || fromEmail;
    
    console.log('💰 Attempting to send payment success email...');
    console.log('   From:', fromEmail);
    console.log('   To:', toEmail);
    console.log('   User Email:', userEmail);
    console.log('   User ID:', userId);
    if (paymentData?.amount) {
      console.log('   Amount:', `$${(paymentData.amount / 100).toFixed(2)}`);
    }
    
    const response = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: '💰 Payment Successful!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #10b981;">Payment Successful! 🎉</h2>
          <p>A new customer just completed their purchase!</p>
          
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>User ID:</strong> ${userId}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${userEmail}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            ${paymentData ? `<p style="margin: 5px 0;"><strong>Amount:</strong> $${(paymentData.amount / 100).toFixed(2)}</p>` : ''}
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">This is an automated notification from your Whop course app.</p>
        </div>
      `,
    });
    
    console.log('✅ Payment success email sent successfully!');
    console.log('   Response:', JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('❌ Failed to send payment success email:', error);
    if (error instanceof Error) {
      console.error('   Error message:', error.message);
      console.error('   Error stack:', error.stack);
    }
  }
}
