import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("deepak@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter">
            let's build something{" "}
            <span className="text-primary italic">real</span>
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            Open for collaboration, freelance, or just a good conversation about
            systems.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={copyEmail}
              className="bg-primary text-primary-foreground px-6 py-3 font-bold uppercase text-sm hover:translate-x-1 hover:-translate-y-1 transition-transform hard-shadow active:shadow-none active:translate-x-0 active:translate-y-0 flex items-center gap-2"
            >
              <Mail size={16} />
              {copied ? "Copied!" : "Copy Email"}
            </button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-6 py-3 font-mono text-sm hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border px-6 py-3 font-mono text-sm hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
