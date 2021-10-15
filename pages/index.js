//попап и редактирование места
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');
let editButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');

let newPlaceButton = document.querySelector('.profile__add-button');
let cardPopupWindow = document.querySelector('.card-popup');
let newPlaceCloseButton = document.querySelector('.card-popup__close-button');

// функция открытия поп-апа
function popupOpen() {
  popup.classList.add('popup_show');
}

// функция закрытия поп-апа
function popupClose() {
  popup.classList.remove('popup_show');
}

// функция открытия плюсика
function placeEditOpen() {
  cardPopupWindow.classList.add('card-popup_show');
};

// функция закрытия плюсика
function placeEditClose() {
  cardPopupWindow.classList.remove('card-popup_show');
};

function editNewPlace() {

}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupClose();
}

function editProfile() {
  popupOpen();
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

popupForm.addEventListener('submit', formSubmitHandler);
popupCloseButton.addEventListener('click', popupClose);
editButton.addEventListener('click', editProfile);

newPlaceButton.addEventListener('click', placeEditOpen);
newPlaceCloseButton.addEventListener('click', placeEditClose);

//карточки из коробки
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

const cardsContainer = document.querySelector('.elements');
const renderCards = (item) => {
  return `
   <div class="element">
    <img class="element__photo" src="${item.link}" alt="Картинка">
    <button type="button" class="element__delete-button"></button>
    <div class="element__description">
      <h2 class="element__title">${item.name}</h2>
      <button type="button" class="element__like-button"></button>
    </div>
    <button type="button" class="element__delete-button"></button>
  </div>`;
};

cardsContainer.innerHTML = initialCards.map(renderCards).join('');


//const cardTemplate = document.getElementById('#element__template')

/*function createCard(title, imageLink) {
  const card = document.querySelector('.element__template');
  const cardClone = card.cloneNode(true);
  const cardCloneImage = cardClone.querySelector('.element__photo');
  cardCloneImage.setAttribute('src', imageLink.link);
  cardCloneImage.setAttribute('alt', title.alt);

  cardClone.querySelector('.element__title').textContent = title.name;

  return cardClone;
}

function formSubmitAddCardHandler(evt) {

  evt.preventDefault();

  const placeName = placeNameInput.value;
  const placeImg = placeImgInput.value;
  const data = {
    name: placeName,
    link: placeImg,
    alt: placeName
  };
	cardsContainer.prepend(createCard(data));
  placeEditClose();
	addCardForm.reset();

} 

/*for (const title, imageLink of initialCards) {
	cardsContainer.appendChild(createCard(title, imageLink));
}


/*
//попап добавления карточек
const addPopup = document.querySelector('.add-popup');
const addButton = document.querySelector('.profile__add-button');
const addCloseButton = document.querySelector('.add__close-button');

function addPopupOpen() {
  addPopup.classList.add('add-popup_show')
}

function addpopupClose() {
  addPopup.classList.remove('add-popup_show');
}

addButton.addEventListener('click', addPopupOpen);
addCloseButton.addEventListener('click', addpopupClose);

//реализация добавления карточек
const templateForCard = document.getElementById('#element__template')

function createCard(title, imageLink) {
	const cardClone = templateForCard.content.firstElementChild.cloneNode(true);
	const cardCloneImage = cardClone.querySelector('.element__photo');
	cardCloneImage.setAttribute('src', imageLink.link);
	cardCloneImage.setAttribute('alt', title.alt);

	cardCloneImage.addEventListener('click', onClickByImg);

	cardClone.querySelector('.card__capture').textContent = title.name;

	cardClone.querySelector('.card__like-button').addEventListener('click', (evt) => {
		evt.target.classList.toggle('card__like-button_active');
	});

	cardClone.querySelector('.card__delete-button').addEventListener('click', (evt) => {
		evt.target.closest('.card').remove();
	});


	return cardClone;
}



for (const title, imageLink of initialCards) {
	cardsContainer.appendChild(createCard(title, imageLink));
}



function formSubmitAddCardHandler(evt) {

  evt.preventDefault();

  const placeName = placeNameInput.value;
  const placeImg = placeImgInput.value;
  const data = {
    name: placeName,
    link: placeImg,
    alt: placeName
  };
	cardsContainer.prepend(createCard(data));
  closePopup(popupAddCard);
	addCardForm.reset();

} */
