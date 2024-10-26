<script setup lang="ts">
import HomeCard from '@/components/HomeCard.vue';
import type { Event } from '@/type'
import { ref,onMounted } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[]>([])
onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})


</script>

<template>
  <div class="about">
    <h1>Only categories and organizer name</h1>
    <div class="events">
  <HomeCard v-for="event in events" :key="event.id" :event="event" />
</div>
  </div>
</template>

<style>

.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>
