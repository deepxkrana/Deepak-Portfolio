import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Trainee",
    company: "Lovely Professional University",
    type: "Training",
    period: "June 2025 - July 2025",
    desc: "Gained experience in Problem Solving and Data Structures and Algorithms with real-world projects.",
  },
  {
    role: "Full Stack Developer",
    company: "Director`s Portfolio",
    type: "Freelance",
    period: "June 2025",
    desc: "Built and deployed a brand-aligned portfolio website for a TV show director showcasing work, media, and contact details with a user-centric design.",
  },
  {
    role: "Full Stack Developer",
    company: "Head of Production`s Portfolio",
    type: "Freelance",
    period: "August 2025",
    desc: "Built and deployed a brand-aligned portfolio website for a Head of Production showcasing work, media, and contact details with a user-centric design.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-border pb-6">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
            Experience_Logs
          </h2>
          <span className="font-mono text-muted-foreground text-sm hidden md:block">
            Runtime: {new Date().getFullYear() - 2023} YRS
          </span>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="group relative pl-6 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute w-3 h-3 bg-background border-2 border-border group-hover:border-primary group-hover:bg-primary rounded-full -left-[7px] top-1.5 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted-foreground bg-secondary px-3 py-1 border border-border">
                  [{exp.period}]
                </span>
              </div>
              <p className="text-muted-foreground font-mono text-sm max-w-3xl leading-relaxed">
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
