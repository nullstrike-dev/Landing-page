// app/api/stub/route.ts
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import archiver from 'archiver';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const body = await req.json();
  const { language = 'c', filename = 'stub', obfuscate = false } = body;

  const id = uuidv4();
  const tempDir = `/tmp/stub-${id}`;
  const filePath = path.join(tempDir, `${filename}.${language === 'python' ? 'py' : 'c'}`);

  await fs.mkdir(tempDir, { recursive: true });

  let stubCode = '';

  if (language === 'python') {
    stubCode = `print("Stub executed.")`;
    if (obfuscate) {
      stubCode = `exec("${Buffer.from(stubCode).toString('base64')}")  # Base64 encoded`;
    }
  } else {
    stubCode = `#include <stdio.h>\nint main() {\n  printf("Stub executed.\\n");\n  return 0;\n}`;
    if (obfuscate) {
      stubCode = `// Obfuscated C version\n${stubCode}`;
    }
  }

  await fs.writeFile(filePath, stubCode, 'utf-8');

  const zipPath = path.join(tempDir, `${filename}.zip`);
  const archive = archiver('zip', { zlib: { level: 9 } });
  const output = await fs.open(zipPath, 'w');

  const writableStream = output.createWriteStream();

  archive.pipe(writableStream);
  archive.file(filePath, { name: path.basename(filePath) });
  await archive.finalize();

  const zipBuffer = await fs.readFile(zipPath);
  await fs.rm(tempDir, { recursive: true, force: true });

  return new NextResponse(zipBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/zip',
      'Content-Disposition': `attachment; filename="${filename}.zip"`,
    },
  });
}