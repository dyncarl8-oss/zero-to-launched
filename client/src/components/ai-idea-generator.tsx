import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Loader2, Check, Copy, RefreshCw, ChevronLeft, ChevronRight, Search, TrendingUp, Lightbulb, Database } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface AppIdea {
  name: string;
  description: string;
  targetAudience: string;
  features: string[];
}

const thinkingSteps = [
  { icon: Search, text: "Searching successful Whop apps & market trends...", duration: 3000 },
  { icon: Database, text: "Analyzing monetization patterns & user needs...", duration: 3500 },
  { icon: TrendingUp, text: "Identifying underserved niches with potential...", duration: 3000 },
  { icon: Lightbulb, text: "Crafting unique, high-value app ideas...", duration: 2500 },
];

export function AIIdeaGenerator() {
  const [ideas, setIdeas] = useState<AppIdea[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<AppIdea | null>(null);
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thinkingStep, setThinkingStep] = useState(0);
  const { toast } = useToast();

  const generateIdeasMutation = useMutation({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/generate-ideas");
      return await response.json() as { ideas: AppIdea[] };
    },
    onSuccess: (data) => {
      if (data && data.ideas && Array.isArray(data.ideas)) {
        setIdeas(data.ideas);
        setSelectedIdea(null);
        setGeneratedPrompt("");
        setCurrentIndex(Math.min(0, data.ideas.length - 1));
        setThinkingStep(0);
        toast({
          title: "Ideas generated!",
          description: "Browse through the AI-researched ideas and pick your favorite.",
        });
      } else {
        setIdeas([]);
        setCurrentIndex(0);
        setThinkingStep(0);
        toast({
          title: "Error",
          description: "Received invalid data from server.",
          variant: "destructive",
        });
      }
    },
    onError: () => {
      setThinkingStep(0);
      toast({
        title: "Failed to generate ideas",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  const generatePromptMutation = useMutation({
    mutationFn: async (appIdea: AppIdea) => {
      const response = await apiRequest("POST", "/api/generate-prompt", { appIdea });
      return await response.json() as { prompt: string };
    },
    onSuccess: (data) => {
      setGeneratedPrompt(data.prompt);
      toast({
        title: "Prompt Generated!",
        description: "Your custom Replit prompt is ready. Copy it below!",
      });
    },
    onError: () => {
      toast({
        title: "Failed to generate prompt",
        description: "Please try again.",
        variant: "destructive",
      });
    },
  });

  useEffect(() => {
    if (!generateIdeasMutation.isPending) {
      setThinkingStep(0);
      return;
    }

    let currentStep = 0;
    setThinkingStep(0);

    const advanceStep = () => {
      if (currentStep < thinkingSteps.length - 1) {
        currentStep++;
        setThinkingStep(currentStep);
        setTimeout(advanceStep, thinkingSteps[currentStep].duration);
      }
    };

    const timer = setTimeout(advanceStep, thinkingSteps[0].duration);

    return () => clearTimeout(timer);
  }, [generateIdeasMutation.isPending]);

  const handleSelectIdea = (idea: AppIdea) => {
    if (selectedIdea === idea) {
      setSelectedIdea(null);
    } else {
      setSelectedIdea(idea);
    }
    setGeneratedPrompt("");
  };

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      toast({
        title: "Copied!",
        description: "Prompt copied to clipboard. Paste it in Replit AI Builder.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Please manually copy the prompt.",
        variant: "destructive",
      });
    }
  };

  const handleGeneratePrompt = () => {
    if (selectedIdea) {
      generatePromptMutation.mutate(selectedIdea);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < ideas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentIdea = ideas[currentIndex];
  const CurrentStepIcon = generateIdeasMutation.isPending ? thinkingSteps[thinkingStep].icon : Sparkles;

  return (
    <div className="space-y-8">
      {/* Initial Generate Ideas Section */}
      {ideas.length === 0 && (
        <div className="flex flex-col items-center gap-6 p-12 rounded-xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-purple-500/10 shadow-lg">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 shadow-lg">
              {generateIdeasMutation.isPending ? (
                <CurrentStepIcon className="w-8 h-8 text-white animate-pulse" />
              ) : (
                <Sparkles className="w-8 h-8 text-white" />
              )}
            </div>
            <h3 className="font-bold text-2xl text-white">
              {generateIdeasMutation.isPending ? "AI Research in Progress" : "Step 1: Generate Your App Ideas"}
            </h3>
            <p className="text-base text-gray-300 max-w-lg leading-relaxed">
              {generateIdeasMutation.isPending 
                ? "Our advanced AI is researching the market and crafting unique ideas just for you..."
                : "Click the button below to let our advanced AI research the market and generate three unique, high-value app ideas specifically designed for Whop's marketplace."
              }
            </p>
          </div>

          {/* Thinking Steps Display */}
          {generateIdeasMutation.isPending && (
            <div className="w-full max-w-md space-y-3">
              {thinkingSteps.map((step, index) => {
                const StepIcon = step.icon;
                const isActive = index === thinkingStep;
                const isCompleted = index < thinkingStep;
                
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                      isActive 
                        ? "bg-purple-500/20 border-2 border-purple-500" 
                        : isCompleted
                        ? "bg-emerald-500/10 border border-emerald-500/30"
                        : "bg-gray-500/10 border border-gray-500/20"
                    }`}
                  >
                    <div className={`flex-shrink-0 ${isActive ? "animate-pulse" : ""}`}>
                      {isCompleted ? (
                        <Check className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <StepIcon className={`w-5 h-5 ${isActive ? "text-purple-300" : "text-gray-500"}`} />
                      )}
                    </div>
                    <span className={`text-sm font-medium ${
                      isActive 
                        ? "text-white" 
                        : isCompleted 
                        ? "text-emerald-300" 
                        : "text-gray-500"
                    }`}>
                      {step.text}
                    </span>
                    {isActive && (
                      <Loader2 className="w-4 h-4 animate-spin text-purple-300 ml-auto" />
                    )}
                  </div>
                );
              })}
            </div>
          )}

          <Button
            size="lg"
            onClick={() => generateIdeasMutation.mutate()}
            disabled={generateIdeasMutation.isPending}
            className="gap-2 text-base px-8 py-6 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-purple-500/50"
            data-testid="button-generate-ideas"
          >
            {generateIdeasMutation.isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Researching & Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate 3 App Ideas with AI
              </>
            )}
          </Button>
        </div>
      )}

      {/* Ideas Display */}
      {ideas.length > 0 && currentIdea && (
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="text-base font-semibold text-white">
              Choose an idea to build
            </div>
            <Button
              variant="outline"
              size="default"
              onClick={() => generateIdeasMutation.mutate()}
              disabled={generateIdeasMutation.isPending}
              className="gap-2 border-cyan-500 text-cyan-300 hover:bg-cyan-500/10 font-semibold"
              data-testid="button-generate-more-ideas"
            >
              {generateIdeasMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Researching...
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  New Ideas
                </>
              )}
            </Button>
          </div>

          {/* Idea Card */}
          <div
            className={`cursor-pointer transition-all rounded-xl border-2 p-6 space-y-6 ${
              selectedIdea === currentIdea
                ? "border-purple-500 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-purple-500/10 shadow-lg shadow-purple-500/20"
                : "border-purple-500/30 bg-black/40 hover-elevate"
            }`}
            onClick={() => handleSelectIdea(currentIdea)}
            data-testid={`card-idea-${currentIndex}`}
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-2xl font-bold text-white">
                  {currentIdea.name}
                </h3>
                {selectedIdea === currentIdea && (
                  <Badge variant="default" className="gap-1" data-testid="badge-selected">
                    <Check className="w-3 h-3" />
                    Selected
                  </Badge>
                )}
              </div>
              <p className="text-base text-gray-300 leading-relaxed">
                {currentIdea.description}
              </p>
            </div>
            
            <div className="space-y-1">
              <p className="text-xs font-medium text-purple-300 uppercase tracking-wider">
                Target Audience
              </p>
              <p className="text-sm text-gray-200">
                {currentIdea.targetAudience}
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-xs font-medium text-purple-300 uppercase tracking-wider">
                Key Features
              </p>
              <div className="flex flex-wrap gap-2">
                {currentIdea.features.map((feature, featureIndex) => (
                  <Badge
                    key={featureIndex}
                    variant="secondary"
                    className="text-xs font-normal bg-purple-500/20 text-gray-200 border-purple-500/30"
                    data-testid={`badge-feature-${currentIndex}-${featureIndex}`}
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <Button
              variant="default"
              size="lg"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              data-testid="button-carousel-previous"
              className="gap-2 bg-purple-500/20 hover:bg-purple-500/30 border-2 border-purple-500 text-white font-semibold"
            >
              <ChevronLeft className="h-6 w-6" />
              Previous
            </Button>
            
            <div className="text-base font-bold text-white bg-gradient-to-r from-purple-500/30 to-cyan-500/30 px-6 py-3 rounded-lg border-2 border-purple-500">
              {currentIndex + 1} of {ideas.length}
            </div>
            
            <Button
              variant="default"
              size="lg"
              onClick={handleNext}
              disabled={currentIndex === ideas.length - 1}
              data-testid="button-carousel-next"
              className="gap-2 bg-purple-500/20 hover:bg-purple-500/30 border-2 border-purple-500 text-white font-semibold"
            >
              Next
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Generate Prompt Button */}
          {selectedIdea && !generatedPrompt && (
            <div className="flex flex-col items-center gap-4 pt-4">
              <div className="text-center space-y-2">
                <p className="text-lg font-bold text-white">
                  Step 2: Generate Your Build Prompt
                </p>
                <p className="text-sm text-gray-400 max-w-md">
                  Click below to create a custom prompt you can paste directly into Replit AI Builder
                </p>
              </div>
              <Button
                size="lg"
                onClick={handleGeneratePrompt}
                disabled={generatePromptMutation.isPending}
                className="gap-2 text-base px-8 py-6 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 shadow-lg shadow-emerald-500/50"
                data-testid="button-generate-prompt"
              >
                {generatePromptMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Creating Your Prompt...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" />
                    Generate Build Prompt
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Generated Prompt */}
      {generatedPrompt && (
        <div className="space-y-6">
          <div className="p-4 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-center">
            <p className="text-sm font-medium flex items-center justify-center gap-2 text-emerald-300">
              <Check className="w-4 h-4" />
              Prompt Generated Successfully
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-white">
              Your Custom Replit Prompt
            </h3>
            <p className="text-sm text-gray-400">
              Copy this prompt and paste it into Replit AI Builder
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5">
            <pre className="text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap font-mono text-gray-200">
              {generatedPrompt}
            </pre>
          </div>

          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={handleCopyPrompt}
              className="gap-2"
              data-testid="button-copy-prompt"
            >
              <Copy className="w-4 h-4" />
              Copy Prompt
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
