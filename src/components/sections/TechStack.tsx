import { motion } from "framer-motion";

const categories = [
  { title: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "Go", "PostgreSQL"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "AWS", "Terraform"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm font-mono text-primary mb-12 uppercase tracking-[0.3em]">
          System_Architecture
        </h2>
        <div className="relative grid gap-12 md:grid-cols-3 md:items-start">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`relative z-10 w-full ${
                idx === 0
                  ? "md:text-left"
                  : idx === 1
                    ? "md:text-center"
                    : "md:text-right"
              }`}
            >
              <h3 className="text-xl font-bold mb-6 uppercase border-l-2 border-primary pl-4 inline-block">
                {cat.title}
              </h3>
              <div
                className={`space-y-3 md:text-left ${
                  idx === 0
                    ? ""
                    : idx === 1
                      ? "md:mx-auto w-fit"
                      : "md:ml-auto w-fit md:translate-x-4"
                }`}
              >
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
