import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentInformation from '@/views/studentInformation.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '1') })
     },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    },
    {
      path: '/event/:id',
            name: 'event-layout-view',
            component: EventLayoutView,
            props: true,
            children: [
              {
                path: '',
                name: 'event-detail-view',
                component: EventDetailView,
                props: true
              },
              {
                path: 'register',
                name: 'event-register-view',
                component: EventRegisterView,
                props: true
              },
              {
                path: 'edit',
                name: 'event-edit-view',
                component: EventEditView,
                props: true
              }
            ]
    },
    {
      path:'/student_information',
      name:'student-information',
      component:StudentInformation
    },
  ],
})

export default router
