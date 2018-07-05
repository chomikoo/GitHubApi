import axios from 'axios';
import { sortRepos } from './js/sort-table';

import './scss/style.scss';

const myLogin = 'chomikoo';
const ajaxURL = `https://api.github.com/users/${myLogin}/repos`;
let repositiories = [];


axios.get(ajaxURL)
.then(response => {
  repositiories = response.data;
  sortRepos( repositiories );
})
.catch( error => {
  console.log(error);
});

