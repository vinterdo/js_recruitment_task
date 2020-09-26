export default (searchParameters) => (state) => {
    return Object.assign({}, state, {
        currentPage: searchParameters.currentPage || 0,
        searchTerm: searchParameters.searchTerm === undefined ? state.searchTerm : searchParameters.searchTerm,
        currentSection: searchParameters.section || state.currentSection
    });
};