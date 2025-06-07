// app/tools/encrypt/page.tsx

"use client"; import { useState } from "react";

export default function EncryptPage() { const [file, setFile] = useState<File | null>(null); const [options, setOptions] = useState({ xor: true, blowfish: true, junk: true, pumper: true, }); const [output, setOutput] = useState<string | null>(null);

const handleEncrypt = async () => { if (!file) return alert("Please upload a file.");

const formData = new FormData();
formData.append("file", file);
Object.entries(options).forEach(([key, value]) =>
  formData.append(key, String(value))
);

const res = await fetch("/api/encrypt", {
  method: "POST",
  body: formData,
});

const data = await res.json();
setOutput(data.result);

};

return ( <div className="p-8 text-white max-w-2xl mx-auto"> <h1 className="text-3xl font-bold mb-4">Advanced Encryption Simulator</h1> <p className="text-sm text-red-400 mb-4"> ⚠️ For educational and ethical cybersecurity training only. </p>

<input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-4" />

  <div className="mb-4 space-y-2">
    {Object.keys(options).map((key) => (
      <label key={key} className="block">
        <input
          type="checkbox"
          checked={options[key as keyof typeof options]}
          onChange={() =>
            setOptions((prev) => ({
              ...prev,
              [key]: !prev[key as keyof typeof options],
            }))
          }
        />
        {" "}
        {key.charAt(0).toUpperCase() + key.slice(1)} Mode
      </label>
    ))}
  </div>

  <button
    onClick={handleEncrypt}
    className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 transition"
  >
    Simulate Encryption
  </button>

  {output && (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Output (Base64 Encoded)</h3>
      <textarea
        readOnly
        className="w-full h-64 p-3 bg-gray-800 text-green-400 font-mono"
        value={output}
      />
    </div>
  )}
</div>

); }

