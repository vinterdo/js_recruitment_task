import NewsBox from './NewsBox';

const NewsList = ({articles}) => {
    return `
    <div class="column column-65">
      <h2 class="newsColumnTitle">News List</h2>
      <ul class="newsList">
        ${articles.map(article => NewsBox(article)).join('')}
      </ul>
    </div>
  `;
};

export default NewsList;