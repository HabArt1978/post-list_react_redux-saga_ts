export type UserDetailsState = {
  details: UserDetails[]
  loading: boolean
  userID: number | null
}

export type UserDetails = {
  id: number
  name: string
  userName: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}

export type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export type Geo = {
  lat: string
  lng: string
}

export type Company = {
  name: string
  catchPhrase: string
  bs: string
}
