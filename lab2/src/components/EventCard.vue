<script setup lang="ts">
import { type Event } from '@/types'
// import { Event } from "@/type"
defineProps<{
  event:Event
}>()
// const event = ref({
  // id: 5928101,
  // category: 'animal welfare',
  // title: 'Cat Adoption Day',
  // description: 'Find your new feline friend at this event.',
  // location: 'Meow Town',
  // date: 'January 28, 2022',
  // time: '12:00',
  // petsAllowed: true,
  // organizer: 'Kat Laydee'
// })

</script>

<template>
<RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
  <div class="event-container">
    <div
     class="cursor-pointer border border-gray-600 p-[20px] w-[250px] mb-[18px]
     hover:scale-101 hover:shadow-sp">
     <h2>{{ event.title }}</h2>
     <span>{{ event.category }} @ {{ event.location }}</span>
   </div>
   <div class="event-card1">
    <h2>{{ event.category }}</h2>
    <h3>{{ event.organizer }}</h3>
   </div>
  </div>
</RouterLink>

</template>

<style scoped>
.event-container {
  display: flex;
  justify-content: space-between; /* 水平分布 */
  gap: 20px; /* 两个卡片之间的间距 */
}
.event-card, .event-card1 {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

/* .event-card:hover, .event-card1:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
} */

.event-link {
  text-decoration: none;
  color: #2c3e50;
}
.event-card1 h2 {
  text-align: right;
}

.event-card1 h3 {
  text-align: right;
}
</style>

