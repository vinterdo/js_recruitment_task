import { dispatch, getState } from '../../state/state';
import addToReadLater from '../../state/actions/addToReadLater';
import { onClick } from '../../renderer';


const NewsBox = ({ id, title, sectionName, publicationDate, articleLink }) => {
    const state = getState();

    onClick(
        () => document.querySelector(`#${id} .read-later-button`),
        onReadLater
    );
    function onReadLater() {
        dispatch(addToReadLater(id));
    }

    const isInReadLater = state.readLater.map(rl => rl.id).includes(id);

    return `
     <li id="${id}">
       <article class="news">
         <header>
           <h3>${title}</h3>
         </header>
         <section class="newsDetails">
           <ul>
             <li><strong>Section Name:</strong> ${sectionName}</li>
             <li><strong>Publication Date:</strong> ${new Date(publicationDate).toLocaleString()}</li>
           </ul>
         </section>
         <section class="newsActions">
           <a href="${articleLink}" class="button">Full article</a>
           ${isInReadLater ? '' : '<button class="button button-outline read-later-button">Read Later</button>'}
         </section>
       </article>
     </li>
  `;
};

export default NewsBox;