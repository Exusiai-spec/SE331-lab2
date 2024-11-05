<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)

</script>

<template>
<div id="layout">
 <header>
    <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>

  <div class="wrapper">
  <nav>
<RouterLink to="{name: 'event-list-view'}"> Event </RouterLink>| 
<RouterLink to="{name: 'about'}"> categories and organizer name </RouterLink>|
<RouterLink to="{name:'student-information'}"> Student </RouterLink>|
 </nav>
 </div>
</header>

 <RouterView />
</div>

</template>

<style>


nav {
padding:30px;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}


#layout{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a.router-link-exact-active{
  color: #42b983;
}

h2 {
  font-size: 20px;
}

@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
#flashMessage {
  animation: yellofade 3s ease-in-out;
}

</style>
