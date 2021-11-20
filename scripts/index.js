// Импорт
import {Card} from './card.js';
import {FormValidator} from './FormValidator.js'
import {closePopup, openPopup, imagePopup, imagePopupCloseButton} from './utils.js';

// Переменные
const profilePopup = document.querySelector('.popup_type_profile');
const popupForm = document.querySelector('.popup__form_profile');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');
const editButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const newPlaceButton = document.querySelector('.profile__add-button');
const cardsContainer = document.querySelector('.elements');
const cardPopup = document.querySelector('.popup_type_card');
const cardForm = cardPopup.querySelector('.popup__form_card');
const cardPopupCloseButton = cardPopup.querySelector('.popup__close-button_card');
const cardNameInput = cardForm.querySelector('.popup__input_type_card-name');
const cardLinkInput = cardForm.querySelector('.popup__input_type_link');

// Template-элемент карточки
const cardElementTemplate = '#element__template';

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// классы валид
const validObj = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_invalid',
  errorClass: 'popup__input-error_active',
  errorSelector: '.popup__input-error'
};

// валидатор попап профиль
const profileValidator = new FormValidator (validObj, popupForm);
profileValidator.enableValidation();


// попап профиль с чек валид
function editProfile() {
  profileValidator.clearValidation();
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
  openPopup(profilePopup);
  profileValidator.toggleButtonState();
}

function editProfileHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(profilePopup);
}

// валидатор попап карточка
const cardValidator = new FormValidator (validObj, cardForm);
cardValidator.enableValidation();

// попап карточка с чек валид
function renderCardPopup() {
  cardValidator.clearValidation();
  openPopup(cardPopup);
  cardValidator.toggleButtonState();
}

// отдельная функция возврат новой карточки
function createCard(title, link) {
  const card = new Card(title, link, cardElementTemplate);
  const result = card.renderCard();
  return result;
}

function addCardHandler(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard(cardNameInput.value, cardLinkInput.value));
  cardForm.reset();
  closePopup(cardPopup);
}

// массив карточек на страницу
function uploadCards(array) {
  array.forEach((item) => {
    cardsContainer.prepend(createCard(item.name, item.link));
  });
}

uploadCards(initialCards);

// слушатели событий
editButton.addEventListener('click', editProfile);
popupCloseButton.addEventListener('click', () => closePopup(profilePopup));
popupForm.addEventListener('submit', editProfileHandler);
newPlaceButton.addEventListener('click', renderCardPopup);
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));
cardForm.addEventListener('submit', addCardHandler);
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));