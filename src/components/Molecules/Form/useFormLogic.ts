import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { CityProps, CountryProps, FormData } from '../../../types/form'

export function useFormLogic() {
  const [country, setCountry] = useState<CountryProps[]>([] as CountryProps[])
  const [city, setCity] = useState<CityProps[]>([] as CityProps[])

  const { 
    handleSubmit, 
    formState : {errors}, 
    register, 
    setValue,
    control
  } = useForm<FormData>({})

  useEffect(() => {
    fetch("https://amazon-api.sellead.com/country")
    .then(res => res.json())
    .then(json => setCountry(json))

    fetch("https://amazon-api.sellead.com/city")
    .then(res => res.json())
    .then(json => setCity(json))

  }, [])

  const onFormSubmit : SubmitHandler<FormData>  = (data) => {
    console.log(data)
    alert("Formulário enviado!");
  }

  return {
    handleSubmit,
    register,
    onFormSubmit,
    setValue,
    control
  }

}