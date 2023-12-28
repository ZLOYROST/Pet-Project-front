 <script setup>
// import MainPage from './components/MainPage.vue' 
import PageHeader from './components/PageHeader.vue';
import { onMounted } from 'vue'
import { useStore } from 'vuex'


const store = useStore()

onMounted(() => {
  store.dispatch('getCSRF')
})



</script>

<template>
  <div id="ap">
    <v-app> 
      <PageHeader />
      <router-view />
      
    
      <div class="footer">
        Footer
      </div>
    </v-app>
  </div>
</template>

<style>
.Header{ 
    height: 50px;
    width: 1535px;
    background-color: #25B33f; 
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
  justify-content: flex-start;
}

  .footer {
   background-color:#25B33f;
   position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  
  padding: 10px;
  text-align: center;
}

.button {
  
  margin-right: auto;
}

</style>
