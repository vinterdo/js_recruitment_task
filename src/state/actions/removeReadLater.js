export default (articleId) => (state) => {
    return Object.assign({}, state, {
        readLater: state.readLater.filter(article => article.id !== articleId)
    });
};