import * as S from './Form.styles'
import Select from 'react-select'
import { useFormLogic } from './useFormLogic'
import { Controller } from 'react-hook-form'

export const Form = () => {

  const { 
    handleSubmit, 
    register, 
    onFormSubmit,
    setValue,
    control
  } = useFormLogic()

  return (
    <S.Form onSubmit={handleSubmit(onFormSubmit)}>
      <S.Blockquote>
        <S.Title>Dados Pessoais</S.Title>
        <S.Paragraph>Por favor, insira seus dados pessoais preenchendo os campo abaixos.</S.Paragraph>
      </S.Blockquote>
      <hr />

      <S.Blockquote>
        <S.Label htmlFor="name">Nome<span>*</span></S.Label>
        <S.Input id="name" {...register("name")}/>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="email">Email<span>*</span></S.Label>
        <S.Input id="email"  {...register("email")}/>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="phone">Telefone<span>*</span></S.Label>
        <S.Input id="phone"  {...register("phone")}/>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="cpf">CPF<span>*</span></S.Label>
        <S.Input id="cpf"  {...register("cpf")}/>
      </S.Blockquote>

      <hr />
      <S.Blockquote>
        <S.Title>Destinos de interesse</S.Title>
        <S.Paragraph>Por favor, insira os destinos de interesse preenchendo os campo abaixos. Você pode selecionar múltiplas opções.</S.Paragraph>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="country">País<span>*</span></S.Label>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="city">Cidade<span>*</span></S.Label>
      </S.Blockquote>

      <S.Button>Enviar</S.Button>
    </S.Form>
  )
}