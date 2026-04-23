import Link from "next/link";
import { getAllItemsData } from "../../lib/markdown";

export default function Projects() {
  const allItems = getAllItemsData();
  const items = allItems.filter(item => item.type === 'project');

  return (
    <section className="section">
      <h1>Projects.</h1>
      <p style={{ marginBottom: "var(--spacing-lg)" }}>A collection of my development and engineering projects.</p>

      {items.length === 0 ? (
        <p style={{ color: "#666", fontStyle: "italic" }}>No projects added yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item) => (
            <Link href={`/projects/${item.slug}`} key={item.slug} className="project-card">
              <h2 style={{ marginBottom: "0.5rem" }}>{item.title}</h2>
              <p style={{ marginBottom: 0 }}>{item.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
