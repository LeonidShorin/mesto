// Переменные профиль
export const profile = document.querySelector('.profile');
export const profilePopup = '.popup_type_profile';
export const profilePopupSel = document.querySelector(profilePopup);
export const profileForm = profilePopupSel.querySelector('.popup__form_profile');
export const profileName = '.profile__name';
export const profileDescription = '.profile__description';
export const nameInput = profileForm.querySelector('.popup__input_type_name');
export const jobInput = profileForm.querySelector('.popup__input_type_job');
export const editButton = profile.querySelector('.profile__edit-button');
export const imagePopup = '.popup_type_image';

// переменные карточки
export const newPlaceButton = profile.querySelector('.profile__add-button');
export const cardPopup = '.popup_type_card';
export const cardPopupSel = document.querySelector(cardPopup);
export const cardForm = cardPopupSel.querySelector('.popup__form_card');
export const cardsContainer = '.elements';

// Template-элемент карточки
export const cardElementTemplate = '#element__template';

// загружаем картинки
import arkhyzImage from '../images/arkhyz.jpg';
import chelyabinskImage from '../images/chelyabinsk-oblast.jpg';
import IvanovoImage from '../images/ivanovo.jpg';
import kamchatkaImage from '../images/kamchatka.jpg';
import HolmogorskyImage from '../images/kholmogorsky-rayon.jpg';
import baikalImage from '../images/baikal.jpg';

export const initialCards = [
  {
    name: 'Архыз',
    link: arkhyzImage
  },
  {
    name: 'Челябинская область',
    link: chelyabinskImage
  },
  {
    name: 'Иваново',
    link: IvanovoImage
  },
  {
    name: 'Камчатка',
    link: kamchatkaImage
  },
  {
    name: 'Холмогорский район',
    link: HolmogorskyImage
  },
  {
    name: 'Байкал',
    link: baikalImage
  }
];

// классы валид
export const validObj = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active',
  errorSelector: '.popup__input-error'
};