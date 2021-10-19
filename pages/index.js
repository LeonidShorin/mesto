"use strict"
// Переменные
//const popup = document.querySelector('.popup');
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
const imagePopup = document.querySelector('.popup_type_image');
const imagePopupCloseButton = imagePopup.querySelector('.popup__close-button_image');
const imagePopupImg = imagePopup.querySelector('.popup__image');
const imagePopupImgCaption = imagePopup.querySelector('.popup__image-caption');

// Template-элемент карточки
const cardElementTemplate = document.querySelector('#element__template').content;

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

// функция открытия поп-апа
function openPopup(anyPopup) {
  anyPopup.classList.add('popup_show');
}

// функция закрытия поп-апа
function closePopup(anyPopup) {
  anyPopup.classList.remove('popup_show');
}

// профиль
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(profilePopup);
}

function editProfile() {
  openPopup(profilePopup);
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

// карточек
// img, title
function createCard (cardName, cardLink) {
  const card = cardElementTemplate.querySelector('.element').cloneNode(true);
  const cardImg = card.querySelector('.element__photo');
  const cardTitle = card.querySelector('.element__title');
  const cardLikeButton = card.querySelector('.element__like-button');
  const cardDeleteButton = card.querySelector('.element__delete-button');

  cardTitle.textContent = cardName;
  cardImg.src = cardLink;
  cardImg.alt = cardName;

  // удаление 
  cardDeleteButton.addEventListener('click', () => card.remove());

  // лайк
  cardLikeButton.addEventListener('click', (event) => {
    event.target.classList.toggle('element__like-button_active');
  });

  // поп-ап фото
  function renderCardPopup() {
    openPopup(imagePopup);
    imagePopupImg.src = cardImg.src;
    imagePopupImg.alt = cardImg.alt;
    imagePopupImgCaption.textContent = cardTitle.textContent;
  }
  
  cardImg.addEventListener('click', renderCardPopup);

  // закрыть поп-ап фото
  imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));

  return card;
}

// Новая карточка (переменная для создаваемых карточек)
let newCard;

// карточка на страницу
function addCard (newCard) {
  cardsContainer.prepend(newCard);
}

// работа с массивом
function renderCards (array) {
  array.forEach((item) => {
    newCard = createCard(item.name, item.link);
    addCard(newCard);
  });
}
renderCards(initialCards);

// заполняем форму, добавляем на старницу
function formSubmitAddCardHandler (event) {
  event.preventDefault();
  newCard = createCard(cardNameInput.value, cardLinkInput.value);
  
  addCard(newCard);

  cardNameInput.value = '';
  cardLinkInput.value = '';

  closePopup(cardPopup);
}

// слушатели событий
editButton.addEventListener('click', editProfile);
popupCloseButton.addEventListener('click', () => closePopup(profilePopup));
popupForm.addEventListener('submit', formSubmitHandler);
newPlaceButton.addEventListener('click', () => openPopup(cardPopup));
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup));
cardForm.addEventListener('submit', formSubmitAddCardHandler);