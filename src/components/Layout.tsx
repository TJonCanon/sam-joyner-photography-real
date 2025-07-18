import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({
  children
}: LayoutProps) => {
  return <div className="flex flex-col min-h-screen bg-white">
      <Navigation />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>;
};
export default Layout;