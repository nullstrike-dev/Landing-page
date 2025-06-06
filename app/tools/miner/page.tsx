'use client';

import { useState } from 'react';

export default function MinerBuilder() {
  const [userWallet, setUserWallet] = useState('');
  const [devWallet, setDevWallet] = useState('YOUR_DEFAULT_DEV_WALLET_ADDRESS');
  const [devPercent, setDevPercent] = useState(5);
  const [language, setLanguage] = useState('go');
  const [loading, setLoading] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState('');

  async function handleBuild() {
    setLoading(true);
    setDownloadUrl('');

    // Call your backend API to trigger the build
    const response = await fetch('/api/miner/build', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userWallet, devWallet, devPercent, language }),
    });

    if (response.ok) {
      const data = await response.json();
      setDownloadUrl(data.url); // URL to download the generated miner build
    } else {
      alert('Failed to build miner. Please try again.');
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-[#064e3b] rounded-lg shadow-lg text-[#a3f7bf] font-mono">
      <h1 className="text-4xl font-bold mb-6 text-[#22c55e]">Miner Builder</h1>

      <label className="block mb-4">
        <span>User Wallet Address</span>
        <input
          type="text"
          className="w-full p-2 rounded mt-1 text-black"
          value={userWallet}
          onChange={(e) => setUserWallet(e.target.value)}
          placeholder="Your wallet address"
        />
      </label>

      <label className="block mb-4">
        <span>Dev Wallet Address</span>
        <input
          type="text"
          className="w-full p-2 rounded mt-1 text-black"
          value={devWallet}
          onChange={(e) => setDevWallet(e.target.value)}
          placeholder="Dev wallet address"
        />
      </label>

      <label className="block mb-4">
        <span>Dev Fee Percentage (%)</span>
        <input
          type="number"
          min={0}
          max={20}
          className="w-full p-2 rounded mt-1 text-black"
          value={devPercent}
          onChange={(e) => setDevPercent(Number(e.target.value))}
        />
      </label>

      <label className="block mb-6">
        <span>Select Language</span>
        <select
          className="w-full p-2 rounded mt-1 text-black"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="go">Go</option>
          <option value="rust">Rust</option>
          <option value="python">Python</option>
          <option value="cpp">C++</option>
        </select>
      </label>

      <button
        onClick={handleBuild}
        disabled={loading || !userWallet}
        className="w-full bg-[#22c55e] text-black font-bold py-3 rounded hover:bg-[#16a34a] disabled:opacity-50"
      >
        {loading ? 'Building...' : 'Build Miner'}
      </button>

      {downloadUrl && (
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-6 text-[#bbf7d0] underline"
        >
          Download Your Miner Build
        </a>
      )}
    </div>
  );
}
