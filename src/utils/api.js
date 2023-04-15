const freshToken = () => {
  return { headers: {
    "Content-Type": "application/json",
    Authorization:
      localStorage.getItem('token'),
  }}
};

const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, headers, freshToken }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
    this._freshToken = freshToken;
  }

  getPostsList(page) {
    return fetch(`${this._baseUrl}/posts/paginate?page=${page}&limit=12`, {
      headers: {...this._headers, ...this._freshToken()},
    }).then(onResponse);
  }

  getUserInfo() {
    console.log('headers>>>', this._headers)
    return fetch(`${this._baseUrl}/users/me`, {
      ...this._freshToken(),
    }).then(onResponse);
  }

  getPostById(idPost) {
    return fetch(`${this._baseUrl}/posts/${idPost}`, {
      headers: this._headers,
    }).then(onResponse);
  }

  getSlide() {
    return fetch(`${this._baseUrl}/posts`, {
      headers: {...this._headers, ...this._freshToken},
    }).then(onResponse);
  }

  setUserInfo(dataUser) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(dataUser),
    }).then(onResponse);
  }

  registerUser(dataUser) {
    return fetch(`${this._baseUrl}/signup`, {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify(dataUser),
    }).then(onResponse)
}

  login(dataUser) {
  return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(dataUser),
  }).then(onResponse)
}

  changeLikePost(postId, isLike) {
    return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: this._headers,
    }).then(onResponse);
  }

  addNewPost(data) {
    return fetch(`${this._baseUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: this._headers,
    }).then(onResponse);
  }

  deletePost(postId) {
    return fetch(`${this._baseUrl}/posts/${postId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(onResponse);
  }

}

const config = {
  baseUrl: "https://api.react-learning.ru",
   headers: {
    "Content-Type": "application/json",
    Authorization:
      localStorage.getItem('token'),
    // Authorization:
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2VjYWI5YzU5Yjk4YjAzOGY3N2I2MzMiLCJncm91cCI6IkROIiwiaWF0IjoxNjc2NDU1MTUzLCJleHAiOjE3MDc5OTExNTN9.pu4CMYxcJ-4Fw9IpvBe2bLGIS8I5phf6C_BkbVmhrNk",
  },
  freshToken: freshToken,
};

const api = new Api(config);

export default api;
