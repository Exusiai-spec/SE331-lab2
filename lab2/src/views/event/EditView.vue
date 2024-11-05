<script setup lang="ts">
import { toRefs } from 'vue'
import { type Event } from '@/types'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'

const props = defineProps<{
  event: Event
  id: string
}>()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const editer = () => {
  // If the registration API call successful
  // Push back to the event details view
  store.updateMessage('You are successuflly edited for ' + props.event.title)
setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })

}

</script>
<template>
  <div v-if="event">
  <p>Edit event here</p>
  <button @click="editer">editer</button>
  </div>
</template>
