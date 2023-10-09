import './globals.css';
import { openSans } from './fonts';

export const metadata = {
  title: 'Wenwen Wang',
  description: "Wenwen's Portfolio website showcasing projects and skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
