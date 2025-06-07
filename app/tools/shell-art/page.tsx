'use client';

import React, { useState, useEffect } from 'react';
import figlet from 'figlet';

const colors = [
  { name: 'Green', code: '32' },
  { name: 'Red', code: '31' },
  { name: 'Yellow', code: '33' },
  { name: 'Blue', code: '34' },
  { name: 'Magenta', code: '35' },
  { name: 'Cyan', code: '36' },
  { name: 'White', code: '37' },
];

export default function AsciiShellMaker() {
  const [input, setInput] = useState('NullStrike');
  const [asciiArt, setAsciiArt] = useState('');
  const [color, setColor] = useState(colors[0].code);
  const [font, setFont] = useState('Standard');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    figlet.text(input, { font }, (err, data) => {
      if (err) {
        setAsciiArt('Error generating ASCII art');
      } else {
        setAsciiArt(data || '');
      }
    });
  }, [input, font]);

  const shellScript = `#!/bin/bash
echo -e "\\e[${color}m${asciiArt.replace(/\n/g, '\\n')}\\e[0m"
`;

  function copyToClipboard() {
    navigator.clipboard.writeText(shellScript).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#112233] rounded-lg shadow-lg text-[#a3f7bf] font-mono">
      <h1 className="text-3xl font-bold mb-6 text-[#22c55e]">ASCII Shell Maker</h1>

      <label className="block mb-2">
        Enter Text:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 mt-1 bg-[#0f172a] text-[#a3f7bf] rounded"
          placeholder="Type your text here"
        />
      </label>

      <label className="block mb-4">
        Select Font:
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="w-full p-2 mt-1 bg-[#0f172a] text-[#a3f7bf] rounded"
        >
          <option value="Standard">Standard</option>
          <option value="Ghost">Ghost</option>
          <option value="Slant">Slant</option>
          <option value="Big">Big</option>
          <option value="Block">Block</option>
          {/* Add more figlet fonts if desired */}
        </select>
      </label>

      <label className="block mb-4">
        Select Color:
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full p-2 mt-1 bg-[#0f172a] text-[#a3f7bf] rounded"
        >
          {colors.map(({ name, code }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <h2 className="mb-2 font-semibold">Preview:</h2>
      <pre className="bg-black p-4 rounded whitespace-pre-wrap select-text">{asciiArt}</pre>

      <h2 className="mt-6 mb-2 font-semibold">Generated Shell Script:</h2>
      <pre className="bg-[#111827] p-4 rounded whitespace-pre-wrap select-text">{shellScript}</pre>

      <button
        onClick={copyToClipboard}
        className="mt-4 px-4 py-2 bg-[#22c55e] hover:bg-[#34d399] rounded font-bold transition"
      >
        {copied ? 'Copied!' : 'Copy Shell Script'}
      </button>
    </div>
  );
}