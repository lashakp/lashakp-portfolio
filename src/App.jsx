import React from "react";
import { motion } from "framer-motion";
import { Github, Mail, Phone, FileText } from "lucide-react";
import assessmentImg from "./images/professional-assessment.png";
import cert1 from "./images/cert1.png";
import cert2 from "./images/cert2.png";

export default function PortfolioApp() {
  const user = {
    name: "Paul Akporarhe",
    title: "B2B Sales • Growth Ops • Data Projects",
    location: "Abuja, Nigeria",
    email: "akporarhe@gmail.com",
    phone: "+2348106519628",
    github: "https://github.com/lashakp",
    tagline:
      "I combine B2B and B2C sales expertise with data-driven projects — from web scraping and structured querying to ML-powered prediction tools and data preprocessing (pandas).",
    about:
      "With a background in sales, field operations, and growth enablement, I’ve helped companies scale outreach, manage client pipelines, and optimize performance. On the technical side, I build scrapers, TTS demos, structured querying analytics, and machine learning models (like my Breast Cancer Recurrence Predictor on Hugging Face). My focus is blending business impact with technical execution.",
    skills: [
      "B2B & B2C Sales Strategy",
      "Lead generation & outreach",
      "Growth operations & CRM workflows",
      "Web scraping (Python, BeautifulSoup, Selenium)",
      "Machine Learning (Scikit-learn, Gradio, Hugging Face)",
      "Text-to-Speech prototypes (Streamlit, ElevenLabs APIs)",
      "Structured querying (SQL, Pandas)",
    ],
    projects: [
      {
        title: "Breast Cancer Prediction Model",
        description:
          "An ML model to predict breast cancer recurrence. Includes EDA, feature ranking, and an interactive Gradio app deployed on Hugging Face Spaces.",
        tags: ["Machine Learning", "Gradio", "Hugging Face"],
        link: "https://huggingface.co/spaces/lashakp/breast-cancer-recurrence-prediction",
      },
      {
        title: "Nigerian Government Scraper",
        description:
          "A resilient scraper that extracts open data from government portals, normalizes records, and outputs clean CSVs ready for CRM imports.",
        tags: ["Python", "BeautifulSoup", "Data pipelines"],
        link: "#projects",
      },
      {
        title: "Pidgin TTS Demo App",
        description:
          "Streamlit prototype that converts conversational text into natural-sounding speech using TTS APIs — tested with local dialects.",
        tags: ["Streamlit", "TTS", "APIs"],
        link: "#projects",
      },
      {
        title: "Employee Data Cleaning and Transformation (SQL)",
        description:
          "Built a SQL pipeline to clean and standardize messy HR employee records, including trimming names, validating emails, normalizing phone numbers, converting messy salary and hire date formats, and flagging/archiving invalid data. Delivered a cleaned dataset ready for reporting and analytics.",
        tags: ["SQL", "Data Cleaning", "ETL", "Database"],
        link: "#projects",
      },
    ],
  };

  return (
    <div>
      <main className="max-w-6xl mx-auto px-6 py-8 grid gap-12">
        
        {/* --- Hero/About Section --- */}
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

            {/* Quick links */}
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
                href="/Letter_of_Recommendation_Paul.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm hover:shadow"
              >
                📄 Download Letter of Recommendation
              </a>

              <a
                href="/My Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border text-sm"
              >
                <FileText size={14} /> Download CV
              </a>
            </div>
      {/* --- Certifications Section --- */}
<section className="mt-16 p-6 bg-gray-50 rounded-xl shadow-sm">
  <h2 className="text-2xl font-bold mb-4">Certifications & Assessments</h2>
  <div className="grid md:grid-cols-2 gap-6 items-center">
    <div>
      <p className="mb-4 text-slate-700">
        Successfully completed a professional assessment in{" "}
        <strong>NSQ Data Analysis with Python Level 3</strong>{" "}
        <strong>[Computer Professionals Registration Council of Nigeria]</strong>, 
        demonstrating verified skills in{" "}
        <strong>Data Analysis & Visualization with Python</strong>.
      </p>
    </div>
    <div>
      {/* Assessment */}
      <div className="mb-6">
        <a href="/assessment.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src={assessmentImg}
            alt="Professional Assessment Proof"
            className="rounded-xl shadow-md w-full"
          />
        </a>
        <a
          href="/assessment.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-600 hover:underline text-sm"
        >
          View Full Assessment (PDF)
        </a>
      </div>

      {/* Certificate 1 */}
      <div className="mb-6">
        <a href="/cert1.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src={cert1}
            alt="Fundamentals of Digital Marketing"
            className="rounded-xl shadow-md w-full"
          />
        </a>
        <a
          href="/cert1.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-600 hover:underline text-sm"
        >
          View Certificate (PDF)
        </a>
      </div>

      {/* Certificate 2 */}
      <div>
        <a href="/cert2.pdf" target="_blank" rel="noopener noreferrer">
          <img
            src={cert2}
            alt="Hustle Academy"
            className="rounded-xl shadow-md w-full"
          />
        </a>
        <a
          href="/cert2.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 text-blue-600 hover:underline text-sm"
        >
          View Certificate (PDF)
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Skills */}
      <div className="mt-6 flex flex-wrap gap-2">
              {user.skills.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 bg-slate-100 rounded"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* Quick Info */}
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
                <div>Lead Gen, Sales Ops, Web Scraping, Data Analysis</div>
              </div>
              <div>
                <div className="font-medium">GitHub</div>
                <div className="truncate">
                  <a href={user.github} className="text-blue-600">
                    {user.github}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Preview */}
          <div className="bg-gradient-to-br from-slate-100 to-white p-6 rounded-xl">
            <div className="rounded-lg border border-slate-200 overflow-hidden shadow-sm">
              <img
                src="/huggingface-preview.png"
                alt="Breast Cancer Prediction App Preview"
                className="w-full object-cover"
              />
              <a
                href="https://huggingface.co/spaces/lashakp/breast-cancer-recurrence-prediction"
                target="_blank"
                rel="noreferrer"
                className="block text-center px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700"
              >
                Try Live Demo
              </a>
            </div>
            <div className="mt-3 text-center text-slate-600 text-sm">
              🔮 Try my interactive ML model predicting breast cancer recurrence.
            </div>
          </div>
        </section>

        {/* --- Projects Section --- */}
        <section id="projects" className="grid gap-6">
          <h3 className="text-xl font-semibold">Selected Projects</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {user.projects.map((p) => (
              <article
                key={p.title}
                className="bg-white p-4 rounded-xl shadow-sm"
              >
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 bg-slate-100 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a href={p.link} className="text-sm text-blue-600">
                    Learn more
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        

        {/* --- Contact Section --- */}
        <section
          id="contact"
          className="bg-white p-6 rounded-2xl shadow-sm"
        >
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-slate-600">
            Prefer email?{" "}
            <a href={`mailto:${user.email}`} className="text-blue-600">
              {user.email}
            </a>
          </p>

          <form className="mt-4 grid md:grid-cols-2 gap-4">
            <input className="p-3 rounded border" placeholder="Name" />
            <input className="p-3 rounded border" placeholder="Email" />
            <input
              className="p-3 rounded border md:col-span-2"
              placeholder="Subject"
            />
            <textarea
              className="p-3 rounded border md:col-span-2"
              rows={5}
              placeholder="Message"
            ></textarea>
            <div className="md:col-span-2 text-right">
              <button
                type="button"
                className="px-4 py-2 rounded bg-slate-900 text-white"
              >
                Send message
              </button>
            </div>
          </form>
        </section>

        {/* --- Footer --- */}
        <footer className="text-center py-8 text-slate-500">
          <div>
            Built by {user.name} —{" "}
            <a href={user.github} className="text-blue-600">
              View source
            </a>
          </div>
          <div className="text-xs mt-2">
            Made with simple React + Tailwind. <br /> Deployed on Vercel.
          </div>
        </footer>
      </main>
    </div>
  );
}
