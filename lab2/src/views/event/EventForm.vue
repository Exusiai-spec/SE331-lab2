<script setup lang="ts">
import type { EventItem } from '@/types'
import { ref } from 'vue'
const event = ref<EventItem>({
 id: 0,
 category: '',
 title: '',
 description: '',
 location: '',
 date: '',
 time: '',
 organizer: '',
})
</script>
<template>
 <div>
 <h1>Create an event</h1>
 <form>
 <label>Category</label>
 <input
 v-model="event.category"
 type="text"
 placeholder="Category"
 class="field"
 />
 <h3>Name & describe your event</h3>

 <label>Title</label>
 <input
 v-model="event.title"
 type="text"
 placeholder="Title"
 class="field"
 />

 <label>Description</label>
 <input
 v-model="event.description"
 type="text"
 placeholder="Description"
 class="field"
 />

 <h3>Where is your event?</h3>

 <label>Location</label>
 <input
 v-model="event.location"
 type="text"
 placeholder="Location"
 class="field"
 />
 <button type="submit">Submit</button>
 </form>

 <pre>{{ event }}</pre>
 </div>
</template>