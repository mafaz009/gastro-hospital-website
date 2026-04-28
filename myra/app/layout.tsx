import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Best Gastro Hospital in Lucknow | Myra City Hospital",
  description:
    "Myra City Hospital offers advanced gastro medicine, gastro surgery, and critical care in Lucknow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">

        {/* HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        {children}

      </body>
    </html>
  );
}