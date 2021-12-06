export default class UserInfo {
  constructor(profileNameSelector, profileDescriptionSelector) {
    this._userName = document.querySelector(profileNameSelector);
    this._userDescription = document.querySelector(profileDescriptionSelector);
  }

  getUserInfo() {
    this._userInfo = {};
    this._userInfo['name'] = this._userName.textContent;
    this._userInfo['description'] = this._userDescription.textContent;
    return this._userInfo;
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
    this._userDescription.textContent = userData.description;
  }
}