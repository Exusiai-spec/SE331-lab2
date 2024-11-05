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
      name: string
      gpa: number
      surname: string
      categories: string

    }

