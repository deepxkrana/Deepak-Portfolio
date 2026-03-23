import { motion } from "framer-motion";

const categories = [
  { title: "Frontend", items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React"] },
  { title: "Backend", items: ["Node.js", "MySQL", "Supabase", "Firebase", "MongoDB"] },
  { title: "DevOps & Cloud", items: ["Docker", "Kubernetes", "GCP", "Git/Github","CI/CD"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-12 uppercase tracking-[0.3em]">
          Tech_Stack
        </h2>
        <div className="relative grid gap-12 md:grid-cols-3 md:items-start">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`relative z-10 w-full flex flex-col items-center ${
                idx === 0
                  ? "md:items-start"
                  : idx === 1
                    ? "md:items-center"
                    : "md:items-end"
              }`}
            >
              <div className="w-fit">
                <h3 className="text-xl font-bold mb-6 uppercase border-l-2 border-primary pl-4 inline-block md:block">
                  {cat.title}
                </h3>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center justify-start gap-3 font-mono text-sm text-muted-foreground hover:text-accent cursor-default transition-colors"
                    >
                      <div className="w-2 h-2 bg-border group-hover:bg-accent transition-colors" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          <svg
            className="absolute top-0 left-0 w-full h-full -z-10 opacity-20 hidden md:block pointer-events-none"
            fill="none"
          >
            <line x1="33%" y1="30" x2="66%" y2="30" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="33%" y1="60" x2="66%" y2="60" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}
