// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type Parameters = {
  categories: Array<any>,
  isLoading: boolean
};

const Home = ({ categories, isLoading }: Parameters) => (
  <section>
    <h3>Choose a topic !</h3>
    <hr />
    {!isLoading && (
      <div className="menuList">
        {categories.map(res => (
          <li key={res.id}>
            <Link to={`categories/${res.id}`}>{res.title}</Link>
          </li>
        ))}
      </div>
    )}
  </section>
);

export default Home;
