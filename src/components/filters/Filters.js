import SectionSelect from './SectionSelect';
import PageSelect from './PageSelect';

const Filters = () => {
    return `
      <section class="container filtersContainer">
        ${SectionSelect()}
        ${PageSelect()}
      </section>
  `;
};

export default Filters;