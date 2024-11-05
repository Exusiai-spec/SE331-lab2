<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/types'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'
const store = useMessageStore()
const { message } = storeToRefs(store)
const props = defineProps<{
  event: Event
}>()
const { event } = toRefs(props)

</script>
<template>
    <div id="flashMessage" v-if="message">
        <h4>{{ message }}</h4>
      </div>  
<p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
<p>{{ event.description }}</p>

</template>

<style>
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