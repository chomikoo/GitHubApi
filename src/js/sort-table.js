import { render } from './render-list';

export function sortRepos(repos, key) {
    let sortedArr =  repos.slice(0);

    sortedArr.sort( (a,b) => {
        let aDate = a.updated_at;
        let bDate = b.updated_at;

        return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;

    });
    
    render(sortedArr.reverse());
}