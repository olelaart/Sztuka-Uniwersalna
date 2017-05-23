
import { Page, CurrentPage, Template } from './CurrentPage';
import Layout from './Layout';

export default class Category extends CurrentPage {
  pages : Page[] = [];

  constructor(title : string, url : string, layout : Layout, template : Template, date ?: string) {
    super(title, url, layout, template, date);
  }
}
