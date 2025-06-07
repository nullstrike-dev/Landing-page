// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'NullStrike',
  description: 'Strike from the shadows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f172a] text-[#a3f7bf] font-mono min-h-screen flex flex-col">
        {/* Navbar */}
        <nav className="flex justify-between items-center px-8 py-4 bg-[#064e3b] shadow-md">
          <h1 className="text-3xl font-bold text-[#22c55e]">NullStrike</h1>
          <ul className="flex space-x-6 text-[#bbf7d0] text-sm">
            <li><a href="/" className="hover:text-[#34d399]">Home</a></li>
            <li><a href="/tools/osint" className="hover:text-[#34d399]">OSINT</a></li>
            <li><a href="/tools/payload" className="hover:text-[#34d399]">Payloads</a></li>
            <li><a href="/tools/phishing" className="hover:text-[#34d399]">Phishing</a></li>
            <li><a href="/tools/scan" className="hover:text-[#34d399]">Scanner</a></li>
            <li><a href="/tools/miner" className="hover:text-[#34d399] transition-colors">Miner Builder</a></li>
            <li><a href="/tools/encrypt" className="hover:text-[#34d399] transition-colors">Encryption</a></li>
            <li><a href="/tools/stub" className="hover:text-[#34d399] transition-colors">Stub Gen</a></li>
            <li><a href="https://hackforums.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#34d399]">Community</a></li>
          </ul>
        </nav>

        {/* Page Content */}
        <main className="flex-grow px-6 py-10 max-w-4xl mx-auto w-full">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#064e3b] text-[#8ee3b8] opacity-80 text-center p-4 text-sm">
          Join our community on{' '}
          <a
            href="https://hackforums.net"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#22c55e]"
          >
            HackForums.net
          </a>{' '}
          — stay tuned for tool releases!
        </footer>
      </body>
    </html>
  );
}
