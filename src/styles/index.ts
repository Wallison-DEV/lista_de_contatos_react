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
  height: 100vh;
`
export const Titulo = styled.h2`
  text-align: center;
  font-weight: bold;
  margin-bottom: 12px;
`

export const ListaEstilo = styled.div`
  min-width: 30vw;
  background-color: #fff;
  padding: 16px 32px;
  border-radius: 6px;
  max-width: 400px;
  margin: auto;
`
export default EstiloGlobal
