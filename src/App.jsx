import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-black p-4">
        <nav className="flex justify-between items-center p-4 shadow">
          <h1 className="text-2xl font-bold">Farwa Sajjad</h1>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-2">Hi, I’m Farwa 👋</h2>
      <p className="max-w-xl">
        I’m a Computer Science student and aspiring Data Scientist passionate about building smart systems, clean dashboards, and impactful ML solutions. Welcome to my digital space.
      </p>
    </section>
  );
}

function Experience() {
  return (
    <section className="p-6 space-y-4">
      <div className="p-4 border rounded shadow">
        <p><strong>Machine Learning Intern – Gatestone</strong><br />
        Built ML models for workforce forecasting, automated ETL, and migrated data systems to AWS. Reduced processing time by 35%.</p>
      </div>
      <div className="p-4 border rounded shadow">
        <p><strong>Operations Supervisor – Capital One Project</strong><br />
        Managed a team of 75+ agents, improved KPIs, and led performance tracking using Power BI dashboards.</p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="p-6 space-y-4">
      <div className="p-4 border rounded shadow">
        <p><strong>SmartCart (Big Data Recommender System)</strong><br />
        Built collaborative filtering & association rule mining models to suggest products for ecommerce users.</p>
      </div>
      <div className="p-4 border rounded shadow">
        <p><strong>SunFi (Hackathon – ConUHacks)</strong><br />
        Developed a finance assistant with chatbot support using React and OpenAI’s API.</p>
      </div>
    </section>
  );
}

function Resume() {
  return (
    <section className="p-6">
      <a
        href="/Farwa_Sajjad_Resume.pdf"
        download
        className="bg-black text-white px-4 py-2 rounded shadow"
      >
        Download Resume
      </a>
    </section>
  );
}

function Services() {
  return (
    <section className="p-6">
      <ul className="list-disc ml-6">
        <li>Data analysis & dashboards (Excel, SQL, Power BI)</li>
        <li>Machine learning model development</li>
        <li>Resume reviews & portfolio feedback</li>
      </ul>
    </section>
  );
}

function Contact() {
  return (
    <section className="p-6 max-w-md">
      <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" className="w-full p-2 border rounded" required />
        <textarea name="message" placeholder="Your message" className="w-full p-2 border rounded" rows={4} required />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
}
