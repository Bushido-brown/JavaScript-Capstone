import { updateLikes, setLike, } from './likeFunctionality.js';
import modalDisplay from './newmodel';

const displayMovies = async (movieList, appId, section) => {
    const movieSection = document.querySelector(`#${section}-section`);
    movieSection.innerHTML = '';
    movieList.forEach((item) => {
        console.log(item)
        const mainDiv = document.createElement('div');
        mainDiv.className = 'movie-wrapper modal-container';
        mainDiv.id = `${section}${item.id}`;
        const details = document.createElement('div');
        details.className = 'movie-wrapper__title  modal-container';
        const img = document.createElement('img');
        img.className = 'movie-wrapper__img';
        img.src = item.image.medium;
        const name = document.createElement('h3');
        name.innerHTML = `${item.name}`;
        const likes = document.createElement('div');
        likes.className = 'movie-wrapper__likes';
        const span = document.createElement('span');
        const like = document.createElement('i');
        like.className = 'fas fa-heart';
        likes.append(like, span);
        details.append(name, likes);
        const commentButton = document.createElement('button');
        commentButton.type = 'button';
        commentButton.innerHTML = 'Comments';
        commentButton.className = 'movie-wrapper__comment-button open-moda';
        commentButton.id = 'open-modal';
        commentButton.addEventListener('click', async () => {
            modalDisplay(item);
        });
        mainDiv.append(img, details, commentButton);
        const reserveButton = document.createElement('button');
        reserveButton.type = 'button';
        reserveButton.innerHTML = 'Reservations';
        reserveButton.className = 'movie-wrapper__comment-button';
        mainDiv.append(reserveButton);
        movieSection.appendChild(mainDiv);
        like.addEventListener('click', () => {
            setLike(`${section}${item.id}`, appId);
            const number = like.parentNode.lastChild.textContent.split(' ');
            like.parentNode.lastChild.innerHTML = `${Number(number[0]) + 1} likes`;
        });
    });
    updateLikes(appId);
};












export { displayMovies as default };
