import './globals.css';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import StagewiseClientToolbar from '../src/components/StagewiseClientToolbar';

export const metadata = {
  title: 'Robert Smith Photography',
  description: 'Black and white photography portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <StagewiseClientToolbar />
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
} 