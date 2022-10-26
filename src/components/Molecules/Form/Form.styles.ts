import styled from 'styled-components';

export const Form = styled.form`

  margin: 2rem auto;

  display: flex;
  gap: 1.6rem;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 3.2rem;
  border: 1px solid var(--gray-500);
  max-width: 41rem;
  border-radius: 0.5rem;
`

export const Blockquote = styled.blockquote`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const Title = styled.h1`
  color: var(--black-900);
  font-size: 1.6rem;
`

export const Paragraph = styled.p`
  color: var(--gray-700);
  font-size: 1.2rem;
`

export const Input = styled.input`
  color: var(--gray-700);
  font-family: 'Inter';
  font-weight: 600;
  padding: 1rem;
  outline: none;
  background-color: white;
  border: 1px solid var(--gray-500);
  border-radius: 0.5rem;
  transition: 0.2s;

  :focus {
    border-color: var(--primary);
    color: #000000 ;
  }

`

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 600;

  span {
    color: red;
  }
`

export const Button = styled.button`
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  padding: 1rem 2rem;
  background-color: var(--primary);
  color: #FFFFFF;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  transition: 0.2s;
`