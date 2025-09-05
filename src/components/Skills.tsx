"use client";
import { motion } from "framer-motion";

const STACK = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", "Tailwind", "Sass",
  "Git", "Docker", "PostgreSQL", "MongoDB"
];

export default function Skills() {
  return (
    <section id="skills" className="section bg-transparent mt-12">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-mono font-bold mb-6">Skills & Tools</h2>
        <div className="bg-gray-800/40 p-4 rounded-lg">
          <div className="flex flex-wrap gap-3">
            {STACK.map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="px-3 py-1 rounded-full border border-gray-700 text-sm text-gray-300"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
