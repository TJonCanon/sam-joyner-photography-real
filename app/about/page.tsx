import React from 'react';

const About = () => {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            ABOUT SAM JOYNER
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Light everywhere, and it constantly changes. And I too love the light, perhaps the light only.<br />
            <span className="italic">--Czeslaw Milosz</span>
          </p>
        </div>
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              THE ARTIST
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Over the past 20 years, Sam Joyner has studied with master photographers Bruce Barnbaum, John Sexton, Ruth Bernhard, Sally Mann, Jerry Eulsman, Howard Bond, Paul Capinagro, George Tice, Mark Klett, Linda Connors, Marilyn Bridges, Don Kirby and others at 14 photography venues including the Ansel Adams photography Workshop, Yosemite, California; the Maine Photographic Workshop, Rockport, Maine; and the Oklahoma Arts Institute at Quartz Mountain.
              </p>
              <p className="mb-4">
                His work has been juried into numerous exhibits, receiving various awards including Best of Show at the 1995 Lawton Arts for All Festival and juror's awards in the 1998 and 1999 Tulsa Mayfest. His work has been seen in three one man shows at the McMahon Gallery and Leslie Powell Gallery in Lawton and in numerous group shows statewide including M.A. Doran Gallery and Gilcrease Museum in Tulsa.
              </p>
              <p className="mb-4">
                The artist has been published in Nimrod Literary Journal. He is a former director and current member of the Visual Arts Coalition and the Tulsa Photo Collective and Wichita Wildlight Society. Sam Joyner also serves as a United States Magistrate Judge in Tulsa, Oklahoma. He is represented by the M.A. Doran Gallery of Tulsa.
              </p>
            </div>
          </div>
          <div>
            <img src="/photos/AboutMe/about-portrait.webp" alt="Sam Joyner portrait" className="w-full h-auto mb-6" />
            <div className="bg-gray-50 p-6">
              <h3 className="text-xl font-serif mb-4">EXHIBITIONS & AWARDS</h3>
              <ul className="space-y-3 text-gray-700">
                <li>Best of Show - Lawton Arts for All Festival, 1995</li>
                <li>Juror's Award - Tulsa Mayfest, 1998</li>
                <li>Juror's Award - Tulsa Mayfest, 1999</li>
                <li>McMahon Gallery - Solo Exhibition, Lawton</li>
                <li>Leslie Powell Gallery - Solo Exhibition, Lawton</li>
                <li>M.A. Doran Gallery - Group Exhibition, Tulsa</li>
                <li>Gilcrease Museum - Group Exhibition, Tulsa</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Artist Statement */}
        <div className="bg-gray-50 p-8 md:p-12">
          <h2 className="text-2xl font-serif tracking-wide mb-6 text-center">
            ARTIST STATEMENT
          </h2>
          <div className="max-w-3xl mx-auto text-gray-700">
            <p className="mb-4">
              In spite of all things dark and discouraging, the photographer's special challenge is to go beyond the clichés and stereotypes of our over-imaged, media-manipulated world and find the evidence of yes—to reveal scenes of awe, wonder, and curiosity with honesty- to find the quiet beauty of coherence, rhythm and order. When the camera and the one who winks its eye do their work well, the photograph may go beyond the literal and touch the timeless and universal. Metaphor is often a part of the process. Light, line, and form speak of things beyond the subject being photographed.
            </p>
            <p className="italic text-right">--Sam Joyner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 