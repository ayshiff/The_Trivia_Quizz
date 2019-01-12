import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Category from './Category';
import { getCategoryById } from '../../helpers/api';
import { Context } from '../../Components/App/App';

type State = {
  category: Array<any>
};

type Props = {
  match: {
    params: {
      name: string
    }
  }
};

class CategoryContainer extends Component<Props, State> {
  state = {
    category: [],
    categoryTitle: ''
  };

  componentDidMount = async () => {
    const {
      match: {
        params: { name }
      }
    } = this.props;
    await getCategoryById(name).then(category => {
      this.setState({
        category: category.clues,
        categoryTitle: category.title
      });
    });
    // Save current category on LocalStorage
    localStorage.setItem('category', name);
  };

  render() {
    const { name } = this.props.match.params;
    const { history } = this.props;
    const { category, categoryTitle } = this.state;

    return (
      <Context.Consumer>
        {({ SCORE, setScore, ERROR, setError }) => (
          <Category
            redirect={history}
            title={categoryTitle}
            setScore={setScore}
            setError={setError}
            score={SCORE}
            error={ERROR}
            categoryName={name}
            categoryValues={category}
          />
        )}
      </Context.Consumer>
    );
  }
}

export default withRouter(CategoryContainer);
