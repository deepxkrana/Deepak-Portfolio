import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Terminal() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="logs" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-secondary border border-border overflow-hidden shadow-2xl"
        >
          <div className="bg-border/50 px-4 py-2 flex items-center justify-between border-b border-border">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
              bash — 80×24
            </span>
          </div>
          <div className="p-6 font-mono text-sm space-y-2">
            <p>
              <span className="text-muted-foreground">➜</span>{" "}
              <span className="text-accent">~</span>{" "}
              <span className="text-primary">status</span>
            </p>
            <p className="text-foreground/80">System: Operational</p>
            <p className="text-foreground/80">
              Current_Focus: Building_Distributed_Systems
            </p>
            <p className="text-foreground/80">GitHub_Activity: Active</p>
            <p className="text-foreground/80">Local_Time: {time}</p>
            <p className="mt-4">
              <span className="text-muted-foreground">➜</span>{" "}
              <span className="text-accent">~</span>{" "}
              <span className="animate-blink text-primary">▊</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
