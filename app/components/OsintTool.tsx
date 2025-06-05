"use client";
import { useState } from "react";

export default function OsintTool() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<string | null>(null);

  const handleUsernameSearch = () => {
    // Placeholder
    setResult(`Searched for "${input}" on GitHub, Pastebin, and Twitter (mock result).`);
  };

  const handleEmailCheck = () => {
    // Placeholder
    setResult(`Checked breaches for "${input}" (mock result from haveibeenpwned).`);
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a username or email"
        className="w-full p-3 bg-[#1e293b] text-[#bbf7d0] rounded"
      />

      <div className="flex space-x-4">
        <button
          onClick={handleUsernameSearch}
          className="bg-[#22c55e] hover:bg-[#16a34a] text-black px-4 py-2 rounded"
        >
          Search Username
        </button>
        <button
          onClick={handleEmailCheck}
          className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded"
        >
          Check Email Breach
        </button>
      </div>

      {result && (
        <div className="bg-[#1e293b] p-4 rounded text-[#bbf7d0] border border-[#475569] mt-4">
          {result}
        </div>
      )}
    </div>
  );
}
