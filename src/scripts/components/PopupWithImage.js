import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imagePopupImg = this._popup.querySelector('.popup__image');
    this._imagePopupCaption = this._popup.querySelector('.popup__image-caption');
  }

  open(item) {
    this._imagePopupImg.src = item.link;
    this._imagePopupCaption.textContent = item.name;
    this._imagePopupImg.alt = `${item.name}`;
    super.open();
  }
}