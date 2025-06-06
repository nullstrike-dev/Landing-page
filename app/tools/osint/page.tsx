import OsintTool from "@/components/OsintTool";

export default function OSINTPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-[#a3f7bf] p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-[#22c55e]">OSINT Toolkit</h1>
      <OsintTool />
    </div>
    <div>
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
    </div>
  );
}
