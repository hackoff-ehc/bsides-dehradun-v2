import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '@/styles/globals.css';
import '@/styles/classes.css';
import { Footer, Navbar } from '@/components/Common';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BSides Dehradun',
  description: 'Official website of BSides Dehradun',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link href='https://assets.calendly.com/assets/external/widget.css' rel='stylesheet' />
        <script
          src='https://assets.calendly.com/assets/external/widget.js'
          type='text/javascript'
          async
        ></script>
      </head>
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
