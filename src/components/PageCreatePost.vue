<script setup>
import { useStore } from 'vuex'
import { reactive, ref } from 'vue'
const store = useStore()


const fileData = ref()
const postData = reactive({ title: '', text: '', file: ''})


function createPost() {
  console.log('1233444')
  let formData = new FormData();
  formData.append('title', postData.title)
  formData.append('text', postData.text)
  formData.append('file', fileData.value)
  
  store.dispatch('createPost', formData )
  
  }
 

</script>

<template>
  <v-container class="Main">
    <v-row>
      <v-text-field
        v-model="postData.title"
        clearable
        label="Заголовок новости"
        variant="outlined"
      />
    </v-row>
    <v-row>
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
      <v-col />
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

