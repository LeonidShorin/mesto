export default class UserInfo {
  constructor(profileName, profileDescription) {
    this._userName = document.querySelector(profileName);
    this._userDescription = document.querySelector(profileDescription);
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