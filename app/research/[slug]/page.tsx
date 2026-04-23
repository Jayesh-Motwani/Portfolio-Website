import { getItemData, getAllItemsData } from "../../../lib/markdown";
import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const items = getAllItemsData();
  return items.filter(item => item.type === 'research').map((item) => ({
    slug: item.slug,
  }));
}

export default async function ResearchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const itemData = await getItemData(slug);

  if (!itemData || itemData.type !== 'research') {
    notFound();
  }

  return (
    <article className="section">
      <Link href="/research" style={{ color: "var(--accent-color)", fontWeight: 500, display: "inline-block", marginBottom: "var(--padding-even)" }}>
        &larr; Back to Research
      </Link>
      <header style={{ marginBottom: "calc(var(--padding-even) * 1.5)" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{itemData.title}</h1>
      </header>
      
      <div 
        className={styles.markdownContent} 
        dangerouslySetInnerHTML={{ __html: itemData.contentHtml }} 
      />
    </article>
  );
}
