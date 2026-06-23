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
            <a href="/Jayesh_Resume_Software_CVGC.pdf" className="btn" download="Jayesh_Motwani_Resume.pdf">Download CV</a>
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
            <h3>AI Engineering</h3>
            <p>AI Agents, Retrieval-Augmented Generation (RAG), Cloud AI Engineering, AI Automation, Agent Evaluation, Prompt Engineering, Hallucination Mitigation</p>
          </div>
          <div className="skill-card">
            <h3>Machine Learning & Deep Learning</h3>
            <p>Machine Learning, Deep Learning, PyTorch, Scikit-Learn, XGBoost, Variational Autoencoders, Transformer Architectures, CNNs, Representation Learning, Time Series Forecasting</p>
          </div>
          <div className="skill-card">
            <h3>Cloud & Search Infrastructure</h3>
            <p>Azure AI Search, Azure Functions, Azure Blob Storage, Azure AI Foundry, Search Index Design, Metadata Enrichment Pipelines</p>
          </div>
          <div className="skill-card">
            <h3>Data & Statistics</h3>
            <p>Mathematics & Optimization, Statistical Learning, Probability & Statistics, Feature Engineering, Model Explainability (SHAP)</p>
          </div>
          <div className="skill-card">
            <h3>Programming & Tools</h3>
            <p>Python, C++/C, SQL, SciPy, Docker, Version Control (Git), ADO Board</p>
          </div>
          <div className="skill-card">
            <h3>Core Concepts</h3>
            <p>OOP, Algorithm design</p>
          </div>
        </div>
      </section>
    </>
  );
}
