import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "./ui/NavigationBar/NavigationBar";

export const metadata: Metadata = {
  title: "aplikacja dla weterynarzy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer>
            <NavigationBar/>
        </footer>
      </body>
    </html>
  );
}
