import './globals.css';

// export const metadata = {
//   title: "Wenwen's Projects",
//   description: "Wenwen's projects showcasing frontend web dev skills",
// };

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
