import { dispatch } from '../../state/state';
import removeReadLater from '../../state/actions/removeReadLater';
import { onClick } from '../../renderer';

const ReadLaterBox = ({ id, title, articleLink }) => {
    onClick(
        () => document.querySelector(`#${id} .remove-read-later-button`),
        onRemove
    );

    function onRemove() {
        dispatch(removeReadLater(id));
    }

    return `
        <li id="${id}">
          <h4 class="readLaterItem-title">${title}</h4>
          <section>
            <a href="${articleLink}" class="button button-clear">Read</a>
            <button class="button button-clear remove-read-later-button">Remove</button>
          </section>
        </li>
  `;
};

export default ReadLaterBox;