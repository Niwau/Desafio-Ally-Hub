export interface CountryProps {
  name_ptbr: string
}

export interface CityProps {
  name_ptbr: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  cpf: string
  countries: CityOptions[]
  cities: CityOptions[]
}

export interface CityOptions {
  value: string
  label: string
}