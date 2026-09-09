import { motion } from "framer-motion";
import { LayoutDashboard, Users, ShoppingCart, Package, Building, HeartHandshake, Briefcase, Calculator, CheckSquare } from "lucide-react";

export function ErpMockup({ activeIndex = -1 }: { activeIndex?: number }) {
  const modules = [
    { name: "Accounting", icon: Calculator },
    { name: "Sales", icon: ShoppingCart },
    { name: "Purchase", icon: Package },
    { name: "Inventory", icon: LayoutDashboard },
    { name: "Manufacturing", icon: Building },
    { name: "HR", icon: Users },
    { name: "CRM", icon: HeartHandshake },
    { name: "Projects", icon: Briefcase },
    { name: "Quality", icon: CheckSquare },
  ];

  return (
    <div className="w-full bg-card rounded-xl border border-border shadow-2xl overflow-hidden flex flex-col font-sans">
      {/* ERP Header */}
      <div className="h-12 border-b border-border bg-muted/30 flex items-center px-4 justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-primary text-primary-foreground flex items-center justify-center font-bold text-[10px]">E</div>
          <div className="font-semibold text-sm">Enterprise Workspace</div>
        </div>
        <div className="flex gap-2">
          <div className="w-48 h-7 bg-background border border-border rounded-md hidden sm:block" />
          <div className="w-7 h-7 bg-background border border-border rounded-full" />
        </div>
      </div>

      {/* ERP Body */}
      <div className="p-4 sm:p-6 bg-background flex-1 flex flex-col gap-6">
        
        {/* Module Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2 sm:gap-4">
          {modules.map((mod, i) => {
            const isActive = activeIndex === -1 ? false : i % 3 === activeIndex; // Mock active mapping
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center justify-center gap-2 p-2 sm:p-3 rounded-lg transition-colors cursor-pointer group"
              >
                <div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg border flex items-center justify-center transition-all ${
                    isActive 
                      ? "bg-primary/10 border-primary text-primary scale-110 shadow-sm" 
                      : "bg-secondary border-border text-muted-foreground group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5"
                  }`}
                >
                  <mod.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className={`text-[10px] sm:text-xs font-medium text-center ${isActive ? "text-primary" : ""}`}>{mod.name}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Dashboard Preview Below Modules */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border border-border rounded-lg bg-card p-4 shadow-sm flex flex-col gap-4"
        >
          <div className="font-medium text-sm text-foreground flex items-center justify-between">
            Recent Activity
            <span className="text-xs text-primary">View All</span>
          </div>
          
          <div className="space-y-3">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                </div>
                <div className="flex-1 space-y-1.5">
                  <div className="h-2 w-3/4 bg-muted rounded-full" />
                  <div className="h-2 w-1/2 bg-muted/60 rounded-full" />
                </div>
                <div className="h-4 w-12 bg-muted rounded flex-shrink-0" />
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}
