import {photoList} from './photoLinker.js';

const photoListElement = document.querySelector('.pictures');
const photoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const photoListFragments = document.createDocumentFragment();
photoList.forEach(({id, url, likes, comments}) => {
  const photoElement = photoTemplate.cloneNode(true);

  const elementImage = photoElement.querySelector('.picture__img');
  const elementLikesCount = photoElement.querySelector('.picture__likes');
  const elementComments = photoElement.querySelector('.picture__comments');
  elementImage.src = url;
  elementImage.setAttribute('data-photo-id', id);
  elementLikesCount.textContent = likes;
  elementComments.textContent = comments.length;
  photoListFragments.appendChild(photoElement);
});

photoListElement.appendChild(photoListFragments);