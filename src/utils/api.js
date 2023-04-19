const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

// const onResponse =  (res) => {
//   const errMessage = res.json().then((value)=> {
//   console.log("Сообщение об ошибке---->>>", value.message);
//     //  return value.message;
//     })
//    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
// };

class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  getPostsList(page, token) {
    return fetch(`${this._baseUrl}/posts/paginate?page=${page}&limit=12`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(onResponse);
  }

  getUserInfo(token) {
    console.log('headers>>>', this._headers)
    return fetch(`${this._baseUrl}/users/me`, {headers: {
      "Content-Type": "application/json",
          Authorization: token,
      },}).then(onResponse);
  }

  getPostById(idPost, token) {
    console.log('headersId>>>', this._headers)
    return fetch(`${this._baseUrl}/posts/${idPost}`, {
      headers: {
        "Content-Type": "application/json",
            Authorization: token,
        },
    }).then(onResponse);
  }

  getSlide(token) {
    return fetch(`${this._baseUrl}/posts`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }).then(onResponse);
  }

  setUserInfo(dataUser, token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
            Authorization: token,
        },
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
// сброс пароля пользователя и отправка ему на почту
resetPass(data) {
  return fetch(`${this._baseUrl}/forgot-password`, {
    method: 'POST',
    headers: this._headers,
    body: JSON.stringify(data),
}).then(onResponse)
}

// смена пароля после получения токена на почту
changePass(token, password) {
  return fetch(`${this._baseUrl}/password-reset/${token}`, {
    method: 'PATCH',
    headers: this._headers,
    body: JSON.stringify(password),
}).then(onResponse)
}

  changeLikePost(postId, isLike, token) {
    console.log('headersLike>>>', this._headers)
    return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: {
        "Content-Type": "application/json",
            Authorization: token,
        },
    }).then(onResponse);
  }

  addNewPost(data, token) {
    return fetch(`${this._baseUrl}/posts`, { 
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
            Authorization: token,
        },
    }).then(onResponse);
  }

  deletePost(postId) {
    const token = localStorage.getItem('token');
    return fetch(`${this._baseUrl}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
            Authorization: token,
        },
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
};

const api = new Api(config);

export default api;
