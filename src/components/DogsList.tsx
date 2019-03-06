import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export interface IDogsListProps {
  dogBreeds: null | any[];
}

const DogsList = ({ dogBreeds }: IDogsListProps) => {
  return (
    <div className="dogs-list">
      <h1>Dogs List</h1>

      {dogBreeds
        ? <ul>{dogBreeds.map(breed => (
          <li key={breed}>
            <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
          </li>
        ))}</ul>
        : <p>Loading...</p>}
    </div>
  );
}

export default DogsList;
