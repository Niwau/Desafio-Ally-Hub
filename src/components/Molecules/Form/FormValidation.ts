import * as yup from 'yup'

const requiredMessage = "Por favor, preencha este campo."

export const FormValidation = yup.object().shape({
  name: yup.string().required(requiredMessage).max(45, "Você só pode inserir até 45 caracteres."),
  email: yup.string().email("Por favor, insira um email válido.").required(requiredMessage),
  phone: yup.number().required().typeError(requiredMessage),
  cpf: yup.number().required().typeError(requiredMessage),
  countries: yup.array().required(requiredMessage),
  cities: yup.array().required(requiredMessage)
})
