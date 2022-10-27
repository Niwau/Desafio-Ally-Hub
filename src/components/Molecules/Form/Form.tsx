import * as S from './Form.styles'
import Select from 'react-select'
import { useFormLogic } from './useFormLogic'
import { Controller } from 'react-hook-form'

export const Form = () => {

  const { handleSubmit, register, onFormSubmit, control, countryOptions, cityOptions, errors } = useFormLogic()

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
        <S.Error>{ errors.name?.message }</S.Error>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="email">Email<span>*</span></S.Label>
        <S.Input id="email" {...register("email")}/>
        <S.Error>{ errors.email?.message }</S.Error>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="phone">Telefone<span>*</span></S.Label>
        <S.Input id="phone" {...register("phone")}/>
        <S.Error>{ errors.phone?.message }</S.Error>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="cpf">CPF<span>*</span></S.Label>
        <S.Input id="cpf" {...register("cpf")}/>
        <S.Error>{ errors.cpf?.message }</S.Error>
      </S.Blockquote>

      <hr />
      <S.Blockquote>
        <S.Title>Destinos de interesse</S.Title>
        <S.Paragraph>Por favor, insira os destinos de interesse preenchendo os campo abaixos. Você pode selecionar múltiplas opções.</S.Paragraph>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="country">País<span>*</span></S.Label>
        <Controller 
          render={({ field: {...props} }) => (
            <Select isMulti options={countryOptions} {...props} />
          )}
          name='countries' 
          control={control}
        />
        <S.Error>{ errors.countries?.message }</S.Error>
      </S.Blockquote>

      <S.Blockquote>
        <S.Label htmlFor="city">Cidade<span>*</span></S.Label>
        <Controller 
          render={({ field: {...props} }) => (
            <Select isMulti options={cityOptions} {...props} />
          )}
          name='cities' 
          control={control}
        />
        <S.Error>{ errors.cities?.message }</S.Error>
      </S.Blockquote>

      <S.Button>Enviar</S.Button>
    </S.Form>
  )
}