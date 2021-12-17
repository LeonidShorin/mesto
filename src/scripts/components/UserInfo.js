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
    this._userName.textContent = userData.name;
    this._userDescription.textContent = userData.about;
    this._id = userData._id;
    this._userAvatar.src = userData.avatar;
  }

  getId() {
    return this._id;
  }
}