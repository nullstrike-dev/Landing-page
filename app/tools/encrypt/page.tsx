'use client';

import { useState } from 'react';

export default function EncryptionTool() {
  const [file, setFile] = useState<File | null>(null);
  const [xorKey, setXorKey] = useState('');
  const [blowfishKey, setBlowfishKey] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleEncrypt = async () => {
    if (!file || !xorKey || !blowfishKey) return alert("All fields required");

    const formData = new FormData();
    formData.append('file', file);
    formData.append('xorKey', xorKey);
    formData.append('blowfishKey', blowfishKey);

    const res = await fetch('/api/encrypt', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) return alert("Encryption failed");

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#064e3b] rounded text-[#d1fae5] space-y-4">
      <h2 className="text-2xl font-bold text-[#34d399]">Encrypt Binary</h2>
      
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      
      <input
        type="text"
        placeholder="XOR Key"
        value={xorKey}
        onChange={(e) => setXorKey(e.target.value)}
        className="w-full p-2 rounded bg-[#022c22] text-white"
      />

      <input
        type="text"
        placeholder="Blowfish Key"
        value={blowfishKey}
        onChange={(e) => setBlowfishKey(e.target.value)}
        className="w-full p-2 rounded bg-[#022c22] text-white"
      />

      <button
        onClick={handleEncrypt}
        className="bg-[#10b981] px-4 py-2 rounded hover:bg-[#059669]"
      >
        Encrypt
      </button>

      {downloadUrl && (
        <a
          href={downloadUrl}
          download="encrypted.bin"
          className="block mt-4 underline text-[#6ee7b7]"
        >
          Download Encrypted File
        </a>
      )}
    </div>
  );
}