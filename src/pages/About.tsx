import React from 'react';
const About = () => {
  return <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            ABOUT ROBERT SMITH
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Black & white photography has been my passion for over three decades
          </p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              THE PHOTOGRAPHER
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Robert Smith's journey in photography began in 1985 when he
                received his first camera as a gift from his father. What
                started as a hobby quickly evolved into a lifelong passion and
                eventually a distinguished career spanning over three decades.
              </p>
              <p className="mb-4">
                Specializing exclusively in black and white photography, Robert
                has developed a distinctive style characterized by strong
                contrasts, compelling compositions, and an ability to capture
                the emotional essence of his subjects. His work ranges from
                intimate portraits to vast landscapes, urban scenes to abstract
                details—all united by his unique perspective and technical
                mastery.
              </p>
              <p className="mb-4">
                Robert's photographs have been exhibited in prestigious
                galleries across North America and Europe. His work has been
                featured in numerous publications, including National
                Geographic, Black & White Magazine, and Contemporary Photography
                Quarterly. He has published five books of his photography, with
                his most recent collection, "Shadows and Light: A Thirty Year
                Retrospective," receiving critical acclaim.
              </p>
              <p>
                When not traveling for projects, Robert divides his time between
                his studio in Portland and teaching workshops to aspiring
                photographers. He is known for his generous mentorship and
                commitment to preserving the art of traditional black and white
                photography in the digital age.
              </p>
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1594751543129-6701ad444259?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80" alt="Robert Smith portrait" className="w-full h-auto mb-6" />
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-serif mb-4">EXHIBITIONS & AWARDS</h3>
              <ul className="space-y-3 text-gray-700">
                <li>International Photography Awards - Silver Medal, 2022</li>
                <li>Museum of Modern Art, New York - Featured Artist, 2020</li>
                <li>Black & White Photography Excellence Award, 2019</li>
                <li>National Portrait Gallery, London - Exhibition, 2017</li>
                <li>San Francisco Museum of Art - Solo Exhibition, 2015</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Artist Statement */}
        <div className="bg-gray-50 p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-serif tracking-wide mb-6 text-center">
            ARTIST STATEMENT
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700 italic">
            <p className="mb-4">
              "In a world saturated with color and constant visual stimulation,
              black and white photography offers a powerful distillation of
              reality. By stripping away the distraction of color, I seek to
              reveal the essential qualities of my subjects—the interplay of
              light and shadow, the texture of surfaces, the emotional resonance
              of a moment frozen in time.
            </p>
            <p>
              My work is an ongoing exploration of contrast—not just visual
              contrast, but the contrast between presence and absence,
              permanence and transience, the universal and the intimate. Through
              my lens, I aim to invite viewers to slow down, to see beyond the
              obvious, and to discover beauty in the ordinary."
            </p>
          </div>
        </div>
        {/* Technical Approach */}
        <div>
          <h2 className="text-2xl font-serif tracking-wide mb-6">
            TECHNICAL APPROACH
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Robert's technical approach blends traditional darkroom
                techniques with modern digital processes. While he still shoots
                with film for certain projects, appreciating the distinctive
                grain and tonal qualities it provides, he has also embraced
                high-resolution digital photography for its flexibility and
                control.
              </p>
              <p className="mb-4">
                Regardless of the capture medium, Robert's post-processing work
                is meticulous and deliberate. Each image is carefully developed
                to achieve the perfect balance of contrast, detail, and mood. He
                prints exclusively on archival papers using pigment-based inks
                to ensure his prints will stand the test of time.
              </p>
              <p>
                For Robert, the final print is the ultimate expression of his
                vision. He personally oversees every aspect of the printing
                process, often spending days perfecting a single image until it
                precisely matches his creative intention.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Camera equipment" className="w-full h-auto" />
              <img src="https://images.unsplash.com/photo-1616242352066-6273fdfb33a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Darkroom process" className="w-full h-auto" />
              <img src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Film development" className="w-full h-auto" />
              <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Printing process" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default About;