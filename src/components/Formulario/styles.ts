import styled from 'styled-components'

export const Form = styled.div`
  margin: 8px;
`
export const InputDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 8px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    margin-right: 8px;
  }
  img {
    max-width: 90%;
  }
`
export const FormInput = styled.input`
  width: 100%;
  font-size: 1rem;
  padding: 8px;
  border-radius: 4px;
  outline: solid 1px #ccc;
  border: none;
  &:focus {
    outline: solid 1px black;
  }
`
export const BotaoForm = styled.button`
  display: block;
  width: 100%;
  margin-top: 8px;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  color: #29abe5;
  font-size: 1rem;
  &:hover {
    background-color: #29abe2;
    color: #fff;
  }
`
