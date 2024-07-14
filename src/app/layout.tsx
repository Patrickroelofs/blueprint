import type { Metadata } from 'next';

import '@xyflow/react/dist/base.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Blueprint',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
