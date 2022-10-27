import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().required("Por favor, preencha este campo.").max(32),
  email: yup.string().email().required("Por favor, preencha este campo."),
  phone: yup.string().required("Por favor, preencha este campo."),
  cpf: yup.string().required("Por favor, preencha este campo."),
  countries: yup.array().required("Por favor, preencha este campo."),
  cities: yup.array().required("Por favor, preencha este campo.")
})
