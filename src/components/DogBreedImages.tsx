// src/components/DogBreedImages.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import DogImage from './DogImage';

export interface IDogBreedImages {
  breed: string;
  images: string[];
}

export default function DogBreedImages({ images, breed }: IDogBreedImages) {
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images</h1>
      <p>This page shows images of the <strong>{breed}</strong> breed.</p>
      <div className="images">
        {images.map(url => (
          <DogImage key={url} url={url} />
        ))}
      </div>
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
