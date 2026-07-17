'use client';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-serif tracking-wider text-black">
              SAM JOYNER
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              © {currentYear} All Rights Reserved. The Estate of Sam A Joyner III. All rights reserved. This website is the official online archive authorized and maintained by the Trustee of the Sam A Joyner III Estate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
