// @flow

import React from "react";
import "./category.css";

type Props = {
  categoryValues: Array<any>,
  score: number,
  setScore: () => any,
  title: string,
  setError: () => any,
  error: number,
  redirect: arg => any,
  score: number,
  error: number,
  setModal: () => any
};

class Category extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      questionId: 0,
      responseValue: ""
    };
  }

  checkResponse = response => {
    const {
      categoryValues,
      setScore,
      score,
      error,
      setError,
      redirect,
      setModal
    } = this.props;
    const { questionId } = this.state;
    // Replace back slach of the string and test equality with input value
    if (response === categoryValues[questionId].answer.replace(/\\/g, "")) {
      if (categoryValues.length === questionId + 1) {
        // Redirect to home page
        redirect.push("/");
      } else {
        this.setState({ questionId: questionId + 1 });
      }
      setScore(score + 1);
      if (score === 9) {
        redirect.push("/");
        setModal(true);
      }
    } else {
      setError(error + 1);
      if (error === 2) {
        redirect.push("/");
        setModal(true);
      }
      if (categoryValues.length === questionId + 1) {
        // Redirect to home page
        redirect.push("/");
      } else {
        this.setState({ questionId: questionId + 1 });
      }
    }
    // Reset default value
    this.inputValue.value = "";
  };

  render() {
    const { categoryValues, title, score, error } = this.props;
    const { responseValue, questionId } = this.state;

    return (
      <section>
        <header>
          <h1>Score: {score}</h1>
          <h1>Error: {error}</h1>
        </header>
        <h1>Category Page: {title}</h1>
        <hr />
        {categoryValues.length > 0 ? (
          <div className="questionSection">
            <h2>{categoryValues[questionId].question}</h2>
            <input
              ref={el => (this.inputValue = el)}
              onChange={event =>
                this.setState({ responseValue: event.target.value })
              }
              type="text"
            />
            <button onClick={() => this.checkResponse(responseValue)}>
              Verify
            </button>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Category;
