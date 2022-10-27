export interface Country {
  name_ptbr: string
  name: string
}

export interface City {
  name_ptbr: string
  name: string
}

export interface CityOptions {
  value: string
  label: string
}

export interface CountryOptions {
  value: string
  label: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  cpf: string
  countries: CountryOptions[]
  cities: CityOptions[]
}

