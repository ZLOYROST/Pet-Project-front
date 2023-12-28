<script setup>
import { useStore } from 'vuex'
import { reactive, ref } from 'vue'
const store = useStore()

const fileData = ref()
const postData = reactive({ title: '', text: '', file: ''})

// createPost ({commit}, formdata) {
//   //     axios.post('http://127.0.0.1:8000/api/create-post', formdata, {
//   //       headers: {
//   //           "accept": "text/html",
//   //           "Content-Type": "text/html; charset=UTF-8",
            
//   //       }
//   //     }) 
//   //     .then(response => {
//   //       console.log(formdata,'11111111111')
//   //       // store.commit('newsPeople', response.data.data)
//   //       console.log(response.formdata,'111')
//   //     })

function createPost() {
  console.log('1233444')
  let formData = new FormData();
  formData.append('title', postData.title)
  formData.append('text', postData.text)
  formData.append('file', fileData.value)
  formData.append('tags', ['kek'])
  store.dispatch('createPost', formData )
  
  }
 
  // let xhr = new XMLHttpRequest();
  // xhr.open('POST', 'http://127.0.0.1:8000/api/create-post', true);
  // xhr.setRequestHeader('Content-Type', 'text/html',);
  // xhr.onreadystatechange = function() {
  //   if (xhr.readyState === 4 && xhr.status === 200) {
  //     console.log(xhr.responseText);
  //   }
  // };

  // xhr.send(formData);
  // console.log(xhr,'32145')

</script>

<template>
  <!-- <div class="Main"> -->
  <v-container class="Main">
    <v-row>
      <!-- <h4> В это поле вы можете написать свой заголовок</h4> -->
      <v-text-field
        v-model="postData.title"
        clearable
        label="Заголовок новости"
        variant="outlined"
      />
    </v-row>
    <v-row>
      <!-- <h4> В это поле вы можете написать пост</h4> -->
      <v-textarea
        v-model="postData.text"
        label="Текст новости"
        variant="outlined"
      />
    </v-row>
    <v-row>
      <v-col>
        <v-file-input
        v-model="fileData"
          density="comfortable"
          show-size
          accept="image/*"
          counter
          prepend-icon="mdi-paperclip"
          label="File input"
        />
      </v-col>
      <v-col>
        <!-- <button 
          class="btnDownloadPicture"
          @click="uploadFile"
        >
          
          Загрузить файл
        </button> -->
      </v-col>
    </v-row>
  </v-container>
  <div class="BtnCreatePost">
    <v-btn
      variant="outlined"
      @click="createPost"
    >
      Создать пост
    </v-btn>
  </div>
</template>

<style scoped>

/* .Main{
  max-width: 520px;
  padding-left: 1rem;
  padding-top: 5rem;
} */

.btnDownloadPicture {
  border: 1px solid #000;

}

.uploadBtn {
  border-radius: 5px; 
  padding: 8px;
}

.Main {
  margin-left: 15px;
    margin-top: 50px;
}

.BtnCreatePost{ 
  margin-left: 20px;
}

.v-input__prepend {
  margin-left: -50px;
}
</style>

