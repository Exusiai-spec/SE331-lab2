<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'


const store = useMessageStore()
const { message } = storeToRefs(store)

</script>

<template>
  <SpeedInsights />
<div class="text-center font-sans text-gray-700 antialias">
 <header>
    <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <h1>Deploy with Vercel</h1>
  <div class="wrapper">
  <nav class="py-6">
<RouterLink
 class="font-bold text-gray-700"
 exact-active-class="text-green-500"
 :to="{ name: 'event-list-view' }"
 >Event</RouterLink
 >| 
 <RouterLink
 class="font-bold text-gray-700"
 exact-active-class="text-green-500"
 :to="{ name: 'add-event' }"
 >New Event</RouterLink
 >|
 <RouterLink
 class="font-bold text-gray-700"
 exact-active-class="text-green-500"
 :to="{ name: 'add-organizer' }"
 >New Organizer</RouterLink
 >|
<RouterLink
 class="font-bold text-gray-700" 
 exact-active-class="text-green-500" 
 :to="{name: 'organizer-list-view'}"
 > Organizers </RouterLink>| 
<!-- <RouterLink class="font-bold text-gray-700" exact-active-class="text-green-500" :to="{name: 'about'}"> categories and organizer name </RouterLink>| -->
<RouterLink 
class="font-bold text-gray-700" 
exact-active-class="text-green-500" 
:to="{name:'student-information'}"
> Student </RouterLink>|
 </nav>
 </div>
</header>

 <RouterView />
</div>

</template>

<style>

/* 
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

nav a.router-link-exact-active{
  color: #42b983;
} */

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
