import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._submitButton = this._form.querySelector('.popup__save-button');
    
  }

  open(cardId) {
    super.open();
    this._cardId = cardId;
  }

  removeCardConfirm(cardId) {
    this._removingCard = document.getElementById(cardId)
    this._removingCard.remove()
  }

  renderLoading(loading) {
    if (loading) {
      this._submitButton.value = this._submitButton.textContent;
      this._submitButton.textContent = 'Удаление...';
    } else {
      this._submitButton.textContent = this._submitButton.value;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.renderLoading(true);
      this._handleFormSubmit(this._cardId);
    });
  }
}