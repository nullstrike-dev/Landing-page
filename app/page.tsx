export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-lime-400 font-mono p-6">
      <h1 className="text-6xl font-extrabold mb-6">NullStrike</h1>
      <p className="text-2xl italic mb-8">Strike from the shadows.</p>

      <section className="max-w-xl text-center mb-12">
        <p className="mb-4">
          NullStrike is your upcoming ethical hacking toolkit — a subscription-based platform offering powerful tools for OSINT, payload generation, phishing simulation, and WiFi security testing.
        </p>
        <p>
          Our mission: empower cybersecurity professionals and hobbyists to learn, test, and secure with confidence.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl mb-4">Support Us</h2>
        <p className="mb-2">Bitcoin donations help us keep NullStrike alive and evolving.</p>
        <code className="break-words bg-gray-900 p-3 rounded text-green-400">
          13YWgNM1DF3gw5XHDEUAuyt58DdVrkQvJj
        </code>
      </section>

      <footer className="text-sm opacity-60">
        Join our community on HackForums.net — stay tuned for tool releases!
      </footer>
    </main>
  );
}
