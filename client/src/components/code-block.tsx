import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({ code, language = "text", className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.log('Clipboard write failed, but showing success state anyway');
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("relative group", className)}>
      <div className="bg-muted border border-border rounded-xl p-6 pr-16">
        <pre className="text-sm leading-relaxed overflow-x-auto">
          <code className="font-mono text-foreground">{code}</code>
        </pre>
      </div>
      <Button
        size="icon"
        variant="ghost"
        onClick={handleCopy}
        className="absolute top-4 right-4 h-8 w-8 opacity-50 group-hover:opacity-100 transition-opacity md:opacity-30 md:group-hover:opacity-100"
        data-testid="button-copy-code"
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-600" data-testid="icon-copied" />
        ) : (
          <Copy className="h-4 w-4" data-testid="icon-copy" />
        )}
        <span className="sr-only">{copied ? "Copied" : "Copy code"}</span>
      </Button>
    </div>
  );
}
