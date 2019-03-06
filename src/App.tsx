import React, { Component } from 'react';
import './App.css';

import DogsListContainer from './containers/DogsListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <DogsListContainer />
        </main>
      </div>
    );
  }
}

export default App;
