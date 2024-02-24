import { createGlobalStyle } from 'styled-components'
import { styled } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto,sans-serif;
    list-style: none;
  }
  body{
    background-color: #ddd;
    line-height: 1.6;
    color: #333;
  }
  button{
  cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`
export const ListaEstilo = styled.div`
  min-width: 30vw;
  background-color: #fff;
  margin: 16px;
  border-radius: 6px;
  max-width: 400px;
`
export default EstiloGlobal
