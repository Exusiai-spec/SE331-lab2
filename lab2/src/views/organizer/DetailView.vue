<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Organizer } from '@/types'

const props = defineProps<{
  organizer: Organizer
}>()
const { organizer } = toRefs(props)

</script>
<template>
     <h2>{{ organizer.name }}</h2>
     <span>id:{{ organizer.id }} address:{{ organizer.address }}</span>

</template>
