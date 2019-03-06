import React from 'react';

export interface IDogImage {
  url: string;
}

export default function DogImage({ url }: IDogImage) {
  return (
    <img src={url} alt="Image of a dog" />
  )
}
