import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jayesh Motwani - Portfolio",
  description: "Comprehensive Personal Portfolio of Jayesh Motwani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <div className="container">
          <header className="header">
            <div className="logo">JM.</div>
            <nav>
              <ul className="nav-links">
                <li><Link href="/" className="nav-link">Home</Link></li>
                <li><Link href="/projects" className="nav-link">Projects</Link></li>
                <li><Link href="/research" className="nav-link">Research</Link></li>
              </ul>
            </nav>
          </header>
          
          <main>{children}</main>

          <footer className="footer">
            <h2>Get In Touch</h2>
            <div className="footer-links">
              <a href="tel:+918817885445" className="footer-link">Phone: 8817885445</a>
              <a href="mailto:motwanij53@gmail.com" className="footer-link">Email</a>
              <a href="https://www.linkedin.com/in/jayesh-motwani-365940333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href="https://github.com/Jayesh-Motwani" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
