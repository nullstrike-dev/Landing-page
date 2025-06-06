import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import crypto from 'crypto';

interface BuildRequestBody {
  userWallet: string;
  devWallet: string;
  devPercent: number;
  language: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: BuildRequestBody = await request.json();

    // Basic validation
    if (
      !body.userWallet ||
      !body.devWallet ||
      typeof body.devPercent !== 'number' ||
      !['go', 'rust', 'python', 'cpp'].includes(body.language)
    ) {
      return NextResponse.json(
        { error: 'Invalid input' },
        { status: 400 }
      );
    }

    // Simulate miner generation by creating a dummy file with input embedded
    const buildId = crypto.randomBytes(8).toString('hex');
    const filename = `miner-${buildId}.${getFileExtension(body.language)}`;
    const outputDir = path.join(process.cwd(), 'public', 'miner-builds');

    // Make sure the output directory exists
    await fs.mkdir(outputDir, { recursive: true });

    // Create dummy content (replace this with actual build logic)
    const fileContent = generateDummyMinerScript(body);

    const filePath = path.join(outputDir, filename);
    await fs.writeFile(filePath, fileContent, 'utf-8');

    // Return URL for download
    const downloadUrl = `/miner-builds/${filename}`;

    return NextResponse.json({ url: downloadUrl });
  } catch (error) {
    console.error('Error generating miner:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

function getFileExtension(lang: string) {
  switch (lang) {
    case 'go':
      return 'go';
    case 'rust':
      return 'rs';
    case 'python':
      return 'py';
    case 'cpp':
      return 'cpp';
    default:
      return 'txt';
  }
}

function generateDummyMinerScript(body: BuildRequestBody) {
  return `// Miner Build
// User Wallet: ${body.userWallet}
// Dev Wallet: ${body.devWallet}
// Dev Fee: ${body.devPercent}%
// Language: ${body.language}

// NOTE: This is a dummy generated miner script placeholder.

console.log("Starting miner for wallet: ${body.userWallet}");
console.log("Dev fee wallet: ${body.devWallet} at ${body.devPercent}%");

// Replace with real miner code!
`;
}
