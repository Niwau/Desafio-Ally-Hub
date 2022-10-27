import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { City, Country, FormData } from '../../../types/form'

export function useFormLogic() {
  const [country, setCountry] = useState<Country[]>([] as Country[])
  const [city, setCity] = useState<City[]>([] as City[])

  const { handleSubmit, register, control, getValues } = useForm<FormData>({})

  useEffect(() => {
    fetch("https://amazon-api.sellead.com/country")
    .then(res => res.json())
    .then(json => setCountry(json))

    fetch("https://amazon-api.sellead.com/city")
    .then(res => res.json())
    .then(json => setCity(json))

  }, [])

  const countryOptions = country.map(country => (
    {value: country.name_ptbr, label: country.name_ptbr}
  ))

  const cityOptions = city.map(city => (
    {value: city.name_ptbr, label: city.name_ptbr}
  ))

  const onFormSubmit : SubmitHandler<FormData>  = (data) => {
    console.log(data)
    alert("Formulário enviado!");
  }

  return { handleSubmit, register, onFormSubmit, countryOptions, control, cityOptions, getValues }

}