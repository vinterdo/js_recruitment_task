import { dispatch, getState } from '../../state/state';
import changeSearchParameters from '../../state/actions/changeSearchParameters';
import { onChange } from '../../renderer';

const SectionSelect = () => {
    const state = getState();
    onChange(() => document.getElementById('sectionSelect'), onSectionChange);
    onChange(() => document.getElementById('newsContentSearch'), onSearchChange);

    function onSectionChange(event) {
        dispatch(changeSearchParameters({ section: event.target.value }));
    }

    function onSearchChange(event) {
        dispatch(changeSearchParameters({ searchTerm: event.target.value }));
    }

    const options = {
        all: 'All',
        books: 'Books',
        business: 'Business',
        culture: 'Culture',
        sport: 'Sport',
    };

    const optionsHtml = Object.keys(options)
        .map(option => {
            const value = options[option];
            return `<option value=${option} ${state.currentSection === option ? 'selected' : ''}/>${value}</option>`;
        }).join('');

    return `
        <div class="row">
          <div class="column searchColumn">
            <label for="newsContentSearch">News content search</label>
            <input type="search" placeholder="News content search" id="newsContentSearch" value="${state.searchTerm}"/>
          </div>
          <div class="column">
            <label for="sectionSelect">Section</label>
            <select id="sectionSelect">
            ${optionsHtml}
            </select>
          </div>
        </div>
  `;
};

export default SectionSelect;