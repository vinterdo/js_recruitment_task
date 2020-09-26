import NewsSection from './news/NewsSection';
import Filters from './filters/Filters';
import { getState } from '../state/state';
import logo from 'url:~/src/assets/logo.png';

const App = () => {
    const state = getState();

    return `
      <header class="appHeader">
        <div class="container appHeader-inner">
          <img src=${logo} alt="company logo" class="companyLogo" />
          <h1 class="appTitle">Recruitment task</h1>
        </div>
      </header>
      ${Filters()}
      ${NewsSection({news: state.articles, readLater: state.readLater})}
  `;
};

export default App;