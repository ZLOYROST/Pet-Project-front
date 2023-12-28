import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    state () {
      return {
        news: [],
        
      }
    },

    mutations: {
      saveNews (state, payload) {
        state.news = payload
      },

    },
//  (state, payload) {
//   state.newsPeople = payload
// },
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
           
        console.log(params,'gyi')
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
    
  //   createPost ({commit}, formdata) {
  //     axios.post('http://127.0.0.1:8000/api/create-post', formdata, {
  //       headers: {
  //           "accept": "text/html",
  //           // "Content-Type": "text/html; charset=UTF-8",
  //           "Content-Type": "application/x-www-form-urlencoded"
            
  //       }
  //     }) 
  //     .then(response => {
  //       console.log(formdata,'11111111111')
  //       // store.commit('newsPeople', response.data.data)
  //       console.log(response.formdata,'111')
  //     })
  //       .catch(error => {
  //         console.log(error,'3333333')
  //       });
  // },
   
  createPost({ commit }, formdata) {
    fetch('http://127.0.0.1:8000/api/create-post', {
      method: 'POST',
      body: formdata,
      headers: {
        'Accept': 'application/json',
        // 'Content-Type': 'text/html; charset=UTF-8',
        'Content-Type': 'text/html; charset=UTF-8'
      }
    })
    .then(data => {
      console.log(data, '111');
      // store.commit('newsPeople', data.data);
    })
    .catch(data => {
      console.log(data, '3333333');
    });
  },

    }
  })
  
//   function postData() {
//   let xhr = new XMLHttpRequest();
//   xhr.open('POST', 'http://127.0.0.1:8000/api/create-post', true);
//   xhr.setRequestHeader('Content-Type', 'text/html');
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       console.log(xhr.responseText);
//     }
//   };

//   xhr.send(formData);
//   console.log(xhr)
// }


  // -------------------------------------------

  //   createPost ({commit}, formdata) {
  //     axios.post('http://127.0.0.1:8000/api/create-post', formdata, {
  //       headers: {
  //           "accept": "text/html",
  //           // "Content-Type": "text/html; charset=UTF-8",
  //           "Content-Type": "application/x-www-form-urlencoded"
            
  //       }
  //     }) 
  //     .then(response => {
  //       console.log(formdata,'11111111111')
  //       // store.commit('newsPeople', response.data.data)
  //       console.log(response.formdata,'111')
  //     })
  //       .catch(error => {
  //         console.log(error,'3333333')
  //       });
  // },