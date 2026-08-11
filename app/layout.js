import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
  title: "MDBC",
  description: "Corporate Website",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning data-scroll-behavior="smooth">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
