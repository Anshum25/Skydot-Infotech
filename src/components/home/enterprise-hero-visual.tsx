import {
  Activity,
  BarChart3,
  Bot,
  Database,
  LayoutDashboard,
  Table2,
  Workflow,
} from "lucide-react";

export function EnterpriseHeroVisual() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="relative rounded-sm border border-border bg-card shadow-[0_40px_80px_-24px_rgba(5,5,5,0.18)] dark:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.55)] overflow-hidden">
        <div className="flex items-center justify-between border-b border-border px-4 py-3 bg-card">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
              <span className="h-2.5 w-2.5 rounded-full bg-border" />
            </div>
            <span className="text-xs font-medium text-muted-foreground">Skydot Enterprise Console</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Live Operations
          </div>
        </div>

        <div className="grid lg:grid-cols-[220px_1fr] min-h-[420px] md:min-h-[480px]">
          <aside className="hidden lg:flex flex-col gap-1 border-r border-border p-3 bg-background/50">
            {[
              { icon: LayoutDashboard, label: "Overview", active: true },
              { icon: Bot, label: "AI Insights" },
              { icon: Database, label: "ERP Modules" },
              { icon: Workflow, label: "Automation" },
              { icon: BarChart3, label: "Analytics" },
              { icon: Table2, label: "Operations" },
            ].map((item) => (
              <div
                key={item.label}
                className={`flex items-center gap-2.5 rounded-sm px-3 py-2 text-sm ${
                  item.active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </div>
            ))}
          </aside>

          <div className="p-4 md:p-6 grid gap-4 md:gap-5 bg-background/30">
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { label: "Workflows", value: "Active", sub: "Automation queue" },
                { label: "ERP Status", value: "Synced", sub: "Finance · HR · Inventory" },
                { label: "AI Layer", value: "Ready", sub: "Document intelligence" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-sm border border-border bg-card p-4">
                  <p className="home-label mb-2">{stat.label}</p>
                  <p className="text-xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 flex-1">
              <div className="rounded-sm border border-border bg-card p-4 md:p-5 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-semibold">Business Performance</p>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Analytics</span>
                </div>
                <div className="flex items-end gap-2 h-36 md:h-44">
                  {[32, 48, 40, 58, 52, 68, 62, 74, 70, 82, 78, 88].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end h-full">
                      <div
                        className="w-full rounded-t-[2px] bg-primary/15 relative overflow-hidden"
                        style={{ height: `${h}%` }}
                      >
                        <div
                          className="absolute bottom-0 left-0 w-full bg-primary/80"
                          style={{ height: `${Math.max(h - 18, 12)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-sm border border-border bg-card p-4 md:p-5 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold">Intelligence Feed</p>
                </div>
                {[
                  "Procurement cycle variance detected in inventory module.",
                  "Document classification model ready for review.",
                  "HR onboarding workflow awaiting approval step.",
                ].map((line) => (
                  <div key={line} className="rounded-sm border border-border bg-background/60 p-3">
                    <p className="text-xs leading-relaxed text-muted-foreground">{line}</p>
                  </div>
                ))}
                <div className="mt-auto flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-primary">
                  <Activity className="h-3 w-3" />
                  Decision queue · 3 items
                </div>
              </div>
            </div>

            <div className="rounded-sm border border-border bg-card overflow-hidden">
              <div className="grid grid-cols-4 border-b border-border bg-muted/30 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                <div className="p-2.5 col-span-2">Process</div>
                <div className="p-2.5 hidden sm:block">Module</div>
                <div className="p-2.5">Status</div>
              </div>
              {[
                { process: "Purchase order approval", module: "ERP · Finance", status: "In review" },
                { process: "Field data sync", module: "Operations", status: "Running" },
                { process: "Training enrollment", module: "Education", status: "Scheduled" },
              ].map((row) => (
                <div key={row.process} className="grid grid-cols-4 border-b border-border last:border-0 text-xs">
                  <div className="p-2.5 col-span-2 font-medium">{row.process}</div>
                  <div className="p-2.5 hidden sm:block text-muted-foreground">{row.module}</div>
                  <div className="p-2.5 text-primary">{row.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
