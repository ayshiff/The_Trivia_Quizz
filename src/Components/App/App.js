import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeContainer from '../../views/Home/HomeContainer';
import CategoryContainer from '../../views/Category/CategoryContainer';
import './App.css';

export const Context = React.createContext({
  SCORE: 0,
  ERROR: 0,
  setScore: () => {},
  setError: () => {}
});

class App extends Component {
  setScore = SCORE => {
    this.setState({ SCORE });
  };
  setError = ERROR => {
    this.setState({ ERROR });
  };
  state = {
    SCORE: 0,
    ERROR: 0,
    setScore: this.setScore,
    setError: this.setError
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <Context.Consumer>
            {({ SCORE, ERROR }) => (
              <header>
                <h1>Score: {SCORE}</h1>
                <h1>Error: {ERROR}</h1>
              </header>
            )}
          </Context.Consumer>
          <Router>
            <div>
              <Route exact path="/" component={HomeContainer} />
              <Route path="/categories/:name" component={CategoryContainer} />
            </div>
          </Router>
          <footer />
        </div>
      </Context.Provider>
    );
  }
}

export default App;
