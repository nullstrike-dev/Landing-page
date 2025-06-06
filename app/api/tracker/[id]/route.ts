import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown IP';
  const ua = request.headers.get('user-agent') || 'unknown UA';
  const time = new Date().toISOString();
  const linkId = params.id;

  console.log(`[TRACK] ID: ${linkId} | IP: ${ip} | UA: ${ua} | Time: ${time}`);

  // Redirect to the fake phishing page
  return NextResponse.redirect(new URL(`/links/${linkId}.html`, request.url));
}
