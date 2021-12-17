// Импорт
import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import PopupWithConfirmation from '../scripts/components/PopupWithConfirmation.js';
import Api from '../scripts/components/Api.js';
import {
  profilePopup,
  nameInput,
  jobInput,
  editButton,
  profileName,
  profileDescription,
  newPlaceButton,
  cardsContainer,
  cardPopup,
  cardElementTemplate,
  imagePopup,
  validObj,
  avatarPopup,
  updateAvatarButton,
  avatarPictureSelector,
  confirmationPopup,
} from '../scripts/utils/constants.js';
import './index.css';

/** Экземпляры классов **/

// Экземпляр класса Api
const api = new Api ({
  serverUrl: 'https://mesto.nomoreparties.co/v1/cohort-31',
  headers: {
    authorization: 'c5326610-ed33-45d9-9066-edfd682961dc',
    'Content-Type': 'application/json'
  }
});

// экземляр класса UserInfo
const userInfo = new UserInfo(profileName, profileDescription, avatarPictureSelector);

// экземпляр PopupWithForm для профиля
const redactProfile = new PopupWithForm({
  popupSelector: profilePopup, handleFormSubmit: (formData) => {
    api.editProfile(formData)
    .then((res) => {
      userInfo.setUserInfo(res);
      redactProfile.close();
    })
    .catch(err => {
      alert(err);
    })
    .finally(() => {
      redactProfile.renderLoading(false);
    });  
  }
});

// экземпляр PopupWithImage
const imgPopup = new PopupWithImage(imagePopup);

// экземпляр поп-апа подтверждение
const confirmDelPopup = new PopupWithConfirmation(confirmationPopup, (cardId) => {
  api.deleteCard(cardId)
  .then(() => {
    document.getElementById(cardId).remove();
    confirmDelPopup.close();
  })
  .catch(err => {
    alert(err);
  })
  .finally(() => {
    confirmDelPopup.renderLoading(false);
  });
});

const updateAvatarPopup = new PopupWithForm ({
  popupSelector: avatarPopup, handleFormSubmit: (formData) => {
    api.updateAvatar(formData.link)
    .then((res) => {
      userInfo.setUserInfo(res);
      updateAvatarPopup.close();
    })
    .catch(err=>{
      alert(err);
    })
    .finally(()=>{
      updateAvatarPopup.renderLoading(false);
    });
  }
});

// экземпляр класса Card
const createNewCard = (item) => {
  const card = new Card(item.name,
    item.link,
    item.likes,
    item.owner._id,
    item._id,
    cardElementTemplate,
    userInfo.getId(),
    () => {
      imgPopup.open(item);
    }, () => {
      confirmDelPopup.open(item._id);
    }, (liked) => {
      if (liked) {
        api.addLike(item._id)
          .then(res => {
            card.refreshLikesNum(res.likes.length);
          })
          .catch(err  =>  {
            alert(err);
          });
      } else {
        api.removeLike(item._id)
          .then(res => {
            card.refreshLikesNum(res.likes.length);
          })
          .catch(err => {
            alert(err);
          });
      }
    });
  return card.createCard();
};

// Загрузка данных с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(res => {
    const userData = res[0];
    const cardsData = res[1];
    userInfo.setUserInfo(userData);

  // экземпляр класса Section
  const cardList = new Section(cardsData, (data) => {
    cardList.addItem(createNewCard(data));
  }, cardsContainer);
  cardList.renderItems();

// экземпляр PopupWithForm для добавления карточек
const addNewCard = new PopupWithForm({
  popupSelector: cardPopup, handleFormSubmit: (formData) => {
    api.addCard(formData)
    .then(res => {
      const card = createNewCard(res);
      cardList.addItem(card);
      addNewCard.close();
    })
    .catch(err => {
      alert(err);
    })
    .finally(() => {
      addNewCard.renderLoading(false);
    });
  },
});

  // слушатели поп-апов
  redactProfile.setEventListeners();
  imgPopup.setEventListeners();
  addNewCard.setEventListeners();
  updateAvatarPopup.setEventListeners();
  confirmDelPopup.setEventListeners();

  /** Валидация **/

  const validators = {};
  const enableValidation = (set) => {
    const formList = Array.from(document.querySelectorAll(set.formSelector));
    formList.forEach((formElement) => {
      const validation = new FormValidator(set, formElement);
      validators[formElement.id] = validation;
      validation.enableValidation()
    });
  }
  enableValidation(validObj);

  // слушатель для профиля
  editButton.addEventListener('click', () => {
    const defaultUserInfo = userInfo.getUserInfo();
    nameInput.value = defaultUserInfo.name;
    jobInput.value = defaultUserInfo.about;
    validators['popup-form-profile'].clearValidation();
    redactProfile.open();
  });

  updateAvatarButton.addEventListener('click', () => {
    validators['popup-form-avatar'].clearValidation();
    updateAvatarPopup.open();
  });

  // слушатель добавления карточек
  newPlaceButton.addEventListener('click', () => {
    validators['popup-form-card'].clearValidation();
    addNewCard.open();
  });
})
.catch(err => {
  alert(err);
});