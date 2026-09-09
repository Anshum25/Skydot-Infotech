import { motion } from "framer-motion";
import { useMemo } from "react";

export function SlideIntelligence() {
  // Use stable random values so it doesn't jitter on re-renders
  const { nodes, connections } = useMemo(() => {
    const n = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
    }));
    
    const c = [];
    for (let i = 0; i < n.length; i++) {
      for (let j = i + 1; j < n.length; j++) {
        // connect nodes that are close to each other
        const dist = Math.hypot(n[i].x - n[j].x, n[i].y - n[j].y);
        if (dist < 30) {
          c.push({ source: n[i], target: n[j], dist });
        }
      }
    }
    return { nodes: n, connections: c };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map((conn, i) => (
          <motion.line
            key={i}
            x1={`${conn.source.x}%`}
            y1={`${conn.source.y}%`}
            x2={`${conn.target.x}%`}
            y2={`${conn.target.y}%`}
            stroke="var(--skydot-orange)"
            strokeWidth="1.5"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
          />
        ))}
      </svg>
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(30,136,229,0.8)]"
          style={{ left: `${node.x}%`, top: `${node.y}%`, transform: "translate(-50%, -50%)" }}
          animate={{
            x: ["-15px", "15px", "-15px"],
            y: ["-15px", "15px", "-15px"],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: node.id * 0.3 }}
        >
          <div className="absolute inset-0 w-full h-full bg-primary rounded-full animate-ping opacity-30" />
        </motion.div>
      ))}
    </div>
  );
}
