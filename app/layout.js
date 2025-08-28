import "./globals.css";
import { Commissioner } from 'next/font/google';

const commissioner = Commissioner({
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata = {
  title: "QEF",
  description: "QEF Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${commissioner.className} text-lg/8 md:text-xl/8`}
      >
        {children}
      </body>
    </html>
  );
}
