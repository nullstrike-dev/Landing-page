"use client";

import { useState } from "react";

export default function PortScanPage() {
  const [host, setHost] = useState("");
  const [ports, setPorts] = useState("1-1024");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleScan = async () => {
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ host, ports }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unknown error");
      }

      setResult(data.output);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#a3f7bf] font-mono p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Port Scanner</h1>
      <div className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Target IP or Host"
          value={host}
          onChange={(e) => setHost(e.target.value)}
          className="w-full p-2 rounded bg-[#1e293b] text-[#a3f7bf]"
        />
        <input
          type="text"
          placeholder="Port Range (e.g. 1-1000)"
          value={ports}
          onChange={(e) => setPorts(e.target.value)}
          className="w-full p-2 rounded bg-[#1e293b] text-[#a3f7bf]"
        />
        <button
          onClick={handleScan}
          disabled={loading}
          className="bg-[#22c55e] hover:bg-[#16a34a] text-black font-bold py-2 px-4 rounded w-full"
        >
          {loading ? "Scanning..." : "Start Scan"}
        </button>
        {error && <p className="text-red-400">Error: {error}</p>}
        {result && (
          <pre className="bg-[#1e293b] p-4 rounded text-sm overflow-x-auto whitespace-pre-wrap">
            {result}
          </pre>
        )}
      </div>
    </div>
  );
}
