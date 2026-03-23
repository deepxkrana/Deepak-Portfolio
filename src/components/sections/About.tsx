import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm font-mono text-primary mb-8 uppercase tracking-[0.3em]">
            About_Me
          </h2>
          <div className="space-y-4 text-muted-foreground font-mono text-sm leading-relaxed">
            <p>
              I build Full Stack Applications, and cloud infrastructure that
              handle real-world scale and performance. Clean architecture over clever hacks.
            </p>
            <p>
              Currently deepening my expertise in Automation,distributed systems,
              container orchestration, and performance engineering.
            </p>
            <p>
              Goal: ship software that developers trust, solves the real-world problems and that users never think
              about — because it just works.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
