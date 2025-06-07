import { NextRequest } from 'next/server';
import { Readable } from 'stream';
import crypto from 'crypto';

export const POST = async (req: NextRequest) => {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const xorKey = formData.get('xorKey')?.toString() || '';
  const blowfishKey = formData.get('blowfishKey')?.toString() || '';

  if (!file || !xorKey || !blowfishKey) {
    return new Response('Missing inputs', { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  // XOR encryption
  const xorEncrypted = Buffer.from(buffer.map((b, i) => b ^ xorKey.charCodeAt(i % xorKey.length)));

  // Blowfish encryption (ECB)
  const cipher = crypto.createCipheriv('bf-ecb', Buffer.from(blowfishKey), null);
  const encrypted = Buffer.concat([cipher.update(xorEncrypted), cipher.final()]);

  return new Response(encrypted, {
    status: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': 'attachment; filename="encrypted.bin"',
    },
  });
};