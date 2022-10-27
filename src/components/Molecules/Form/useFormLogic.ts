import { formSchema } from './formSchema';
import { yupResolver } from './../../../../node_modules/@hookform/resolvers/yup/src/yup';
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { City, Country, FormData } from '../../../types/form'
import { getOptions } from '../../../utils/getOptions';

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

  const countryOptions = getOptions(countries)
  const cityOptions = getOptions(cities)

  const onFormSubmit : SubmitHandler<FormData>  = (data) => {
    console.log(data)
    alert("Formulário enviado! Abra o console do navegador para como as informações serão enviadas.");
  }

  return { handleSubmit, register, onFormSubmit, countryOptions, control, cityOptions, errors }

}