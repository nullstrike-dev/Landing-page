import { NextRequest, NextResponse } from 'next/server';
import figlet from 'figlet';

export async function GET(request: NextRequest) {
  const text = request.nextUrl.searchParams.get('text') || 'Hello';

  // Use figlet in a Promise-wrapped way (since it’s callback-based)
  const asciiArt = await new Promise<string>((resolve, reject) => {
    figlet(text, (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });

  // Return plain text response with asciiArt
  return new NextResponse(asciiArt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}