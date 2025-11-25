import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Cursor from "./components/Cursor";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

// START: UPDATED SEO METADATA
export const metadata = {
  // The title is crucial for ranking. We lead with your primary target "Java Developer" 
  // but also include "Software Engineer" for broader appeal.
  title: {
    default: "Om Patil - Java Developer | Software Engineer",
    template: "%s | Om Patil - Portfolio", // Creates titles like "Projects | Om Patil - Portfolio"
  },

  // The description attracts clicks. It starts broad ("Software Engineer") and then specifies
  // your Java expertise, satisfying all recruiters.
  description:
    "Explore the portfolio of Om Patil, a creative Software Engineer with a strong focus on Java, Spring Boot, and building scalable full-stack applications.",

  // Keywords to help search engines categorize your site.
  keywords: ["Java Developer", "Software Engineer", "Full Stack Developer", "Spring Boot", "Microservices", "Backend Developer", "Om Patil", "Portfolio", "Pune"],

  // --- Metadata for Social Media Sharing (Crucial for LinkedIn!) ---
  openGraph: {
    title: "Om Patil - Java Developer | Software Engineer Portfolio",
    description: "Portfolio of Om Patil, a creative Software Engineer specializing in Java and Spring Boot.",
    url: "https://ompatilportfolio.vercel.app/", // Your live site URL
    siteName: "Om Patil | Portfolio",
    type: 'website',
    locale: 'en_US',
    // It's highly recommended to create a social sharing image (1200x630px) and place it in your /public folder
    // images: ['/social-image.png'], 
  },
  
  // --- Other Important Metadata ---
  robots: "index, follow", // Tells search engines to crawl your site
  author: "Om Patil",
};
// END: UPDATED SEO METADATA


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        <ThemeProvider>
          {/* ✅ Background spotlight effect */}
          <Cursor />
          {/* ✅ Main portfolio content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}