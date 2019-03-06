import React, { Component } from 'react';
import request from 'superagent';

export interface IDogsListProps {
  dogBreeds: null | any[];
}

const DogsList = ({ dogBreeds }: IDogsListProps) => {
  return (
    <div className="dogs-list">
      <h1>Dogs List</h1>

      {dogBreeds
        ? <ul>{dogBreeds.map(breed => <li key={breed}>{breed}</li>)}</ul>
        : <p>Loading...</p>}
    </div>
  );
}

export default DogsList;
