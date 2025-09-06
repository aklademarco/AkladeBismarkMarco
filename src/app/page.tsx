import Image from "next/image";
import ProjectsClient from "../components/ProjectsClient";
import SkillsClient from "../components/SkillsClient";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* left fixed social icons */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        

        <a href="https://github.com/aklademarco" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.485 2 12.02c0 4.428 2.867 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.238-.009-.868-.014-1.704-2.782.604-3.369-1.342-3.369-1.342-.454-1.158-1.11-1.468-1.11-1.468-.908-.62.069-.607.069-.607 1.004.071 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.094.39-1.988 1.029-2.688-.103-.253-.446-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.027 2.748-1.027.546 1.376.203 2.393.1 2.646.64.7 1.028 1.594 1.028 2.688 0 3.85-2.338 4.697-4.566 4.946.36.31.68.923.68 1.861 0 1.343-.012 2.427-.012 2.757 0 .268.18.58.688.482C19.135 20.203 22 16.447 22 12.02 22 6.485 17.523 2 12 2z" fill="currentColor" />
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/aklade-bismark-7426812a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8 8.98h4.8v2.04h.07c.67-1.27 2.3-2.6 4.73-2.6C23.34 8.42 24 11.08 24 15.02V24h-5V15.9c0-1.95-.04-4.46-2.72-4.46-2.72 0-3.14 2.12-3.14 4.31V24H8V8.98z" fill="currentColor" />
          </svg>
        </a>

        <a href="mailto:aklademarco2@gmail.com" aria-label="Email" className="text-gray-400 hover:text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" fill="currentColor" />
          </svg>
        </a>
      </div>
  <Header />

      <section id="home" className="md:grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="font-mono text-4xl md:text-5xl leading-tight text-white">
            Marco is a <span className="text-purple-400">web designer</span>
            <br />
            <span className="inline-block bg-gray-800/60 px-2 text-gray-100 mt-2">and front-end developer</span>
          </h1>

          <p className="text-gray-400">
            He crafts responsive websites where technologies
            <br />
            meet creativity
          </p>

          <a
            className="inline-block border border-purple-600 text-purple-100 px-4 py-2 rounded hover:bg-purple-600/10"
            href="https://wa.me/233240973574"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me =&gt;
          </a>
        </div>

        <div className="relative flex justify-center">
          <div className="p-2 rounded portrait-frame"> 
            <Image src="/marco1.jpg" alt="portrait" width={420} height={420}  />
          </div>
          <div className="absolute -bottom-4 left-10 border border-purple-500/60 px-3 py-1 text-sm font-mono text-purple-100 bg-transparent">Open for new opportunities</div>
        </div>
      </section>
      
  {/* Projects component (client) */}
  <ProjectsClient />

      <section id="about" className="mt-24 bg-transparent">
        <div className="md:flex md:gap-12 items-start">
          <div className="md:flex-1">
            <h2 className="text-2xl font-mono text-purple-400 mb-4">About me</h2>
            <p className="text-gray-300 mb-3">I am Aklade Bismark Marco, a Level 300 Computer Engineering student at Ghana Communication Technology University (GCTU) with a strong passion for technology, problem-solving, and innovation.</p>

            <p className="text-gray-300 mb-3">As a web developer, I specialize in building clean, responsive, and user-friendly interfaces. I enjoy transforming ideas into digital solutions that are not only functional but also visually appealing.</p>

            <p className="text-gray-300 mb-3">Beyond academics and coding, I volunteer with <strong>Chil-In-Tech</strong>, where I help introduce children to technology, coding, and digital skills. This experience has strengthened my leadership, teamwork, and communication abilities while allowing me to contribute to my community.</p>

            <div className="mb-4">
              <h3 className="text-sm text-gray-400 mb-2">🔹 Interests & Goals</h3>
              <ul className="list-inside list-disc text-gray-300">
                <li>Full-stack web development</li>
                <li>UI/UX design and user-centered solutions</li>
                <li>Leveraging technology to solve real-world problems</li>
                <li>Inspiring and mentoring the next generation of tech innovators</li>
              </ul>
            </div>

            <p className="text-gray-300">I am eager to learn, grow, and collaborate with like-minded individuals and organizations that believe in the power of technology to create impact.</p>

            <a href="#contact" className="inline-block mt-4 border border-purple-600 text-purple-100 px-4 py-2 rounded hover:bg-purple-600/10">Get in touch</a>
          </div>
        </div>
    </section>

  {/* Skills (client) */}
  <SkillsClient />

  <Contact />
  <Footer />
    </main>
  );
}
