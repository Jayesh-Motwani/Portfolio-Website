import Link from "next/link";
import { getAllItemsData } from "../../lib/markdown";

export default function Research() {
  const allItems = getAllItemsData();
  const items = allItems.filter(item => item.type === 'research');

  return (
    <section className="section">
      <h1>Research.</h1>
      <p style={{ marginBottom: "var(--spacing-lg)" }}>An overview of my academic and scientific research.</p>

      {items.length === 0 ? (
        <p style={{ color: "#666", fontStyle: "italic" }}>No research added yet.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item) => (
            <Link href={`/research/${item.slug}`} key={item.slug} className="project-card">
              <h2 style={{ marginBottom: "0.5rem" }}>{item.title}</h2>
              <p style={{ marginBottom: 0 }}>{item.summary}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
