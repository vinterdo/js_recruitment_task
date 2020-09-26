import changeSearchParameters from '../../state/actions/changeSearchParameters';
import { dispatch, getState } from '../../state/state';
import { onChange } from '../../renderer';

const PageSelect = () => {
    const state = getState();

    onChange(() => document.getElementById('activePageSelect'), onPageChange);
    function onPageChange(event) {
        dispatch(changeSearchParameters({currentPage: parseInt(event.target.value)}));
    }

    const options = [...Array(state.maxPages).keys()]
        .map(key => `<option value="${key + 1}" ${state.currentPage === (key + 1) ? 'selected' : ''}>${key + 1}</option>`)
        .join('');

    return `
        <div class="row">
          <div class="column column-20">
            <label for="activePageSelect">Active Page</label>
            <select id="activePageSelect">
              ${options}
            </select>
          </div>
        </div>
  `;
};

export default PageSelect; 