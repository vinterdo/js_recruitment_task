export default (articles, maxPages) => (state) => {
    return Object.assign({}, state, {
        articles: articles,
        maxPages: maxPages || 1
    });
};