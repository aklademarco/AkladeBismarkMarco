"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function validateEmail(e: string) {
    return /\S+@\S+\.\S+/.test(e);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setSubmitting(true);

    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    const mailto = `mailto:hello@example.com?subject=${subject}&body=${body}`;

    // open user's mail client
    window.location.href = mailto;

    // reset after short delay (user leaves page); keep minimal UX
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 700);
  }

  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-mono text-purple-300 mb-4">Contact</h2>

      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <div>
          <label className="text-sm text-gray-300 block mb-1" htmlFor="name">Name</label>
          <input id="name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 rounded bg-gray-900 border border-gray-700" placeholder="Your name" />
        </div>

        <div>
          <label className="text-sm text-gray-300 block mb-1" htmlFor="email">Email</label>
          <input id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 rounded bg-gray-900 border border-gray-700" placeholder="your@email.com" />
        </div>

        <div>
          <label className="text-sm text-gray-300 block mb-1" htmlFor="message">Message</label>
          <textarea id="message" value={message} onChange={e => setMessage(e.target.value)} rows={6} className="w-full p-2 rounded bg-gray-900 border border-gray-700" placeholder="How can I help?" />
        </div>

        {error && <div className="text-sm text-red-400">{error}</div>}

        <div>
          <button type="submit" disabled={submitting} className="inline-block bg-purple-600 text-white px-4 py-2 rounded disabled:opacity-60">
            {submitting ? "Opening mail client..." : "Send message"}
          </button>
        </div>
      </form>
    </section>
  );
}
