// @flow

import React, { Component } from 'react';
import Home from './Home';
import { getCategories } from '../../helpers/api';
import { Context } from '../../Components/App/App';

type State = {
  categories: Array<any>,
  isLoading: boolean
};

type Props = {};

class HomeContainer extends Component<Props, State> {
  state = {
    categories: [],
    isLoading: true
  };

  componentDidMount = async () => {
    await getCategories().then(data =>
      this.setState({
        categories: data,
        isLoading: false
      })
    );
  };

  render() {
    const { categories, isLoading } = this.state;
    return (
      <Context.Consumer>
        {({ SCORE }) => (
          <Home score={SCORE} categories={categories} isLoading={isLoading} />
        )}
      </Context.Consumer>
    );
  }
}

export default HomeContainer;
