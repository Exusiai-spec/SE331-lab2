<script setup lang="ts">
import EventCard from '@/components/EventCard.vue';
import { type Event } from '@/types';
import { ref, onMounted, computed, watchEffect } from 'vue';
import nProgress from 'nprogress'
import { useRouter } from 'vue-router';
import EventService from '@/services/EventService';

// const route = useRoute();
const router = useRouter();

const events = ref<Event[] | null>(null);
const totalEvents = ref(0);
const pageSize = ref(2); // 默认每页显示的事件数量

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
});

const page = computed(() => props.page);

const hasNexPage = computed(() => {
  // const totalPages = Math.ceil(totalEvents.value / pageSize.value);
  const totalPages = Math.ceil(totalEvents.value / 3)
  return page.value < totalPages;
});

const fetchData = async () => {
  try {
    const response = await EventService.getEvents(pageSize.value, page.value);
    events.value = response.data;
    totalEvents.value = parseInt(response.headers['x-total-count']);
  } catch (error) {
    console.error('There was an error!', error);
  }
};

onMounted(fetchData);

// watch([pageSize, page], () => {
//   fetchData();
//   updateQueryParams();
// });
watchEffect(() => {
   events.value = null
   nProgress.start()
   EventService.getEvents(3, page.value)
      .then((response) => {
        events.value = response.data
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })

  })

const updateQueryParams = () => {
  router.push({
    name: 'event-list-view',
    query: {
      page: page.value,
      pageSize: pageSize.value,
    },
  });
};
</script>

<template>
  <h1>Events For Good</h1>
  <div class="flex flex-col items-center">
    <select v-model="pageSize">
      <option value="2">2 per page</option>
      <option value="5">5 per page</option>
      <option value="10">10 per page</option>
    </select>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: pageSize } }"
        rel="prev"
        v-if="page !== 1"
        >&#60; Prev Page</RouterLink
      >
      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: pageSize } }"
        rel="next"
        v-if="hasNexPage"
        >Next Page &#62;</RouterLink
      >
    </div>
  </div>
</template>

<style scoped>

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>