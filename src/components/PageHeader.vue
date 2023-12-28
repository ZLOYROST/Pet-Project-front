<script setup>
import {useStore} from 'vuex'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()



const store = useStore()
const registrationData = reactive({ userLogin: '', userEmail: '', userPassword: ''})


function registration() {
  store.dispatch('registration',registrationData)

}
function openPageCreatePost() {

  router.push('/create-post')

}


</script>

<template>
  <v-app-bar :elevation="11">
    <router-link to="/">
      Go to Home
    </router-link>
    <router-link to="/profile">
      Профиль
    </router-link>
    <router-link to="/create-post">
      Создать пост
    </router-link>
    <v-dialog width="500">
      <template #activator="{ props, post }">
        <v-btn
          v-bind="props"
          text="registration"
          class="registrationBbutton"
        />
        <v-btn
          v-bind="post"
          text="Posts"
          class="ButtonForPosts"
          @click="openPageCreatePost" 
        />
      </template>
      <template #default="{ isActive }">
        <v-card title="Регистрация">
          <v-card-text>
            <v-text-field
              v-model="registrationData.userLogin"
              label="Логин"
            />
            <v-text-field
              v-model="registrationData.userEmail"
              label="Почта"
            />
            <v-text-field 
              v-model="registrationData.userPassword"
              label="Пароль"
            />
          </v-card-text>
          <v-card-text>
            <v-btn
              text="Зарегистрироваться"
              @click="registration"
            />
            <v-btn
              text="Закрыть"
              @click="isActive.value = false"
            />
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-app-bar>
</template>


<style scoped>
.registrationBbutton {
  border: 1px solid black;
}

.ButtonForPosts {
  margin-left: 8px;
  border: 1px solid black;
}
</style>

