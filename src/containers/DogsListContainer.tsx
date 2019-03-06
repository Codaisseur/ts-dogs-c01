import React, { Component } from 'react';
import request from 'superagent';
import DogsList from '../components/DogsList';

interface IDogsListState {
  dogBreeds: null | any[];
}

export default class DogsListContainer extends Component<{}, IDogsListState> {
  public state: IDogsListState = { dogBreeds: null };

  public componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => this.updateBreeds(Object.keys(response.body.message)))
      .catch(console.error);
  }

  public render() {
    const { dogBreeds } = this.state;
    if (!dogBreeds) { return <p>Loading...</p>; }

    return <DogsList dogBreeds={dogBreeds} />
  }

  private updateBreeds = (breeds: any[]) => {
    this.setState({
      dogBreeds: breeds,
    });
  };
}
