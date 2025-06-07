// /app/tools/stub/page.tsx

'use client';

import { useState } from 'react'; import Button from '@/components/ui/Button'; import Input from '@/components/ui/Input'; import Textarea from '@/components/ui/Textarea';

export default function StubGenerator() { const [host, setHost] = useState(''); const [port, setPort] = useState(''); const [output, setOutput] = useState('');

const generateStub = async () => { const res = await fetch('/api/stub', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ host, port }) });

const data = await res.json();
if (data.stub) setOutput(data.stub);

};

return ( <main className="p-8 max-w-xl mx-auto"> <h1 className="text-2xl font-bold mb-4">Stub Generator (Educational)</h1>

<Input
    placeholder="C2 Host/IP"
    className="mb-3"
    value={host}
    onChange={(e) => setHost(e.target.value)}
  />
  <Input
    placeholder="Port"
    className="mb-3"
    value={port}
    onChange={(e) => setPort(e.target.value)}
  />

  <Button onClick={generateStub}>Generate Stub</Button>

  {output && (
    <Textarea
      className="mt-6 h-60 text-sm"
      value={output}
      readOnly
    />
  )}
</main>

); }

