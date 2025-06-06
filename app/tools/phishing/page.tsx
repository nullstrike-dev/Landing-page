// /app/tools/phishing/page.tsx
import Link from 'next/link';

export default function PhishingTool() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#a3f7bf] p-8 font-mono">
      <h1 className="text-4xl font-bold mb-6 text-[#22c55e]">Phishing Simulation Toolkit</h1>

      <div className="space-y-6">
        <div className="bg-[#064e3b] p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-[#34d399]">1. Email Template Generator</h2>
          <p className="text-[#bbf7d0]">Generate realistic phishing emails for educational simulations.</p>
          <Link href="/tools/phishing/email">
            <button className="mt-2 px-4 py-2 bg-[#22c55e] text-black rounded hover:bg-[#16a34a]">
              Launch Email Builder
            </button>
          </Link>
        </div>

        <div className="bg-[#064e3b] p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-[#34d399]">2. Fake Login Page Generator</h2>
          <p className="text-[#bbf7d0]">Create and preview static login pages for awareness training.</p>
          <Link href="/tools/phishing/login">
            <button className="mt-2 px-4 py-2 bg-[#22c55e] text-black rounded hover:bg-[#16a34a]">
              Launch Page Builder
            </button>
          </Link>
        </div>

        <div className="bg-[#064e3b] p-4 rounded shadow-md">
          <h2 className="text-2xl font-semibold text-[#34d399]">3. Tracking Links</h2>
          <p className="text-[#bbf7d0]">Generate trackable redirect links for red team simulation.</p>
          <Link href="/tools/phishing/tracker">
            <button className="mt-2 px-4 py-2 bg-[#22c55e] text-black rounded hover:bg-[#16a34a]">
              Launch Tracker
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

