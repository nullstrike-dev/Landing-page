'use client';

import { useState } from 'react';

export default function ShellArt() {
  const [input, setInput] = useState('');
  const [ascii, setAscii] = useState('');

  async function generate() {
    const res = await fetch(`/api/figlet?text=${encodeURIComponent(input)}`);
    const data = await res.json();
    if (data.ascii) setAscii(data.ascii);
    else setAscii('Error generating ASCII art.');
  }

  return (
    <div className="bg-[#0f172a] min-h-screen flex flex-col items-center justify-center p-6 text-[#a3f7bf] font-mono">
      <h1 className="text-3xl mb-6 text-[#22c55e] font-bold">Shell Art Generator</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here"
          className="px-3 py-2 rounded text-black w-64"
        />
        <button
          onClick={generate}
          className="ml-3 px-4 py-2 bg-[#22c55e] hover:bg-[#16a34a] rounded text-black font-semibold"
        >
          Generate
        </button>
      </div>
      <pre className="mt-8 whitespace-pre-wrap text-green-400 bg-black p-6 rounded w-full max-w-2xl">{ascii}</pre>
    </div>
  );
}