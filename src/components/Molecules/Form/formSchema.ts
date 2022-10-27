import * as yup from 'yup'

export const formSchema = yup.object().shape({
  name: yup.string().required("Por favor, preencha este campo.").max(45, "Você só pode inserir até 45 caracteres."),
  email: yup.string().email("Por favor, insira um email válido.").required("Por favor, preencha este campo."),
  phone: yup.number().required("Por favor, preencha este campo."),
  cpf: yup.number().required("Por favor, preencha este campo."),
  countries: yup.array().required("Por favor, preencha este campo."),
  cities: yup.array().required("Por favor, preencha este campo.")
})
