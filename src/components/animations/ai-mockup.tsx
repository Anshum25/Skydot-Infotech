import { motion } from "framer-motion";
import { User, Bot, BarChart3, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function AiMockup() {
  return (
    <div className="w-full max-w-lg mx-auto bg-card rounded-xl border border-border shadow-xl overflow-hidden flex flex-col font-sans">
      {/* Header */}
      <div className="h-14 border-b border-border bg-muted/30 flex items-center px-4 gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">Skydot Copilot</div>
          <div className="text-xs text-muted-foreground flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-4 flex flex-col gap-4 bg-background h-[320px] overflow-hidden relative">
        {/* User Message */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex gap-3 justify-end"
        >
          <div className="bg-primary text-primary-foreground text-sm py-2.5 px-4 rounded-2xl rounded-tr-sm max-w-[85%] leading-relaxed shadow-sm">
            Show this month's sales performance compared to last month.
          </div>
          <div className="w-8 h-8 shrink-0 rounded-full bg-secondary border border-border flex items-center justify-center text-secondary-foreground">
            <User className="w-4 h-4" />
          </div>
        </motion.div>

        {/* AI Response */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex gap-3"
        >
          <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1">
            <Bot className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-2 max-w-[85%]">
            <div className="bg-secondary text-foreground text-sm py-2.5 px-4 rounded-2xl rounded-tl-sm border border-border/50 leading-relaxed shadow-sm">
              Here is the sales performance for this month. Revenue is up by 14.2%.
            </div>
            
            {/* Embedded Dashboard inside chat */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="bg-card border border-border rounded-xl p-3 shadow-sm mt-1"
            >
              <div className="flex items-center justify-between mb-3 border-b border-border/50 pb-2">
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                  <BarChart3 className="w-3 h-3" /> Performance Overview
                </span>
                <span className="text-xs font-medium text-green-500 flex items-center bg-green-500/10 px-1.5 py-0.5 rounded">
                  +14.2% <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="text-[10px] text-muted-foreground uppercase">Revenue</div>
                  <div className="text-sm font-bold">$124,563</div>
                </div>
                <div className="bg-muted/50 rounded-lg p-2">
                  <div className="text-[10px] text-muted-foreground uppercase">Orders</div>
                  <div className="text-sm font-bold">1,492</div>
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="text-xs font-medium mb-1">Top Products</div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" /> ERP Pro License
                  </span>
                  <span className="font-medium">$45k</span>
                </div>
                <div className="flex justify-between text-xs items-center">
                  <span className="text-muted-foreground flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary" /> HRMS Implementation
                  </span>
                  <span className="font-medium">$32k</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Fade out bottom to make it look like part of a larger app */}
        <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Input Area */}
      <div className="p-3 border-t border-border bg-background">
        <div className="h-10 rounded-full border border-border bg-muted flex items-center px-4 text-sm text-muted-foreground">
          Ask a question about your data...
        </div>
      </div>
    </div>
  );
}
