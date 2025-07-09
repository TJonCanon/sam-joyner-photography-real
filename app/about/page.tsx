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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 md:items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              THE ARTIST
            </h2>
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Over the past 20 years, Sam Joyner has studied with master photographers Bruce Barnbaum, John Sexton, Ruth Bernhard, Sally Mann, Jerry Eulsman, Howard Bond, Paul Capinagro, George Tice, Mark Klett, Linda Connors, Marilyn Bridges, Don Kirby and others at 14 photography venues including the Ansel Adams photography Workshop, Yosimite, California; the Maine Photographic Workshop, Rockport, Maine; and the Oklahoma Arts Institute at Quartz Mountain. His work has been juried into numerous exhibits, receiving various awards including Best of Show at the 1995 Lawton Arts for All Festival and juror's awards in the 1998 and 1999 Tulsa Mayfest. His work has been seen in three one man shows at the McMahon Gallery and Leslie Powell Gallery in Lawton and in numerous group shows statewide including M.A. Doran Gallery and Gilcrease Museum in Tulsa. The artist has been published in Nimrod Literary Journal. He is a former director and current member of the Visual Arts Coalition and the Tulsa Photo Collective and Wichita Wildlight Society. Sam Joyner also serves as a United States Magistrate Judge in Tulsa, Oklahoma. He is represented by the M.A. Doran Gallery of Tulsa.
              </p>
              <p className="mb-4">
                In spite of all things dark and discouraging, the photographer's special challenge is to go beyond the clichés and stereotypes of our over-imaged, media-manipulated world and find the evidence of yes—to reveal scenes of awe, wonder, and curiosity with honesty- to find the quiet beauty of coherence, rhythm and order. When the camera and the one who winks its eye do their work well, the photograph may go beyond the literal and touch the timeless and universal. Metaphor is often a part of the process. Light, line, and form speak of things beyond the subject being photographed.
              </p>
              <p className="italic">--Sam Joyner</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src="/photos/AboutMe/about-portrait.webp" alt="Sam Joyner portrait" className="w-full h-auto mb-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 