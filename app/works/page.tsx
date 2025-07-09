'use client';
import React, { useState } from 'react';
import ImageGallery from '../../src/components/ImageGallery';
import { XIcon } from 'lucide-react';

interface Photo {
  id: number;
  title: string;
  project: string;
  year: number;
  imageUrl: string;
  description?: string;
  fullImageUrl?: string;
}

const Works = () => {
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const projects = [
    { id: 'all', name: 'All Works' },
    { id: 'getty-museum', name: 'Getty Museum' },
    { id: 'stairs', name: 'Stairs' },
    { id: 'thailand', name: 'Thailand' },
  ];
  const categoryMap = {
    'Getty Museum': [
      { base: 'getty-museum-1', display: 'Getty museum 1' },
      { base: 'getty-museum-2', display: 'Getty museum 2' },
      { base: 'getty-museum-3', display: 'Getty museum 3' },
    ],
    'Stairs': [
      { base: '320-s-boston-2', display: '320 S. Boston' },
      { base: 'carnegie-mellon-step-2', display: 'Carnegie Mellon Step' },
      { base: 'ode-to-escher-monastery', display: 'Ode to Escher Monastery' },
      { base: 'jpegs-1', display: 'Jpegs 1' },
      { base: 'salt-lake-city-staircase', display: 'Salt Lake City Staircase' },
    ],
    'Thailand': [
      { base: 'bud-with-cave-2', display: 'Bud with Cave' },
      { base: 'bell-temple-buddhist-bangkok', display: 'Bell Temple Buddhist Bangkok' },
      { base: 'basket-man-with-lace-cloth-bali', display: 'Basket Man with Lace Cloth Bali' },
      { base: 'sj010-step2-flat', display: 'Two Men on Steps' },
      { base: 'smiling-buddha-2', display: 'Smiling Buddha' },
      { base: 'untitled-1310', display: 'Woodworking Woman' },
      { base: 'sj013-step2-flat', display: 'Tropical Reflection' },
      { base: 'untitled-1308', display: 'Peaceful Welcoming' },
      { base: 'untitled-1309', display: 'Fish Around Totem' },
    ],
    'Not Categorized': [
      { base: 'dogwood', display: 'Dogwood' },
      { base: 'harwood-museum-1', display: 'Harwood Museum' },
      { base: 'itratuppeer', display: 'Itra Tuppeer' },
      { base: 'calla-lily-2', display: 'Calla Lily' },
      { base: 'philbrook-winter-reflection-jet-cp', display: 'Philbrook Winter Reflection' },
      { base: 'rochester-panel-step-2', display: 'Rochester Panel Step' },
      { base: 'indian-girl-scanned-in-black-and-white-100', display: 'Indian Girl' },
      { base: 'untitled-8', display: 'Bleachers' },
      { base: 'untitled-59-3', display: 'Airport' },
      { base: 'texas-jam-008', display: 'Texas Jam' },
      { base: 'world-peace-begins-in-the-imagination', display: 'World Peace Begins in the Imagination' },
    ],
  };

  const photos: Photo[] = [];
  let id = 1;
  Object.entries(categoryMap).forEach(([category, images]) => {
    images.forEach(img => {
      photos.push({
        id: id++,
        title: img.display,
        project: category.toLowerCase().replace(/ /g, '-'),
        year: 2024,
        imageUrl: `/photos/Works/optimized/${category}/${img.base}-card.webp`,
        fullImageUrl: `/photos/Works/optimized/${category}/${img.base}-large.webp`,
        description: '',
      });
    });
  });
  // All images will be added here after optimization and categorization
  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };
  const closePhotoDetail = () => {
    setSelectedPhoto(null);
  };
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            PHOTOGRAPHY WORKS
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of black and white photographs spanning various projects and themes
          </p>
        </div>
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {projects.map(project => (
            <button key={project.id} onClick={() => setSelectedProject(project.id)} className={`px-4 py-2 border transition-colors duration-200 ${selectedProject === project.id ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-700 hover:border-gray-900'}`}>
              {project.name}
            </button>
          ))}
        </div>
        {/* Gallery */}
        <ImageGallery photos={photos} selectedProject={selectedProject} onPhotoClick={handlePhotoClick} />
        {/* Photo Detail Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button onClick={closePhotoDetail} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  {selectedPhoto.fullImageUrl ? (
                    <img src={selectedPhoto.fullImageUrl} alt={selectedPhoto.title} className="w-full h-auto" loading="lazy" />
                  ) : (
                    <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} className="w-full h-auto" loading="lazy" />
                  )}
                </div>
                <div className="md:w-1/3 text-white">
                  <h2 className="text-2xl font-serif mb-2">
                    {selectedPhoto.title}
                  </h2>
                  <p className="text-gray-300 mb-4">{selectedPhoto.year}</p>
                  <p className="mb-6">{selectedPhoto.description}</p>
                  <div className="border-t border-gray-700 pt-6">
                    <h3 className="text-lg mb-2">
                      Available as Fine Art Print
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Archival pigment print on museum-quality paper. Available in various sizes.
                    </p>
                    <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200">
                      Inquire About This Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Works; 