<script setup>
import {useStore} from 'vuex'
import { onMounted } from 'vue'

const store = useStore()




onMounted(() => {
  
  store.dispatch('getPosts')
})

</script>

<template>
  <div class="feed">
    <div
      v-for="post in store.state.news"
      :key="post.id"
    >
      <div class="post">
        <div class="post-header">
          <div class="post-info">
            <h3 class="post-author">
              {{ post.title }}
            </h3>
          </div>
        </div>
        <div class="post-content">
          <p class="postText">
            {{ post.text }}
          </p>
        </div>
        <div class="picture">
          <!-- <img :src="'http://127.0.0.1:8000/storage/images/' + post" class="pic"> -->
          <img
            :src="'http://127.0.0.1:8000/storage/' + post.image"
            class="pic"
          >
          <!-- <img :src='http://127.0.0.1:8000/storage/`${post.image}`'> -->
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.feed {
    margin-top: 20px;
}

.post {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 20px;
    width: 130% 
}

.post-header {
    justify-content: center;
    display: flex;
}

.post-info {
    margin-left: 10px;
    text-align: center;
}

.post-content {
    margin-top: 10px;
}

.picture {
  display: flex;
  justify-content: center;
}

.postText {
  display: flex;
    justify-content: center;
}

.pic {
  width: 350px;
  height: 350px;
}
</style>
