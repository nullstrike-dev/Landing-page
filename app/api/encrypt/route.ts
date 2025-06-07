import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { tmpdir } from 'os';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    const xorKey = formData.get('xorKey')?.toString() || 'defaultKey';
    const blowfishKey = formData.get('blowfishKey')?.toString() || 'blowfish123';
    const filePumpSize = parseInt(formData.get('pumpSize')?.toString() || '0');

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    // Read file content
    const buffer = Buffer.from(await file.arrayBuffer());

    // XOR encryption
    const xorEncrypted = Buffer.from(
      buffer.map((byte, i) => byte ^ xorKey.charCodeAt(i % xorKey.length))
    );

    // Blowfish encryption (simulate using AES for demo; Blowfish support in Node is limited)
    const cipher = crypto.createCipheriv('aes-256-cbc', crypto.createHash('sha256').update(blowfishKey).digest(), Buffer.alloc(16, 0));
    let blowfishEncrypted = Buffer.concat([cipher.update(xorEncrypted), cipher.final()]);

    // Add junk bytes (simple NOP equivalent for demo)
    const junkCode = Buffer.alloc(64, 0x90); // Simulated NOPs
    blowfishEncrypted = Buffer.concat([junkCode, blowfishEncrypted]);

    // File pumping (increase size with null bytes)
    if (filePumpSize > 0) {
      const padding = Buffer.alloc(filePumpSize);
      blowfishEncrypted = Buffer.concat([blowfishEncrypted, padding]);
    }

    // Write encrypted file to /tmp
    const outPath = path.join(tmpdir(), `${Date.now()}_encrypted.bin`);
    await writeFile(outPath, blowfishEncrypted);

    const fileUrl = `/api/encrypt/download?path=${encodeURIComponent(outPath)}`;

    return NextResponse.json({ success: true, fileUrl });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}