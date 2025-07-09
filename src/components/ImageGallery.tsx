import React from 'react';
interface Photo {
  id: number;
  title: string;
  project: string;
  year: number;
  imageUrl: string;
}
interface ImageGalleryProps {
  photos: Photo[];
  selectedProject: string;
  onPhotoClick: (photo: Photo) => void;
}
const ImageGallery = ({
  photos,
  selectedProject,
  onPhotoClick
}: ImageGalleryProps) => {
  const filteredPhotos = selectedProject === 'all' ? photos : photos.filter(photo => photo.project === selectedProject);
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {filteredPhotos.map(photo => <div key={photo.id} className="group cursor-pointer relative overflow-hidden" onClick={() => onPhotoClick(photo)}>
          <img src={photo.imageUrl} alt={photo.title} className="w-full h-[300px] md:h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end justify-start">
            <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h3 className="text-lg font-medium">{photo.title}</h3>
              <p className="text-sm">{photo.year}</p>
            </div>
          </div>
        </div>)}
    </div>;
};
export default ImageGallery;