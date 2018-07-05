import axios from 'axios';
import './scss/style.scss';

  const tableList = document.getElementById("repositories-list");
  console.log(tableList);
  


const myLogin = 'chomikoo';
let repositiories = [];


axios.get(`https://api.github.com/users/${myLogin}/repos`)
.then(response => {
  repositiories = response.data;
  // console.log(repositiories[0].name);
  render(repositiories);

  
})
.catch( error => {
  console.log(error);
});

function generateTab(id, name, url, lastUpdate, language) {

  return `<tr><th scope="row">${id}</th><td>${name}</td><td>${language}</td><td>${lastUpdate}</td></tr>`
  // tableList.innerHTML = html;

}

function render(repos) {
  let html = repos.map( (repo, i) => {
    return generateTab(i, repo.name, repo.html_url, repo.updated_at, repo.language);
  });

  console.log(html);

  tableList.innerHTML = html.join('');
}