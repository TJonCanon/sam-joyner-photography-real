import React, { useState } from 'react';
import ImageGallery from '../components/ImageGallery';
import { XIcon } from 'lucide-react';
interface Photo {
  id: number;
  title: string;
  project: string;
  year: number;
  imageUrl: string;
  description?: string;
}
const Works = () => {
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const projects = [{
    id: 'all',
    name: 'All Works'
  }, {
    id: 'urban',
    name: 'Urban Landscapes'
  }, {
    id: 'nature',
    name: 'Nature Studies'
  }, {
    id: 'portraits',
    name: 'Portraits'
  }, {
    id: 'abstract',
    name: 'Abstract'
  }];
  const photos: Photo[] = [{
    id: 1,
    title: 'City Reflections',
    project: 'urban',
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1449024540548-94f5d5a59230?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A study of architectural forms reflected in the glass facades of modern buildings.'
  }, {
    id: 2,
    title: 'Solitude',
    project: 'nature',
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A lone tree stands against the backdrop of a misty mountain range.'
  }, {
    id: 3,
    title: 'The Artist',
    project: 'portraits',
    year: 2020,
    imageUrl: 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A portrait of a sculptor at work, capturing the intense concentration and passion.'
  }, {
    id: 4,
    title: 'Geometric Shadows',
    project: 'abstract',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1533122250115-6bb28e9a48c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'An exploration of light and shadow creating abstract geometric patterns.'
  }, {
    id: 5,
    title: 'Urban Canyon',
    project: 'urban',
    year: 2021,
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A view looking up between skyscrapers, creating a canyon-like effect.'
  }, {
    id: 6,
    title: 'Mountain Silhouette',
    project: 'nature',
    year: 2022,
    imageUrl: 'https://images.unsplash.com/photo-1477322524744-0eece9e79640?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'The dramatic silhouette of a mountain range at dusk.'
  }, {
    id: 7,
    title: 'The Musician',
    project: 'portraits',
    year: 2019,
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'A portrait of a jazz musician lost in the moment during a performance.'
  }, {
    id: 8,
    title: 'Fluid Forms',
    project: 'abstract',
    year: 2023,
    imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'Abstract patterns created by the movement of water and light.'
  }, {
    id: 9,
    title: 'Abandoned Platform',
    project: 'urban',
    year: 2020,
    imageUrl: 'https://images.unsplash.com/photo-1473187983305-f615310e7daa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    description: 'An empty subway platform captured in the early hours of the morning.'
  }];
  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };
  const closePhotoDetail = () => {
    setSelectedPhoto(null);
  };
  return <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            PHOTOGRAPHY WORKS
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A collection of black and white photographs spanning various
            projects and themes
          </p>
        </div>
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {projects.map(project => <button key={project.id} onClick={() => setSelectedProject(project.id)} className={`px-4 py-2 border transition-colors duration-200 ${selectedProject === project.id ? 'border-black bg-black text-white' : 'border-gray-300 text-gray-700 hover:border-gray-900'}`}>
              {project.name}
            </button>)}
        </div>
        {/* Gallery */}
        <ImageGallery photos={photos} selectedProject={selectedProject} onPhotoClick={handlePhotoClick} />
        {/* Photo Detail Modal */}
        {selectedPhoto && <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full">
              <button onClick={closePhotoDetail} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
                <XIcon className="h-6 w-6" />
              </button>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3">
                  <img src={selectedPhoto.imageUrl} alt={selectedPhoto.title} className="w-full h-auto" />
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
                      Archival pigment print on museum-quality paper. Available
                      in various sizes.
                    </p>
                    <button className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors duration-200">
                      Inquire About This Print
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default Works;