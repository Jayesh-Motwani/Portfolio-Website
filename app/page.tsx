import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="hero section">
        <div className="hero-text">
          <h1>Jayesh<br />Motwani.</h1>
          <p>
            B.Tech Student at VIT Vellore. Aspiring ML/Data Science Engineer & Researcher focused on ML first principles, robust system architecture, and advancing the frontiers of AI.
          </p>
          <div style={{ marginTop: "var(--spacing-md)", display: "flex", gap: "1rem" }}>
            <a href="/resume.pdf" className="btn" download>Download CV</a>
            <Link href="/projects" className="btn btn-outline">View Projects</Link>
          </div>
        </div>
        <div className="hero-image-container">
          {/* We wrap the image in a container with a solid background and use hover effects to create a flat shadow illusion */}
          <Image
            src="/profile.jpg"
            alt="Jayesh Motwani"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      </section>

      <section className="section">
        <h2 style={{ fontSize: "2rem", marginBottom: "var(--spacing-lg)" }}>Technical Expertise</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Languages & Frameworks</h3>
            <p>Python, C, C++, ROS2, R, FastAPI, PyTorch, ScikitLearn, SciPy, Docker</p>
          </div>
          <div className="skill-card">
            <h3>Core Concepts</h3>
            <p>OOP, Version Control (Git), MLOps, SQL, Algorithm Design</p>
          </div>
          <div className="skill-card">
            <h3>Machine Learning</h3>
            <p>Data Science, Deep Learning, Reinforcement Learning, Model Development, Data Analysis, RAG, LLMs, Optimization</p>
          </div>
        </div>
      </section>
    </>
  );
}
