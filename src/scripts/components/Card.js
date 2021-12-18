export default class Card {
  constructor(cardName,
              cardImgLink,
              cardLikes,
              mainId,
              cardId,
              cardTemplateSelector,
              actualUserId,
              handleCardClick,
              handleDelClick,
              handleLikeClick) {
    this._cardName = cardName;
    this._cardImgLink = cardImgLink;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelClick = handleDelClick;
    this._cardLikes = cardLikes;
    this._mainId = mainId;
    this._cardId = cardId;
    this._handleLikeClick = handleLikeClick;
    this._actualUserId = actualUserId;
  }

  createCard() {
    this._card = document
      .querySelector(this._cardTemplateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
    this._cardImg = this._card.querySelector('.element__photo');
    this._cardDescription = this._card.querySelector('.element__title');
    this._cardLikeBtn = this._card.querySelector('.element__like-button');
    this._cardDeleteBtn = this._card.querySelector('.element__delete-button');
    this._cardLikesQty = this._card.querySelector('.element__likes-num');
    this._cardDescription.textContent = this._cardName;
    this._cardImg.src = this._cardImgLink;
    this._cardImg.alt = `${this._cardName}`;
    this._cardLikesQty.textContent = this._cardLikes.length;
    this._card.id = this._cardId;
    if (this._actualUserId !== this._mainId) {
      this._cardDeleteBtn.classList.add('element__delete-button_hide');
    }
    if (this._cardLikes.some(item => {
      return (item._id === this._actualUserId);
    })) {
      this._likeCard();
    }
    this._setEventListeners();
    return this._card;
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener('click', () => {
      if (!this._cardLikeBtn.classList.contains('element__like-button_active')) {
        this._handleLikeClick(true);
      } else {
        this._handleLikeClick(false);
      }
    });
    this._cardDeleteBtn.addEventListener('click', () => {
      this._handleDelClick();
    });
    this._cardImg.addEventListener('click', () => {
      this._handleCardClick();
    })
  }

  _likeCard() {
    this._cardLikeBtn.classList.toggle('element__like-button_active');
  }

  refreshLikesNum(num) {
    this._cardLikesQty.textContent = num;
    this._likeCard();
  }
}
