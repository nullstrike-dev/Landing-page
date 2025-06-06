// /app/api/scan/route.ts
import { NextResponse } from 'next/server';
import { exec } from 'child_process';

export async function POST(req: Request) {
  try {
    const { host, ports } = await req.json();

    if (!host) {
      return NextResponse.json({ error: 'Missing host' }, { status: 400 });
    }

    // Sanitize input: only allow digits, dots, and colons in host, numbers and commas in ports
    const safeHost = host.replace(/[^a-zA-Z0-9.:-]/g, '');
    const safePorts = ports ? ports.replace(/[^0-9,-]/g, '') : '';

    const portArg = safePorts ? `-p ${safePorts}` : '';
    const cmd = `nmap ${portArg} ${safeHost}`;

    return new Promise((resolve) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          resolve(NextResponse.json({ error: stderr || 'Scan failed' }, { status: 500 }));
        } else {
          resolve(NextResponse.json({ result: stdout }));
        }
      });
    });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
