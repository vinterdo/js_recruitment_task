export default (articleId) => (state) => {
    if(state.readLater.find(article => article.id === articleId)) {
        return state; // noop - article already in to read list
    }
    const article = state.articles.find(article => article.id === articleId);
    const readLater = [article, ...state.readLater];
    return Object.assign({}, state, {
        readLater
    });
};