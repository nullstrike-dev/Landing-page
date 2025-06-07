import { NextResponse } from 'next/server';
import figlet from 'figlet';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const text = searchParams.get('text') || 'Hello';

  return new Promise((resolve) => {
    figlet.text(text, (err, data) => {
      if (err) {
        resolve(NextResponse.json({ error: 'Figlet error' }, { status: 500 }));
        return;
      }
      resolve(NextResponse.json({ ascii: data }, { status: 200 }));
    });
  });
}