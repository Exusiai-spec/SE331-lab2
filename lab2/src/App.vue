<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
<div id="layout">
 <header>
  <div class="wrapper">
  <nav>
    <RouterLink to="/">Event</RouterLink> 
<RouterLink to="/about">Home</RouterLink>
<RouterLink to="/student_information">Student</RouterLink>
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

</style>
