'use client';

import { useState } from 'react';

export default function EmailBuilder() {
  const [subject, setSubject] = useState('');
  const [sender, setSender] = useState('');
  const [body, setBody] = useState('');
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f172a] text-[#a3f7bf] p-6 font-mono">
      <h1 className="text-3xl font-bold mb-6 text-[#22c55e]">Phishing Email Template Generator</h1>

      <div className="space-y-4 max-w-2xl mx-auto">
        {!previewMode ? (
          <>
            <div>
              <label className="block text-[#bbf7d0]">Subject</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full mt-1 p-2 rounded bg-[#1e293b] text-white"
                placeholder="e.g. Important Security Alert"
              />
            </div>

            <div>
              <label className="block text-[#bbf7d0]">From</label>
              <input
                type="text"
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                className="w-full mt-1 p-2 rounded bg-[#1e293b] text-white"
                placeholder="e.g. security@company.com"
              />
            </div>

            <div>
              <label className="block text-[#bbf7d0]">Body</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={6}
                className="w-full mt-1 p-2 rounded bg-[#1e293b] text-white"
                placeholder="Write your phishing message here..."
              />
            </div>

            <button
              onClick={() => setPreviewMode(true)}
              className="mt-4 px-6 py-2 bg-[#22c55e] text-black rounded hover:bg-[#16a34a]"
            >
              Preview Email
            </button>
          </>
        ) : (
          <div className="bg-[#1e293b] p-6 rounded shadow-lg text-left">
            <p className="text-sm text-[#94a3b8] mb-2">From: {sender || 'unknown@sender.com'}</p>
            <p className="text-lg font-semibold text-[#22c55e] mb-2">{subject || '(No Subject)'}</p>
            <div className="text-[#f1f5f9] whitespace-pre-line">{body || '(No content)'}</div>

            <button
              onClick={() => setPreviewMode(false)}
              className="mt-6 px-4 py-2 bg-[#22c55e] text-black rounded hover:bg-[#16a34a]"
            >
              Back to Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
