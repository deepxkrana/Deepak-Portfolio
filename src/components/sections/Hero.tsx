import { motion } from "framer-motion";
import { Server, Cloud, Database } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-6 pt-14 overflow-hidden">
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent)] -z-10" />

      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase">
            [ system.status: operational ]
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase leading-[0.9] tracking-tighter">
            building{" "}
            <span className="glitch text-primary italic" data-text="scalable">
              scalable
            </span>{" "}
            systems
            <br />
            not just websites
          </h1>
          <p className="text-muted-foreground max-w-xl font-mono text-base md:text-lg">
            Full-stack developer // Cloud Architect // Problem solver.
            <br />
            Optimizing for latency, building for scale.
          </p>
        </motion.div>

        {/* Pixel accent icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex gap-6"
        >
          <div className="animate-float">
            <Server className="text-primary" size={28} />
          </div>
          <div className="animate-float" style={{ animationDelay: "0.3s" }}>
            <Cloud className="text-accent" size={28} />
          </div>
          <div className="animate-float" style={{ animationDelay: "0.6s" }}>
            <Database className="text-primary" size={28} />
          </div>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-8 py-4 font-bold uppercase hover:translate-x-1 hover:-translate-y-1 transition-transform hard-shadow active:shadow-none active:translate-x-0 active:translate-y-0"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="border border-border px-8 py-4 font-mono text-sm hover:bg-secondary transition-colors"
          >
            GET_CONTACT.SH
          </a>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-8 inset-x-0 flex flex-col items-center gap-1 font-mono text-[10px] text-muted-foreground uppercase tracking-[0.2em]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          className="text-primary"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32,16.016l-5.672-5.664c0,0-3.18,3.18-6.312,6.312V0h-8.023v16.664l-6.32-6.32L0,16.016L16,32L32,16.016z" />
        </svg>
        Scroll to explore
      </motion.div>
    </section>
  );
}
