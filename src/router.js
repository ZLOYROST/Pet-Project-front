import MainPage from './components/MainPage.vue' 
import ProfilePage from './components/ProfilePage.vue' 
import PageCreatePost from './components/PageCreatePost.vue'

export const routes = [
    { path: '/', component: MainPage },
    { path: '/profile', component: ProfilePage },
    { path: '/create-post', component: PageCreatePost}
  ]
