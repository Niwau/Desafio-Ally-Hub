import * as yup from 'yup'

const requiredMessage = "Por favor, preencha este campo."

const phoneRegex = new RegExp("^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$");
const cpfRegex = new RegExp("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")

export const FormValidation = yup.object().shape({
  name: yup.string().required(requiredMessage).max(45, "Você só pode inserir até 45 caracteres."),
  email: yup.string().email("Por favor, insira um email válido.").required(requiredMessage),
  phone: yup.string().required(requiredMessage).matches(phoneRegex, "Insira um número de telefone válido no formato especificado."),
  cpf: yup.string().required(requiredMessage).matches(cpfRegex, "Insira um CPF válido."),
  countries: yup.array().required(requiredMessage),
  cities: yup.array().required(requiredMessage)
})
