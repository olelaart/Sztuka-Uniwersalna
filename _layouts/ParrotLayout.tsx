import * as React from 'react';
import { Link } from 'react-router-dom';

import { Page, Website, MenuEntry } from 'paramorph/models';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Crumbs from '../_includes/Crumbs';
import TagList from '../_includes/TagList';
import TopBar from 'parrot-layout/TopBar';

const s = require('parrot-layout/root.scss');

export interface Props {
  website : Website;
  page : Page;
}

export function ParrotLayout({ website, page } : Props) {
  const Body = page.body;
  const index = website.getPageOfUrl('/');

  return (
    <div id={ s.all }>
      <link
        href="https://fonts.googleapis.com/css?family=Andada|Roboto+Slab:300,400,700"
        rel="stylesheet"
      />
      <div className={ s.header }>
        <TopBar website={ website } page={ page } />
      </div>
      <main>
        <h1><Link to={ page.url }>{ page.title }</Link></h1>
        <Crumbs website={ website } page={ page } />
        <TagList website={ website } page={ page } />
        <Body website={ website } page={ page } />
      </main>
      <footer>
        <ul>
        { website.menu.map((entry : MenuEntry, key : number) => (
          <li key={ key }><Link to={ entry.url }>{ entry.title }</Link></li>
        )) }
        </ul>
        <p>
          <Link to={ index.url }>{ index.title }</Link> | <Link to="/sitemap">Site Map</Link>
        </p>
      </footer>
    </div>
  );
}

export default withStyles(s)(ParrotLayout);
