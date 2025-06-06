import QRCode from 'react-qr-code';
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0f172a] text-[#a3f7bf] font-mono">
  

<nav className="flex justify-between items-center px-8 py-4 bg-[#064e3b] shadow-md">
  <h1 className="text-3xl font-bold text-[#22c55e]">NullStrike</h1>
<ul className="flex space-x-6 text-[#bbf7d0] text-sm">
  <li><a href="#about" className="hover:text-[#34d399]">About</a></li>
  <li><a href="#support" className="hover:text-[#34d399]">Support</a></li>
  <li><a href="/tools/osint" className="hover:text-[#34d399]">OSINT</a></li>
  <li><a href="/tools/payload" className="hover:text-[#34d399]">Payloads</a></li>
  <li><a href="/tools/phishing" className="hover:text-[#34d399]">Phishing</a></li>
  <li><a href="https://hackforums.net" target="_blank" rel="noopener noreferrer" className="hover:text-[#34d399]">Community</a></li>
</ul>
</nav>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-6xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
          Strike from the shadows.
        </h2>

        <section id="about" className="space-y-6 mb-16 text-[#c6f6d5] leading-relaxed">
          <p>
            NullStrike is your upcoming <span className="font-semibold text-[#34d399]">ethical hacking toolkit</span> — a subscription-based platform offering powerful tools for{' '}
            <span className="font-semibold text-[#34d399]">OSINT</span>, <span className="font-semibold text-[#34d399]">payload generation</span>,{' '}
            <span className="font-semibold text-[#34d399]">phishing simulation</span>, and <span className="font-semibold text-[#34d399]">WiFi security testing</span>.
          </p>
          <p>
            Our mission: empower cybersecurity professionals and hobbyists to <em>learn, test, and secure with confidence.</em>
          </p>
        </section>

        <section id="support" className="bg-[#064e3b] rounded-lg p-6 shadow-lg max-w-md w-full mb-16">
          <h3 className="text-3xl font-bold mb-3 text-[#22c55e] drop-shadow-sm">Support NullStrike</h3>
          <p className="mb-3 text-[#bbf7d0]">Bitcoin donations help us keep NullStrike alive and evolving.</p>
          <div className="flex flex-col items-center space-y-4">
            <QRCode value="13YWgNM1DF3gw5XHDEUAuyt58DdVrkQvJj" size={128} bgColor="transparent" fgColor="#86efac" />
            <code className="block bg-[#064e3b] p-3 rounded font-mono text-[#86efac] break-all select-all">
              13YWgNM1DF3gw5XHDEUAuyt58DdVrkQvJj
            </code>
          </div>
        </section>
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
    </div>
  );
}
