import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Cursor from "./components/Cursor"; // ✅ Only Cursor is needed

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio - Om Patil",
  description:
    "Portfolio of Om Patil, a software engineer specializing in Full Stack Development.",
};

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
