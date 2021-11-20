export const imagePopup = document.querySelector('.popup_type_image');
export const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button_image');
export const imagePopupImg = imagePopup.querySelector('.popup__image');
export const imagePopupImgCaption = imagePopup.querySelector('.popup__image-caption');

// функция открытия поп-апа
export function openPopup(anyPopup) {
  anyPopup.classList.add('popup_show');
  window.addEventListener('keydown', keyEscHandler);
  anyPopup.addEventListener('click', mouseOverlayHandler);
}

// функция закрытия поп-апа
export function closePopup(anyPopup) {
  anyPopup.classList.remove('popup_show');
  window.removeEventListener('keydown', keyEscHandler);
  anyPopup.removeEventListener('click', mouseOverlayHandler);
}

// функция закрытия поп-апа клавишей Esc
export function keyEscHandler(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_show');
    closePopup(currentPopup);
  }
}

// функция закрытия поп-апа кликом на оверлей
export function mouseOverlayHandler(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}