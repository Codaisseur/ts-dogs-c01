import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import DogsListContainer from './containers/DogsListContainer';
import DogBreedImagesContainer from './containers/DogBreedImagesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Route exact={true} path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;
