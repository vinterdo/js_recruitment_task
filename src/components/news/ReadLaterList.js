import ReadLaterBox from './ReadLaterBox';

const ReadLaterList = ({ articles }) => {
    return `
        <div class="column column-55">
            <h2 class="newsColumnTitle">Read Later</h2>
            <ul class="readLaterList">
                ${articles.map(article => ReadLaterBox(article)).join('')}
            </ul>
        </div>
  `;
};

export default ReadLaterList;