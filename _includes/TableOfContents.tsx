import * as React from 'react';
import { Link } from 'react-router-dom';

import { Page, Category } from '../src/models';

interface HashTable<T> {
  [key : string]: T;
}

interface Props {
  categories : HashTable<Category>;
};

export default ({ categories } : Props) => (
  <div>
  { Object.keys(categories)
    .map((key : string) => categories[key])
    .map(({ url, title, pages } : Category, key: number) => (
    <div key={ key }>
      <h1>
        <Link to={ url }>{ title }</Link>
      </h1>
      <ul>
      { pages.map(({ title, url } : Page, key: number) => (
        <li key={ key }><Link to={ url }>{ title }</Link></li>
      )) }
      </ul>
    </div>
  )) }
  </div>
);

