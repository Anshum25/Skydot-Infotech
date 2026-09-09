import { motion } from "framer-motion";
import { BarChart3, Users, Zap, LayoutTemplate, Activity } from "lucide-react";

export function DashboardMockup() {
  return (
    <div className="relative w-full max-w-3xl mx-auto aspect-[4/3] sm:aspect-[16/10] bg-card rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-border overflow-hidden flex flex-col font-sans">
      
      {/* 1. Header (Minimalist) */}
      <div className="h-12 border-b border-border flex items-center px-4 justify-between bg-card shrink-0">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="h-4 w-32 bg-muted rounded-sm" />
        </div>
        <div className="flex items-center gap-4">
          <div className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
            System Status: Active
          </div>
        </div>
      </div>

      {/* 2. Body */}
      <div className="flex-1 flex bg-background/50">
        
        {/* Sidebar (Very subtle) */}
        <div className="w-14 sm:w-48 hidden sm:flex flex-col gap-1 border-r border-border p-3 shrink-0">
          {[
            { icon: LayoutTemplate, label: "Overview", active: true },
            { icon: BarChart3, label: "Analytics" },
            { icon: Users, label: "Audience" },
            { icon: Activity, label: "Workflows" },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-3 px-3 py-2 rounded-sm text-sm font-medium transition-colors ${item.active ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
            >
              <item.icon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 sm:p-6 flex flex-col gap-4 sm:gap-6 overflow-hidden">
          
          {/* Top Metrics Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 shrink-0">
            {[
              { label: "Total Volume", value: "24.5M", change: "+14.2%", positive: true },
              { label: "Active Nodes", value: "1,204", change: "+5.1%", positive: true },
              { label: "System Load", value: "42%", change: "-2.4%", positive: false, hideOnMobile: true },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                className={`p-4 rounded-sm border border-border bg-card flex-col gap-3 ${stat.hideOnMobile ? 'hidden lg:flex' : 'flex'}`}
              >
                <div className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                <div className="flex items-end justify-between">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className={`text-xs font-semibold px-1.5 py-0.5 rounded-sm ${stat.positive ? 'bg-green-500/10 text-green-600 dark:text-green-400' : 'bg-secondary/10 text-secondary'}`}>
                    {stat.change}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Large Data Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 rounded-sm border border-border bg-card p-5 sm:p-6 flex flex-col relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-8 shrink-0">
              <div className="text-sm font-semibold">Real-time Performance</div>
              <div className="text-xs text-primary bg-primary/10 px-2.5 py-1 rounded-sm font-semibold flex items-center gap-1.5">
                <Zap className="w-3 h-3" /> Auto-Scaling Active
              </div>
            </div>

            {/* Abstract Minimalist Chart */}
            <div className="flex-1 flex items-end gap-2 sm:gap-4 relative z-10 w-full h-full">
              {[25, 40, 30, 55, 70, 45, 80, 60, 90, 75, 100].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col justify-end items-center h-full group">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: 0.5 + (i * 0.05), ease: "easeOut" }}
                    className="w-full bg-primary/20 rounded-t-[2px] relative group-hover:bg-primary/40 transition-colors cursor-pointer overflow-hidden"
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height * 0.4}%` }}
                      transition={{ duration: 1, delay: 0.8 + (i * 0.05), ease: "easeOut" }}
                      className="absolute bottom-0 left-0 w-full bg-primary"
                    />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Thin Grid Lines */}
            <div className="absolute inset-0 p-6 pt-16 flex flex-col justify-between pointer-events-none opacity-[0.03] dark:opacity-10 z-0">
              <div className="w-full border-t border-foreground" />
              <div className="w-full border-t border-foreground" />
              <div className="w-full border-t border-foreground" />
              <div className="w-full border-t border-foreground" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
