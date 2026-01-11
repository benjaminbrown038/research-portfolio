import "./globals.css";

export const metadata = {
  title: "Trey | Research Portfolio",
  description: "Research portfolio in robotics, sensing, control, and ML",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
