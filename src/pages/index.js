// Импорт
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js'
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import {
  profilePopup,
  profileForm,
  nameInput,
  jobInput,
  editButton,
  profileName,
  profileDescription,
  newPlaceButton,
  cardsContainer,
  cardPopup,
  cardForm,
  cardElementTemplate,
  initialCards,
  imagePopup,
  validObj
} from '../scripts/utils/constants.js';
import './index.css';

/** Валидация **/

// FormValidator для редактирования профиля
const profileValidator = new FormValidator(validObj, profileForm);
profileValidator.enableValidation();

// FormValidator для добавления карточки
const cardValidator = new FormValidator(validObj, cardForm);
cardValidator.enableValidation();

/** Экземпляры классов **/

// экземляр класса UserInfo
const userInfo = new UserInfo(profileName, profileDescription);

// экземпляр PopupWithForm для профиля
const editProfile = new PopupWithForm({
  popupSelector: profilePopup, handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    editProfile.close();
  }
});
editProfile.setEventListeners();

// экземпляр PopupWithImage
const imgPopup = new PopupWithImage(imagePopup);
imgPopup.setEventListeners();

// экземпляр класса Card
const createCard = (item) => {
  const card = new Card(item.name, item.link, cardElementTemplate, () => {
    imgPopup.open(item);
  });
  return card.createCard();
}

// экземпляр класса Section
const cardList = new Section({
  items: initialCards, renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},cardsContainer);
cardList.renderItems();

// экземпляр PopupWithForm для добавления карточек
const addCard = new PopupWithForm({
  popupSelector: cardPopup, handleFormSubmit: (formData) => {
    cardList.addItem(createCard(formData));
    addCard.close();
  }
});
addCard.setEventListeners();

/** Слушатели **/

// слушатель для профиля
editButton.addEventListener('click', () => {
  profileValidator.clearValidation();
  const defaultUserInfo = userInfo.getUserInfo();
  nameInput.value = defaultUserInfo.name;
  jobInput.value = defaultUserInfo.description;
  profileValidator.toggleButtonState();
  editProfile.open();
});

// слушатель добавления карточек
newPlaceButton.addEventListener('click', () => {
  cardValidator.clearValidation();
  cardValidator.toggleButtonState();
  addCard.open();
});

