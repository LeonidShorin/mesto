export default class Api {
  constructor({serverUrl, headers}) {
    this._url = serverUrl;
    this._headers = headers;
  }

  _parseResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Произошла ошибка со статус-кодом ${res.status}`));
  }

  getUserInfo() {
    return fetch(this._url + '/users/me',{
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: this._headers,
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }

  editProfile({name, description}) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: description
      })
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }

  updateAvatar(link) {
    return fetch(this._url + '/users/me/avatar', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }

  addCard({name, link}) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }

  deleteCard(cardId) {
    return fetch(this._url + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }

  addLike(cardId) {
    return fetch(this._url + '/cards/' + cardId + '/likes/', {
      method: 'PUT',
      headers: this._headers,
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }

  removeLike(cardId) {
    return fetch(this._url + '/cards/' + cardId + '/likes/', {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => this._parseResponse(res))
    .catch(err => Promise.reject(err));
  }
}