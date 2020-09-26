import './styles/main.css';
import App from './components/App';
import { getArticles } from './services/articlesService';
import { addSideEffect, dispatch, getState } from './state/state';
import setArticles from './state/actions/setArticles';
import { render } from './renderer';

addSideEffect((oldState, newState) =>
    oldState.currentPage !== newState.currentPage ||
    oldState.currentSection !== newState.currentSection ||
    oldState.searchTerm !== newState.searchTerm,
() => {
    const state = getState();
    getArticles({
        searchTerm: state.searchTerm,
        page: state.currentPage,
        section: state.currentSection,
    }).then(res => {
        console.log('test');
        dispatch(setArticles(res.articles, res.maxPages));
    });
});

getArticles({ searchTerm: '', page: '1', section: '' }).then(res => {
    dispatch(setArticles(res.articles, res.maxPages));
});

render(document.getElementById('wrapper') , App);