import { MultiValueProps } from './../../node_modules/react-select/dist/declarations/src/components/MultiValue.d';
export interface CountryProps {
  name_ptbr: string
}

export interface CityProps {
  name_ptbr: string
}

interface MultiSelect {
  value: string
  label: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  cpf: string
}

export interface CityOptions {
  value: string
  label: string
}