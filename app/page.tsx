export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#0f172a] text-[#a3f7bf] font-mono px-6 py-12">
      <h1 className="text-7xl font-extrabold mb-4 tracking-wide drop-shadow-lg">
        NullStrike
      </h1>
      <p className="text-xl italic mb-12 text-[#6ee7b7] drop-shadow-md">
        Strike from the shadows.
      </p>

      <section className="max-w-3xl text-center mb-16 space-y-4 leading-relaxed text-[#c6f6d5]">
        <p>
          NullStrike is your upcoming <span className="font-semibold text-[#34d399]">ethical hacking toolkit</span> — a subscription-based platform offering powerful tools for{' '}
          <span className="font-semibold text-[#34d399]">OSINT</span>, <span className="font-semibold text-[#34d399]">payload generation</span>,{' '}
          <span className="font-semibold text-[#34d399]">phishing simulation</span>, and <span className="font-semibold text-[#34d399]">WiFi security testing</span>.
        </p>
        <p>
          Our mission: empower cybersecurity professionals and hobbyists to <span className="italic">learn, test, and secure with confidence.</span>
        </p>
      </section>

      <section className="bg-[#064e3b] rounded-lg p-6 shadow-lg max-w-md w-full mb-16">
        <h2 className="text-3xl font-bold mb-3 text-[#22c55e] drop-shadow-sm">Support NullStrike</h2>
        <p className="mb-3 text-[#bbf7d0]">Bitcoin donations help us keep NullStrike alive and evolving.</p>
        <code className="block bg-[#064e3b] p-3 rounded font-mono text-[#86efac] break-all select-all">
          13YWgNM1DF3gw5XHDEUAuyt58DdVrkQvJj
        </code>
      </section>

      <footer className="text-sm text-[#8ee3b8] opacity-80">
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
    </main>
  );
}
