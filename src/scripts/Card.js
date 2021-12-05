export default class Card {
  constructor(cardTitle, cardImgLink, cardElementTemplate, handleCardClick) {
    this._cardTitle = cardTitle;
    this._cardImgLink = cardImgLink;
    this._cardElementTemplate = cardElementTemplate;
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    this._card = document
      .querySelector(this._cardElementTemplate)
      .content
      .querySelector('.element')
      .cloneNode(true);
    this._cardImg = this._card.querySelector('.element__photo');
    this._cardDescription = this._card.querySelector('.element__title');
    this._cardLikeButton = this._card.querySelector('.element__like-button');
    this._cardDeleteButton = this._card.querySelector('.element__delete-button');
    this._cardDescription.textContent = this._cardTitle;
    this._cardImg.src = this._cardImgLink;
    this._cardImg.alt = `${this._cardTitle}`;
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => {
      this._likeCard(this._card);
    });

    this._cardDeleteButton.addEventListener('click', () => {
      this._deleteCard(this._card);
    });

    this._cardImg.addEventListener('click', () => {
      this._handleCardClick();
    });
  }

  _likeCard() {
    this._cardLikeButton.classList.toggle('element__like-button_active');
  }

  _deleteCard() {
    this._card.remove();
    this._card = null;
  }
}
