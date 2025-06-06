// app/api/scan/route.ts

import { NextRequest } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const body = await req.json();
    const { host, ports } = body;

    if (!host || typeof host !== 'string') {
      return new Response(JSON.stringify({ error: 'Invalid host' }), { status: 400 });
    }

    // Use a basic port range or default
    const portRange = ports || '1-1024';
    const command = `nmap -p ${portRange} ${host}`;

    const { stdout } = await execAsync(command);

    return new Response(JSON.stringify({ result: stdout }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
