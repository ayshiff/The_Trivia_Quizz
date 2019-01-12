// @flow

import React from 'react';
import { Link } from 'react-router-dom';

type Parameters = {
  categories: Array<any>,
  isLoading: boolean
};

const Home = ({ categories, isLoading }: Parameters) => (
  <section>
    <h1>Home Page</h1>
    {!isLoading && (
      <div>
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
