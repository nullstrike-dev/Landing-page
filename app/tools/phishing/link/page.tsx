'use client';

import { useState } from 'react';

export default function PhishingLinkTool() {
  const [linkId, setLinkId] = useState('');
  const [logs, setLogs] = useState<string[]>([]);

  const generateLink = () => {
    const id = Math.random().toString(36).substring(2, 8);
    setLinkId(id);
    setLogs([]);
  };

  const fakeBase = 'https://nullstrike.io/link/';

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#a3f7bf] p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-[#22c55e]">Phishing Link Shortener</h1>

      <div className="space-y-4 max-w-xl mx-auto">
        <button
          onClick={generateLink}
          className="bg-[#22c55e] hover:bg-[#16a34a] text-[#0f172a] font-bold py-2 px-4 rounded"
        >
          Generate Link
        </button>

        {linkId && (
          <div>
            <p className="mb-2 text-[#bbf7d0]">Your phishing link:</p>
            <code className="block bg-[#1e293b] p-3 rounded text-[#86efac]">
              {fakeBase + linkId}
            </code>
          </div>
        )}

        {linkId && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2 text-[#34d399]">Click Logs</h2>
            <p className="text-sm text-[#94a3b8]">(Simulation only — would track visits here)</p>
            <ul className="mt-2 space-y-1 text-sm">
              {logs.length === 0 ? (
                <li className="text-[#64748b] italic">No clicks tracked yet.</li>
              ) : (
                logs.map((log, i) => (
                  <li key={i} className="text-[#bbf7d0]">
                    {log}
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
