"use client";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Creative Landing Page",
    desc: "Elegant, responsive landing with scroll animations.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    href: "#"
  },
  {
    title: "E‑commerce UI",
    desc: "Product grid, filters, cart, and checkout flow.",
    tech: ["Next.js", "Stripe", "Zustand"],
    href: "#"
  },
  {
    title: "Analytics Dashboard",
    desc: "Realtime charts, auth, and role‑based access.",
    tech: ["Next.js", "Supabase", "Recharts"],
    href: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section mt-20">
      <div className="container mx-auto">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300">A selection of work that mirrors the structure of eliasdevis.github.io.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              className="card block group bg-gray-800/40 p-4 rounded-lg"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 group-hover:scale-[1.01] transition" />
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-300">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
