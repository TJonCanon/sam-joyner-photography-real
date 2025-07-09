import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
const Home = () => {
  return <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black">
          <img src="https://images.unsplash.com/photo-1486916856992-e4db22c8df33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="Black and white landscape photography" className="w-full h-full object-cover opacity-80" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-serif tracking-wider mb-4">
            ROBERT SMITH
          </h1>
          <p className="text-lg md:text-xl max-w-2xl font-light tracking-wide">
            Capturing the essence of life through the lens of black and white
            photography
          </p>
          <Link to="/works" className="mt-8 px-6 py-3 border border-white hover:bg-white hover:text-black transition-colors duration-300 flex items-center space-x-2">
            <span>VIEW PORTFOLIO</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
      {/* Featured Works */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif tracking-wide mb-12 text-center">
          FEATURED WORKS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(item => <div key={item} className="group relative overflow-hidden">
              <img src={`https://images.unsplash.com/photo-151${item + 8000000}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80`} alt={`Featured work ${item}`} className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link to="/works" className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                    View Project
                  </Link>
                </div>
              </div>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <Link to="/works" className="inline-flex items-center space-x-2 text-gray-800 hover:text-black">
            <span>VIEW ALL WORKS</span>
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
      {/* About Preview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-serif tracking-wide mb-6">
                ABOUT ROBERT
              </h2>
              <p className="text-gray-700 mb-4">
                Robert Smith has been capturing the world through his lens for
                over 30 years. Specializing in black and white photography, his
                work explores the interplay of light and shadow, revealing the
                hidden beauty in ordinary moments.
              </p>
              <p className="text-gray-700 mb-6">
                His photographs have been exhibited in galleries across the
                country and published in numerous books and magazines.
              </p>
              <Link to="/about" className="inline-flex items-center space-x-2 text-gray-800 hover:text-black">
                <span>READ MORE</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Robert Smith portrait" className="w-full h-auto shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Contact Preview */}
      <section className="py-16 md:py-24 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-serif tracking-wide mb-6">
          GET IN TOUCH
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Interested in purchasing prints, booking a session, or have questions
          about my work? I'd love to hear from you.
        </p>
        <Link to="/contact" className="px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300">
          CONTACT ME
        </Link>
      </section>
    </div>;
};
export default Home;