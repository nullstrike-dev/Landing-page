// app/layout.tsx

import './globals.css';

export const metadata = {
  title: 'NullStrike',
  description: 'Strike from the shadows.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
