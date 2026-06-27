import Link from "next/link";
import Image from "next/image";
import { getAllItemsData } from "../lib/markdown";

export default function Home() {
  const allItems = getAllItemsData();
  const projects = allItems.filter(item => item.type === 'project');
  const research = allItems.filter(item => item.type === 'research');

  return (
    <>
      <section className="hero section">
        <div className="hero-text">
          <h1>Jayesh<br />Motwani.</h1>
          <p>
            B.Tech Student at VIT Vellore. Aspiring ML/Data Science Engineer & Researcher focused on ML first principles, robust system architecture, and advancing the frontiers of AI.
          </p>
          <div style={{ marginTop: "var(--spacing-md)", display: "flex", gap: "1rem" }}>
            <a href="/Jayesh_Motwani_Resume.pdf" className="btn" download="Jayesh_Motwani_Resume.pdf">Download CV</a>
            <a href="#experience" className="btn btn-outline">View Experience</a>
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
            <p>Python, C++/C, SQL, NoSQL, FastAPI, SciPy, Docker, Version Control (Git), ADO Board</p>
          </div>
          <div className="skill-card">
            <h3>Core Concepts</h3>
            <p>OOP, Data Structures & Algorithms, Async Programming</p>
          </div>
        </div>
      </section>

      <section className="section" id="experience">
        <h2 style={{ fontSize: "2rem", marginBottom: "var(--spacing-lg)" }}>Experience</h2>
        <div style={{ 
          border: "2px solid var(--border-color)", 
          padding: "var(--spacing-lg)", 
          backgroundColor: "var(--bg-color)" 
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", marginBottom: "var(--spacing-md)" }}>
            <h3 style={{ fontSize: "1.5rem", margin: 0 }}>Product Engineering Intern (AI)</h3>
            <span style={{ fontWeight: 600, fontSize: "1.1rem" }}>2 months</span>
          </div>
          <h4 style={{ fontSize: "1.25rem", margin: "0 0 var(--spacing-md) 0", color: "var(--accent-color)" }}>NewVision Software</h4>
          
          <p style={{ maxWidth: "100%", marginBottom: "var(--spacing-md)" }}>
            Worked on the development of enterprise AI agents for Software Development Life Cycle (SDLC) automation using Azure AI Foundry and Azure AI Search. The role involved designing retrieval systems, building production-grade agent workflows, developing supporting cloud services, and collaborating directly with clients to deliver AI-driven solutions.
          </p>

          <div style={{ marginBottom: "var(--spacing-md)" }}>
            <h5 style={{ fontSize: "1.2rem", marginBottom: "var(--spacing-sm)", textTransform: "uppercase" }}>Key Responsibilities</h5>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-md)" }}>
              <li style={{ marginBottom: "0.5rem" }}><strong>AI Agent Development:</strong> Built User Story Generation agents to assist development teams in creating structured requirements. Developed Impact Analysis agents capable of identifying affected modules, APIs, dependencies, and database entities. Leveraged Azure AI Foundry SDK for agent orchestration, evaluation, and deployment.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Search & Retrieval Infrastructure:</strong> Designed and maintained Azure AI Search indexes. Built custom skillsets for document chunking, embedding generation, metadata extraction, and search enrichment. Developed ingestion pipelines for code repositories and technical documentation.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Reliability & Evaluation:</strong> Conducted extensive agent evaluations to improve response quality. Implemented grounding and retrieval optimization strategies to minimize hallucinations in production. Improved metadata quality and retrieval accuracy through custom enrichment workflows.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Cloud Engineering:</strong> Developed Azure Function Apps to overcome document parsing and metadata extraction limitations. Built automated pipelines connecting storage systems, search indexes, enrichment services, and AI agents.</li>
              <li style={{ marginBottom: "0.5rem" }}><strong>Stakeholder Engagement:</strong> Participated in client meetings and requirement gathering sessions. Worked closely with technical and business stakeholders to refine agent behavior and align solutions with organizational needs. Gained practical exposure to enterprise SDLC processes and software delivery workflows.</li>
            </ul>
          </div>

          <div style={{ marginBottom: "var(--spacing-md)" }}>
            <h5 style={{ fontSize: "1.2rem", marginBottom: "var(--spacing-sm)", textTransform: "uppercase" }}>Key Outcomes</h5>
            <ul style={{ paddingLeft: "1.5rem", marginBottom: "var(--spacing-md)" }}>
              <li style={{ marginBottom: "0.5rem" }}>Delivered production-ready AI agents for SDLC automation.</li>
              <li style={{ marginBottom: "0.5rem" }}>Built scalable retrieval infrastructure supporting enterprise knowledge bases.</li>
              <li style={{ marginBottom: "0.5rem" }}>Reduced hallucination rates through evaluation-driven improvements and retrieval optimization.</li>
              <li style={{ marginBottom: "0.5rem" }}>Successfully integrated AI capabilities into existing development workflows and Azure DevOps processes.</li>
            </ul>
          </div>

          <div>
            <h5 style={{ fontSize: "1.2rem", marginBottom: "var(--spacing-sm)", textTransform: "uppercase" }}>Technologies Used</h5>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {["Azure AI Foundry", "Azure AI Search", "Azure Functions", "Python", "Azure DevOps Boards", "Retrieval-Augmented Generation (RAG)", "Prompt Engineering", "Agent Evaluation", "Search Indexing", "Metadata Enrichment", "SDLC Automation"].map(tech => (
                <span key={tech} style={{ 
                  padding: "0.5rem 1rem", 
                  border: "2px solid var(--border-color)", 
                  fontWeight: 600,
                  fontSize: "0.9rem" 
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <h2 style={{ fontSize: "2rem", marginBottom: "var(--spacing-lg)" }}>Projects</h2>
        <p style={{ marginBottom: "var(--spacing-lg)" }}>A collection of my development and engineering projects.</p>

        {projects.length === 0 ? (
          <p style={{ color: "#666", fontStyle: "italic" }}>No projects added yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {projects.map((item) => (
              <Link href={`/projects/${item.slug}`} key={item.slug} className="project-card">
                <h2 style={{ marginBottom: "0.5rem" }}>{item.title}</h2>
                <p style={{ marginBottom: 0 }}>{item.summary}</p>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section className="section" id="research">
        <h2 style={{ fontSize: "2rem", marginBottom: "var(--spacing-lg)" }}>Research</h2>
        <p style={{ marginBottom: "var(--spacing-lg)" }}>An overview of my academic and scientific research.</p>

        {research.length === 0 ? (
          <p style={{ color: "#666", fontStyle: "italic" }}>No research added yet.</p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {research.map((item) => (
              <Link href={`/research/${item.slug}`} key={item.slug} className="project-card">
                <h2 style={{ marginBottom: "0.5rem" }}>{item.title}</h2>
                <p style={{ marginBottom: 0 }}>{item.summary}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
