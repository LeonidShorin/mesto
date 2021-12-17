export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector, profileAvatarSelector) {
    this._userName = document.querySelector(profileNameSelector);
    this._userDescription = document.querySelector(profileDescriptionSelector);
    this._userAvatar = document.querySelector(profileAvatarSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['name'] = this._userName.textContent;
    this._userInfo['about'] = this._userDescription.textContent;
    return this._userInfo;
  }

  setUserInfo(userData) {
    if (userData.name) {
      console.log('Аргумент Userdata.name передан');
    }
    this._userName.textContent = userData.name;
    if (userData.about) {
      console.log('Аргумент Userdata.about передан');
    }
    this._userDescription.textContent = userData.about;
    if (userData._id) {
      console.log('Аргумент Userdata._id передан');
    }
    this._id = userData._id;
    if (userData.avatar) {
      console.log('Аргумент Userdata.avatar передан');
    }
    this._userAvatar.src = userData.avatar;
  }

  getId() {
    return this._id;
  }
}