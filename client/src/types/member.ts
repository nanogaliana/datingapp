export type Member = {
  id: string
  displayName: string
  imageUrl?: string
  dateOfBirth: string
  created: string
  lastActive: string
  gender: string
  description?: string
  city: string
  country: string
}

export type Photo = {
  id: number
  url: string
  publicId?: string
  memberId: string
}