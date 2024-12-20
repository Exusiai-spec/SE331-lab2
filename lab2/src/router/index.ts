import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentInformation from '@/views/studentInformation.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'
import EventService from '@/services/EventService'
import { useEventStore } from '@/stores/event'
import OrganizerListView from '@/views/OrganizerListView.vue'
import OrganizerService from '@/services/OrganizerService'
import OrganizerLayoutView from '@/views/organizer/DetailView.vue'
import OrganizerRegisterView from '@/views/organizer/RegisterView.vue'
import OrganizerEditView from '@/views/organizer/EditView.vue'
import OrganizerDetailView from '@/views/organizer/DetailView.vue'
import AddEventView from '@/views/EventFormVIew.vue'
import AddOrganizerView from '@/views/OrganizerFormView.vue'

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
      path: "/organizer",
      name:'organizer-list-view',
      component: OrganizerListView,
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
     path: '/add-event',
     name: 'add-event',
     component: AddEventView
    },
    {
      path: '/add-organizer',
      name: 'add-organizer',
      component: AddOrganizerView
     },
    {
      path: '/event/:id',
            name: 'event-layout-view',
            component: EventLayoutView,
            props: true,
            beforeEnter: (to) => {
              const id = parseInt(to.params.id as string)
              const eventStore = useEventStore()
              return EventService.getEvent(id)
              .then((response) => {
              // need to setup the data for the event
               eventStore.setEvent(response.data)
               })
            .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource-view',
                params: { resource: 'event' }
              }
           } else {
              return { name: 'network-error-view' }
               }
               })
              },
              
              
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
      path: '/organizer/:id',
            name: 'organizer-layout-view',
            component: OrganizerLayoutView,
            props: true,
            beforeEnter: (to) => {
              const id = parseInt(to.params.id as string)
              const eventStore = useEventStore()
              return OrganizerService.getOrganizer(id)
              .then((response) => {
              // need to setup the data for the event
               eventStore.setEvent(response.data)
               })
            .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource-view',
                params: { resource: 'event' }
              }
           } else {
              return { name: 'network-error-view' }
               }
               })
              },
              
              
            children: [
              {
                path: '',
                name: 'organizer-detail-view',
                component: OrganizerDetailView,
                props: true
              },
              {
                path: 'register',
                name: 'organizer-register-view',
                component: OrganizerRegisterView,
                props: true
              },
              {
                path: 'edit',
                name: 'organizer-edit-view',
                component: OrganizerEditView,
                props: true
              }
            ]
    },
    {
      path:'/student_information',
      name:'student-information',
      component:StudentInformation
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView
    }
    
  ],
 scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
          return savedPosition
        } else {
          return { top: 0 }
       }
    
      }
    
})
router.beforeEach(() => {
    nProgress.start()
  })
  
  router.afterEach(() => {
    nProgress.done()
  })
  
export default router
