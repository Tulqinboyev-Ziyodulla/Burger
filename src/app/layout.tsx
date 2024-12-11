import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Бургеры",
  description: "Бургеры Магазин",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" />
      <body>
        <main className="pt-[80px]">{children}</main>
      </body>
    </html>
  );
}
