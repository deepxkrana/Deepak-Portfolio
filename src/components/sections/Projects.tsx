import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    name: "Rank",
    problem: "Distributed state synchronization for edge functions.",
    stack: ["Go", "Redis", "AWS"],
    status: "BUILDING" as const,
    github: "https://github.com/deepxkrana/Rank-P2",
    demo: "https://rank-p2.vercel.app/",
  },
  {
    name: "Director`s Portfolio",
    problem: "An Industry Standard Portfolio for a TV Director",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "Framer Motion", ],
    status: "LIVE" as const,
    github: "https://github.com/deepxkrana/Prabhat_Rawat",
    demo: "https://prabhatrawat.vercel.app/",
  },
  {
    name: "FarmQuest",
    problem: "A Gamified Learning Platform for Farmers",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
    status: "LIVE" as const,
    github: "https://github.com/deepxkrana/FarmQuest",
    demo: "https://farm-quest-pearl.vercel.app/",
  },
  {
    name: "Secure File Management System",
    problem: "A Browser based Secure File Management System for storing and sharing files.",
    stack: ["Node.js", "CLI", "Templates"],
    status: "EXPERIMENTAL" as const,
    github: "https://github.com/deepxkrana/SFMS",
    demo: "#",
  },
  {
    name: "AI Based Injury Prevention Advisor",
    problem: "An AI Based Injury Prevention Advisor",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Gemini"],
    status: "LIVE" as const,
    github: "https://github.com/deepxkrana/IPA",
    demo: "https://injurypreventionadvisor.vercel.app/",
  },
  {
    name: "Konnect",
    problem: "A Social Media Overlay for Searching Users on Social Media Platforms",
    stack: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Node.Js", "Supabase Auth", "PostgreSQL"],
    status: "EXPERIMENTAL" as const,
    github: "https://github.com/deepxkrana/Konnect",
    demo: "#",
  },
];

const statusColor = {
  LIVE: "border-accent text-accent",
  BUILDING: "border-primary text-primary",
  EXPERIMENTAL: "border-primary text-primary",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
            Projects_Logs
          </h2>
          <span className="font-mono text-muted-foreground text-sm">
            Total_Count: {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className="bg-background p-8 group hover:bg-secondary/30 transition-colors"
            >
              <div className="flex justify-between items-start mb-6">
                <span
                  className={`text-[10px] font-mono px-2 py-1 border ${statusColor[p.status]}`}
                >
                  {p.status}
                </span>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`GitHub for ${p.name}`}
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={p.demo}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`Demo for ${p.name}`}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">
                {p.name}
              </h3>
              <p className="text-muted-foreground font-mono text-sm mb-6 leading-relaxed">
                {p.problem}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-muted-foreground uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
