import { defineStore } from 'pinia'
// const jwt = require('jsonwebtoken')

const app = require('axios')

export const useStore = defineStore('store', {
  state : () => {
    return {
      baseUrl : "http://94.74.86.174:8080/api",
      token : "",
      data : [],

      // Login data
      loginUsername : "",
      loginPass : "",

      // Register data
      regEmail : "",
      regUsername : "",
      regPass : ""
    }
  },
  actions : {
    login() {
      app.post(`${this.baseUrl}/login`, {
        username : this.loginUsername,
        password : this.loginPass
      })
      .then((res) => {
        this.token = res.data.data.token
        console.log(res.data.data.token);
        res.redirect('/')
      })
      .catch((err) => {
        if(err.response.status === 401) {
          alert("wrong username or password")
        }
      })
    },
    register() {
      app.post(`${this.baseUrl}/register`, {
        email : this.regEmail,
        username : this.regUsername,
        password : this.regPass
      })
      .then((res) => {
        alert(res.message)
      })
    }
  }
})