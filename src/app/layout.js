import Link from 'next/link';
import './globals.css';
import MyThemeProvider from './MyThemeProvider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/ads">ads</Link>
          </nav>
          <MyThemeProvider>{children}</MyThemeProvider>
        </main>
      </body>
    </html>
  );
}
