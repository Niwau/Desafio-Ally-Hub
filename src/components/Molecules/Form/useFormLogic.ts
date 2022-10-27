import { formSchema } from './formSchema';
import { yupResolver } from './../../../../node_modules/@hookform/resolvers/yup/src/yup';
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { City, Country, FormData } from '../../../types/form'

export function useFormLogic() {
  const { handleSubmit, register, control, formState: {errors} } = useForm<FormData>({ resolver: yupResolver(formSchema)})

  const [countries, setCountries] = useState<Country[]>([] as Country[])
  const [cities, setCities] = useState<City[]>([] as City[])

  useEffect(() => {
    fetch("https://amazon-api.sellead.com/country")
    .then(res => res.json())
    .then(json => setCountries(json))

    fetch("https://amazon-api.sellead.com/city")
    .then(res => res.json())
    .then(json => setCities(json))

  }, [])

  const countryOptions = countries.map(country => (
    { value: country.name_ptbr, label: country.name_ptbr }
  ))

  const cityOptions = cities.map(cities => (
    { value: cities.name_ptbr, label: cities.name_ptbr }
  ))
  
  const onFormSubmit : SubmitHandler<FormData>  = (data) => {
    console.log(data)
    alert("Formulário enviado!");
  }

  return { handleSubmit, register, onFormSubmit, countryOptions, control, cityOptions, errors }

}