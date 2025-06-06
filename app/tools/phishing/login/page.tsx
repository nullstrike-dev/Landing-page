'use client';

import { useState } from 'react';

export default function FakeLoginPageBuilder() {
  const [siteName, setSiteName] = useState('Example');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#a3f7bf] p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-[#22c55e]">Fake Login Page Generator</h1>

      <div className="max-w-xl mx-auto space-y-4">
        <div>
          <label className="block text-[#bbf7d0]">Site Name</label>
          <input
            type="text"
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            className="w-full p-2 mt-1 rounded bg-[#1e293b] text-white"
            placeholder="e.g. GitHub, Outlook"
          />
        </div>

        <div>
          <label className="block text-[#bbf7d0]">Primary Color</label>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-20 h-10 rounded bg-[#1e293b] p-1 border-2 border-[#334155]"
          />
        </div>

        <div className="bg-[#1e293b] p-6 rounded shadow-lg">
          <h2 className="text-center text-xl font-semibold text-white mb-4">
            {siteName} Login
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded bg-[#0f172a] text-white border border-[#334155]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 rounded bg-[#0f172a] text-white border border-[#334155]"
            />
            <button
              type="submit"
              style={{ backgroundColor: primaryColor }}
              className="w-full p-2 text-white font-bold rounded hover:opacity-90"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
