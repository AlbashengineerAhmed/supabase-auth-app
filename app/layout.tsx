import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata = {
  title: "Supabase Next Auth",
  description:
    "A secure and modern authentication system using Supabase and Next.js for seamless user management.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background  text-foreground">
        <main className="min-h-screen overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
