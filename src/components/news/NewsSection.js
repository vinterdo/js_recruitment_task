import NewsList from './NewsList';
import ReadLaterList from './ReadLaterList';

const NewsSection = ({news, readLater}) => {
    return `
      <section class="container newsContainer">
        <div class="row">
            ${NewsList({articles: news})}
            ${ReadLaterList({articles: readLater})}
        </div>
      </section>
  `;
};

export default NewsSection;