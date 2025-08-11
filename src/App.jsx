import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Phone, FileText } from "lucide-react";

export default function PortfolioApp() {
  const user = {
    name: "Paul Akporarhe",
    title: "B2B Sales Representative • Growth Ops • Web Scraper",
    location: "Abuja, Nigeria",
    email: "akporarhe@gmail.com",
    phone: "+2348106519628",
    github: "https://github.com/lashakp",
    tagline:
      "I help companies find customers and build data-driven outreach using web scraping, text-to-speech, and sales ops.",
    about:
      "I'm a results-driven B2B sales and growth operator with experience building lead pipelines, automating data extraction from government and corporate sites, and producing natural-sounding text-to-speech demos for product experiences. I merge technical tooling (Python web scraping, Streamlit prototypes, TTS integrations) with practical sales systems (CRM workflows, outbound sequences, event-based campaigns).",
    skills: [
      "Lead generation & outreach",
      "Web scraping (BeautifulSoup, requests, Selenium)",
      "Text-to-Speech (ElevenLabs style integrations)",
      "Salesforce basics & CRM workflows",
      "Growth operations & sales enablement",
      "Streamlit prototypes & dashboards",
    ],
    experience: [
      {
        company: "Omeife Technology",
        role: "TTS & Web Scraping Engineer",
        dates: "2024 — Present",
        bullets: [
          "Built end-to-end TTS pipelines and voice demos for client prototypes.",
          "Designed and deployed scrapers for targeted industry data, normalising outputs for CRM ingestion.",
          "Produced documentation and reusable utilities to accelerate future scraping projects.",
        ],
      },
      {
        company: "Workium (Contract)",
        role: "Sales & Lead Generation",
        dates: "2025 (remote)",
        bullets: [
          "Ran outbound campaigns focused on international career mobility services.",
          "Coordinated with marketing to build lead lists and nurture sequences.",
        ],
      },
    ],
    projects: [
      {
        title: "Nigerian Government Scraper",
        description:
          "A resilient scraper that extracts open data from government portals, normalises records and outputs CSVs ready for CRM import.",
        tags: ["Python", "BeautifulSoup", "Data pipelines"],
        link: "#projects",
      },
      {
        title: "Pidgin TTS Demo App",
        description:
          "Streamlit prototype that converts conversational text to high-quality audio using TTS provider APIs — used for internal demos and client feedback.",
        tags: ["Streamlit", "TTS", "ElevenLabs-style"],
        link: "#projects",
      },
      {
        title: "Sales Outreach Playbook",
        description:
          "A repeatable outbound sequence and playbook for B2B corporate gifting and enterprise outreach with metrics tracking.",
        tags: ["Sales", "Playbook", "CRM"],
        link: "#projects",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">{user.name}</h1>
          <p className="text-sm text-slate-600">{user.title} — {user.location}</p>
        </div>
        <nav className="flex items-center gap-4">
          <a href={user.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm">
            <Github size={16} /> GitHub
          </a>
          <a href={`mailto:${user.email}`} className="inline-flex items-center gap-2 text-sm">
            <Mail size={16} /> Email
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm">
            <Phone size={16} /> Contact
          </a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 grid gap-12">
        <section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow-sm">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl font-extrabold leading-tight"
            >
              {user.tagline}
            </motion.h2>
            <p className="mt-4 text-slate-600">{user.about}</p>

            <div className="mt-6 flex gap-3">
              <a
                href={user.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:shadow"
              >
                <Github size={16} /> View GitHub
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm"
              >
                Contact me
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm"
              >
                <FileText size={14} /> Download CV
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {user.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 bg-slate-100 rounded">{s}</span>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-white p-6 rounded-xl">
            <div className="h-48 w-full rounded-lg border border-dashed border-slate-200 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <strong>Project / Demo</strong>
                <p className="text-xs mt-2">Add an embedded Streamlit demo, audio player, or screenshots here.</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
              <div>
                <div className="font-medium">Location</div>
                <div>{user.location}</div>
              </div>
              <div>
                <div className="font-medium">Availability</div>
                <div>Immediate</div>
              </div>
              <div>
                <div className="font-medium">Role focus</div>
                <div>Lead Gen, Sales Ops</div>
              </div>
              <div>
                <div className="font-medium">GitHub</div>
                <div className="truncate"><a href={user.github} className="text-blue-600">{user.github}</a></div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="grid gap-6">
          <h3 className="text-xl font-semibold">Selected Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {user.projects.map((p) => (
              <article key={p.title} className="bg-white p-4 rounded-xl shadow-sm">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">{t}</span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="text-sm text-blue-600">Learn more</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6 bg-white p-6 rounded-2xl shadow-sm">
          <div>
            <h3 className="text-lg font-semibold">Experience</h3>
            <div className="mt-4 space-y-4">
              {user.experience.map((e) => (
                <div key={e.company} className="p-4 border rounded-lg">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="font-medium">{e.role}</div>
                      <div className="text-sm text-slate-600">{e.company}</div>
                    </div>
                    <div className="text-xs text-slate-500">{e.dates}</div>
                  </div>
                  <ul className="mt-2 list-disc list-inside text-sm text-slate-600">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <h3 className="text-lg font-semibold">Contact & Quick links</h3>
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href={`mailto:${user.email}`} className="text-sm">{user.email}</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href={`tel:${user.phone}`} className="text-sm">{user.phone}</a>
              </div>
              <div className="flex items-center gap-3">
                <Github size={16} />
                <a href={user.github} target="_blank" rel="noreferrer" className="text-sm">View GitHub</a>
              </div>

              <div className="pt-4">
                <div className="text-sm text-slate-600">Quick CV</div>
                <a href="/resume.pdf" download className="mt-2 inline-flex items-center gap-2 px-3 py-2 border rounded">
                  <FileText size={14} /> Download resume
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section id="contact" className="bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-slate-600">Prefer email? <a href={`mailto:${user.email}`} className="text-blue-600">{user.email}</a></p>

          <form className="mt-4 grid md:grid-cols-2 gap-4">
            <input className="p-3 rounded border" placeholder="Name" />
            <input className="p-3 rounded border" placeholder="Email" />
            <input className="p-3 rounded border md:col-span-2" placeholder="Subject" />
            <textarea className="p-3 rounded border md:col-span-2" rows={5} placeholder="Message"></textarea>
            <div className="md:col-span-2 text-right">
              <button type="button" className="px-4 py-2 rounded bg-slate-900 text-white">Send message</button>
            </div>
          </form>
        </section>

        <footer className="text-center py-8 text-slate-500">
          <div>Built by {user.name} — <a href={user.github} className="text-blue-600">View source</a></div>
          <div className="text-xs mt-2">Made with simple React + Tailwind. Replace placeholders with real demos or deploy to Vercel / Netlify.</div>
        </footer>
      </main>
    </div>
  );
}
