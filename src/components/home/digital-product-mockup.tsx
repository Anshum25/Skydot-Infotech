import { Globe, Smartphone, Sparkles } from "lucide-react";

export function DigitalProductMockup() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="rounded-sm border border-border bg-card shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">Product Launch Console</span>
          </div>
          <span className="home-label">Digital Products</span>
        </div>
        <div className="grid md:grid-cols-[1fr_180px] gap-0">
          <div className="p-5 border-r border-border">
            <div className="rounded-sm border border-border bg-background/50 p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-4 w-4 text-[var(--skydot-orange)]" />
                <p className="text-sm font-semibold">Experience Preview</p>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-3/4 rounded-sm bg-muted" />
                <div className="h-3 w-full rounded-sm bg-muted/70" />
                <div className="h-3 w-5/6 rounded-sm bg-muted/50" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-[4/3] rounded-sm border border-border bg-card" />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="rounded-sm border border-border p-3">
                <p className="home-label mb-1">Web</p>
                <p className="font-medium">Responsive product site</p>
              </div>
              <div className="rounded-sm border border-border p-3">
                <p className="home-label mb-1">CMS</p>
                <p className="font-medium">Content workflows</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-muted/20 flex flex-col items-center justify-center gap-3">
            <div className="w-[120px] rounded-[1.25rem] border-[6px] border-foreground/10 bg-card p-2 shadow-lg">
              <div className="rounded-[0.75rem] border border-border bg-background p-2 space-y-2">
                <div className="h-2 w-2/3 rounded-sm bg-primary/30 mx-auto" />
                <div className="aspect-[9/14] rounded-sm border border-border bg-card" />
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
              <Smartphone className="h-3 w-3" />
              Mobile ready
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
