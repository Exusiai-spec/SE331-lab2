export interface MessageState {
  message: string
}
export interface EventState {
    event: Event | null
  }
  
export interface Event {
      id: number
      category: string
      title: string
      description: string
      location: string
      date: string
      time: string
      petsAllowed: boolean
      organizer: string

    }
export interface EventItem {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  organizer: string
}
export interface Student {
  id: number
  name: string
  gpa: number
  surname: string
  categories: string
}
export interface Organizer{
  id: number
  name: string
  address: string
}
export interface OrganizerState {
  organizer: Organizer | null
}
export interface OrganizerItem{
  id: number
  name: string
  address: string
}