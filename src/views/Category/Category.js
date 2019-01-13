// @flow

import React from 'react';
import './category.css';

type Props = {
  categoryValues: Array<any>,
  score: number,
  setScore: () => any,
  title: string,
  setError: () => any,
  error: number,
  redirect: arg => any
};

class Category extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      questionId: 0,
      responseValue: ''
    };
  }

  checkResponse = response => {
    const {
      categoryValues,
      setScore,
      score,
      error,
      setError,
      redirect
    } = this.props;
    const { questionId } = this.state;

    if (response === categoryValues[questionId].answer) {
      if (categoryValues.length === questionId + 1) {
        // Redirect to home page
        redirect.push('/');
      } else {
        this.setState({ questionId: questionId + 1 });
      }
      setScore(score + 1);
    } else {
      setError(error + 1);
      if (error === 3) {
        setScore(0);
        setError(0);
      }
      if (categoryValues.length === questionId + 1) {
        // Redirect to home page
        redirect.push('/');
      } else {
        this.setState({ questionId: questionId + 1 });
      }
    }
  };

  render() {
    const { categoryValues, title } = this.props;
    const { responseValue, questionId } = this.state;

    return (
      <section>
        <h1>Category Page: {title}</h1><hr></hr>
        {categoryValues.length > 0 ? (
          <div className="questionSection">
            <h2>{categoryValues[questionId].question}</h2>
            <input
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
