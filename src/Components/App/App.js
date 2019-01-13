import React, { Component } from "react";
import Modal from "react-modal";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "../../views/Home/HomeContainer";
import CategoryContainer from "../../views/Category/CategoryContainer";
import "./App.css";

const customStylesModal = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement(document.getElementById("root"));

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
  setModal = MODAL_STATUS => {
    this.setState({ modalIsOpen: MODAL_STATUS });
  };
  state = {
    SCORE: 0,
    ERROR: 0,
    setScore: this.setScore,
    setError: this.setError,
    setModal: this.setModal,
    modalIsOpen: false
  };

  render() {
    const { modalIsOpen } = this.state;
    return (
      <Context.Provider value={this.state}>
        <Context.Consumer>
          {({ setModal, setScore, setError, SCORE }) => (
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={this.closeModal}
              style={customStylesModal}
              contentLabel="You lost"
            >
              {SCORE === 10 ? <h2>You win !</h2> : <h2>You lost !</h2>}
              <button
                onClick={() => {
                  setModal(false);
                  setScore(0);
                  setError(0);
                }}
              >
                Try Again
              </button>
            </Modal>
          )}
        </Context.Consumer>{" "}
        <div className="App">
          <h1 className="appName">
            <a href="/">Trivia</a>
          </h1>
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
