import config from '../config';

const AuthApiService ={
  postLogin(credentials){
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))  
          : res.json()
      )
  },
  postUser(user){
    //for posting new users, this isn't a protected endpoint so no need for any tokens.
    return fetch(`${config.API_ENDPOINT}/user`,{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
      },
      body:JSON.stringify(user),
    })
     .then(res =>
      (!res.ok)
       ? res.json().then(e => Promise.reject(e))
       :res.json()
     )
  },
}

export default AuthApiService;