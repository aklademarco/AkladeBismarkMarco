"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PROJECTS = [
  {
    title: "Sync Finance",
    desc: "A modern, comprehensive personal finance management application built with React and Tailwind CSS. Track your expenses, manage budgets, generate reports, and take control of your financial life with an intuitive dark/light mode interface.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    href: "https://sync-finance-seven.vercel.app/",
    img: "/syncFinance.jpg"
  },
  {
    title: "SyncWell Devs",
    desc: "A modern web agency site for SyncWell Devs, built with JS, CSS, HTML, and TypeScript. Showcases services, team, and projects with a clean responsive design.",
    tech: ["JavaScript", "CSS", "HTML", "TypeScript"],
    href: "https://aklademarco.github.io/SyncWell-Devs/",
    img: "/syncwelldevs.jpg"
  },
  {
    title: "Ehyen Foods",
    desc: "Natural, additive-free Ghanaian spices. Built with Next.js, Tailwind, and EmailJS for form submission.",
    tech: ["Next.js", "Tailwind", "EmailJS"],
    href: "https://ehyen-foods.vercel.app/",
    img: "/ehyenfoods.jpg"
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
              {p.img ? (
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 group-hover:scale-[1.01] transition">
                  <Image
                    src={p.img}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-xl"
                    priority={i === 0}
                  />
                </div>
              ) : (
                <div className="aspect-video rounded-xl bg-gray-100 dark:bg-gray-800 mb-4 group-hover:scale-[1.01] transition" />
              )}
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
