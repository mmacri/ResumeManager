import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Resume Variants Manager",
  description: "Manage your resume variants with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="flex h-screen">
          <aside className="w-64 bg-gray-800 p-4">
            <h1 className="text-2xl font-bold">Resume Manager</h1>
            <nav className="mt-8">
              <ul>
                <li><a href="/" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a></li>
                <li><a href="/master" className="block py-2 px-4 rounded hover:bg-gray-700">Master Resume</a></li>
                <li><a href="/variants" className="block py-2 px-4 rounded hover:bg-gray-700">Variants</a></li>
                <li><a href="/templates" className="block py-2 px-4 rounded hover:bg-gray-700">Templates</a></li>
                <li><a href="/cover-letters" className="block py-2 px-4 rounded hover:bg-gray-700">Cover Letters</a></li>
                <li><a href="/jobs" className="block py-2 px-4 rounded hover:bg-gray-700">Jobs</a></li>
              </ul>
            </nav>
          </aside>
          <main className="flex-1 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
