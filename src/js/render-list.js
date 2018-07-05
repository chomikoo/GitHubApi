const tableList = document.getElementById("repositories-list");

function generateTab(id, name, url, lastUpdate, language) {
    return `<tr>
                <th scope="row">${id+1}</th>
                <td><a href="${url}">${name}</a></td>
                <td data-text="${language}"><span class="${iconLang(language)}"></span></td>
                <td>${convertDate(lastUpdate)}</td>
            </tr>`;
}

function convertDate( lastUpdate ) {
    let date = new Date( lastUpdate );
    return `${date.getDate()}.${leadingZero( date.getMonth()+1)}.${date.getFullYear()}r`;
}


function leadingZero( num ){
    return ( num < 10 ) ? `${ '0' + num }` : `${ num }`;
}

function iconLang(lang) {
    console.log(lang.toLowerCase());
    switch(lang.toLowerCase()) {
        case 'html':
            // console.log('fab fa-html5' + lang);
            return 'fab fa-html5';
            break;

        case 'css':
            // console.log('fab fa-css3-alt');
            return 'fab fa-css3-alt';
            break;

        case 'javascript':
            // console.log('ab fa-js-square');
            return 'fab fa-js-square';
            break;

        case 'php':
            return 'fab fa-php';
            break;

        default:
            return 'fas fa-code';
    }
}
  
export function render(repos) {
    let html = repos.map( (repo, i) => {
        return generateTab(i, repo.name, repo.html_url, repo.updated_at, repo.language);
    });

    tableList.innerHTML = html.join('');
}