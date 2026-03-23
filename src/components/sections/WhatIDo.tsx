import { motion } from "framer-motion";
import { Server, Monitor, Container, Cloud } from "lucide-react";

const services = [
  {
    icons: [Monitor],
    title: "Frontend",
    desc: "High-performance UIs with pixel-perfect precision.",
  },
  {
    icons: [Server],
    title: "Backend",
    desc: "APIs, distributed systems, and heavy-duty logic.",
  },
  {
    icons: [Container, Cloud],
    title: "DevOps & Cloud",
    desc: "Automated deployments and cloud infrastructure.",
  },
];

export default function WhatIDo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border-y border-border">
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="bg-background p-10 group"
        >
          <div className="flex gap-2 mb-4">
            {s.icons.map((Icon, idx) => (
              <Icon key={idx} className="text-primary" size={24} />
            ))}
          </div>
          <h4 className="font-bold uppercase mb-2">{s.title}</h4>
          <p className="text-muted-foreground text-sm font-mono">{s.desc}</p>
        </motion.div>
      ))}
    </section>
  );
}
