import { motion } from "framer-motion";
import { Award, ShieldCheck, Cloud, TerminalIcon, Network, CopyPlusIcon, Code, FileCode2, Computer, Trophy, Star, Zap } from "lucide-react";

const certifications = [
  {
    title: "Google Cloud Fundamentals",
    issuer: "Coursera",
    year: "2026",
    icon: Cloud,
    link: "https://drive.google.com/file/d/1iph-W-X4YMiPtOtnZNK7UlWzbwoX_LDV/view?usp=drive_link"
  },
  {
    title: "Red Hat System Administrator",
    issuer: "Red Hat",
    year: "2024",
    icon: TerminalIcon,
    link: "https://drive.google.com/file/d/1XGld8UmcF6XLn1tbjyZRElEB5s03zRTo/view?usp=drive_link"
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    year: "2024",
    icon: Network,
    link: "https://drive.google.com/file/d/1ZF6B0BllJnwflXb3xszeSIMdy6Uy9mQO/view?usp=drive_link"
  },
  {
    title: "Computer Communications",
    issuer: "Coursera",
    year: "2024",
    icon: Computer,
    link: "https://drive.google.com/file/d/1zMQ3yUMjAM3HzX2ybQ1bPNglHwqk3EOZ/view?usp=drive_link"
  },
  {
    title: "Data Structures and Algorithms",
    issuer: "LPU-NeoColab",
    year: "2024",
    icon: FileCode2,
    link: "https://drive.google.com/file/d/1y4yfV7Vy0RbGbR7lQzumx8jAJbZSaY8G/view?usp=drive_link"
  },
  {
    title: "Object-Oriented Programming in C++",
    issuer: "Saylor",
    year: "2024",
    icon: Code,
    link: "https://drive.google.com/file/d/1ICD4S-k2QD5AMAlruvgEShjN_chelvWo/view?usp=drive_link",
  },
];

const achievements = [
  {
    title: "Problem Solver",
    desc: "Solved 150+ problems across various platforms",
    icon: Trophy,
  },
  // {
  //   title: "Open Source Contributor",
  //   desc: "Merged 15+ PRs into major frontend frameworks.",
  //   year: "2024",
  //   icon: Star,
  // },
  // {
  //   title: "Top Performer Award",
  //   desc: "Recognized for delivering critical services ahead of schedule.",
  //   year: "2023",
  //   icon: Zap,
  // },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12">
          {/* Left Side: Certifications */}
          <div>
            <h2 className="text-sm font-mono text-primary mb-12 uppercase tracking-[0.3em]">
              Verified_Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, idx) => {
                const CardWrapper = cert.link ? 'a' : 'div';
                const linkProps = cert.link ? { href: cert.link, target: "_blank", rel: "noopener noreferrer" } : {};

                return (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <CardWrapper
                      {...linkProps}
                      className={`group bg-background border border-border p-6 hover:border-primary transition-colors flex flex-col items-start gap-4 h-full w-full block ${cert.link ? 'cursor-pointer' : ''}`}
                    >
                      <div className="bg-secondary p-3 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <cert.icon size={20} />
                      </div>
                      <div className="space-y-1 mt-2">
                        <h3 className="font-bold uppercase text-base leading-tight group-hover:text-primary transition-colors">{cert.title}</h3>
                        <p className="font-mono text-xs text-muted-foreground">
                          {cert.issuer} // {cert.year}
                        </p>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Achievements */}
          <div>
            <h2 className="text-sm font-mono text-primary mb-12 uppercase tracking-[0.3em] lg:pl-6">
              Achievements_Log
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:pl-6 lg:border-l border-border">
              {achievements.map((achieve, idx) => (
                <motion.div
                  key={achieve.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="group bg-background border border-border p-6 hover:border-primary transition-colors flex flex-col items-start gap-4 h-full w-full">
                    <div className="bg-secondary p-3 border border-border group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <achieve.icon size={20} />
                    </div>
                    <div className="space-y-1 mt-2">
                      <h3 className="font-bold uppercase text-base leading-tight group-hover:text-primary transition-colors">{achieve.title}</h3>
                      <p className="font-mono text-xs text-muted-foreground">
                        {achieve.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

