import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  open(item) {
    this._imagePopupImg = this._popup.querySelector('.popup__image');
    this._imagePopupCaption = this._popup.querySelector('.popup__image-caption');
    this._imagePopupImg.src = item.link;
    this._imagePopupCaption.textContent = item.name;
    super.open();
  }
}