import type { Organizer } from '@/types'
import axios from 'axios'

const apiClient = axios.create({
  // baseURL: ('https://my-json-server.typicode.com/Exusiai-spec/SE331-lab2-backend/'),
  // baseURL: ('http://localhost:8080/'),
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getOrganizers(perPage: number, page: number) {
    return apiClient.get('/organizers?_limit=' + perPage + '&_page=' + page)
  },
  getOrganizer(id: number) {
    return apiClient.get('/organizers/'+id)
  },
  saveOrganizer(organizer: Organizer) {
    return apiClient.post('/organnizers', organizer)
}
}
