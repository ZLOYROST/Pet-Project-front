import { createStore } from 'vuex'
import axios from 'axios'
import { ref } from 'vue';


export const store = createStore({
    state () {
      return {
        news: [],
        isloading: false
      }
    },

    mutations: {
      saveNews (state, payload) {
        state.news = payload
      },
      changeLoading(state, payload) {
        state.isloading = payload
      },
    },

    getters: {
      Loading (state) {
        return state.isloading
      }
    },

    actions: {
        getCSRF() {
            axios.get('http://127.0.0.1:8000/sanctum/csrf-cookie')
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error,'333')
              });
        },
        
        registration ({ commit }, params) {
            axios.post('http://127.0.0.1:8000/api/registration',{
                name: params.userLogin,
                email: params.userEmail,
                password: params.userPassword,
              })
              .then(response => {
                console.log(response)
              })
              .catch(error => {
                console.log(error,'222')
              });
           
      },
      getPosts() {
        axios.get('http://127.0.0.1:8000/api/get-posts')
        .then(response => {
          store.commit('saveNews', response.data.data)
          console.log(response.data.data,'111')
        })
          .catch(error => {
          });
    },
   
 createPost ({commit}, formdata) {
  store.commit('changeLoading', true)
      axios.post('http://127.0.0.1:8000/api/create-post', formdata, {
        headers: {
          'Accept': 'application/json',
          'Access-Control-Allow-Origin': '*',
      }
    })
    .then(data => {
      store.commit('changeLoading', false)
      console.log(data, '111');
    })
    .catch(data => {
      store.commit('changeLoading', false)
      console.log(data, '3333333');
    });
  },

    }
  })
  


 


  