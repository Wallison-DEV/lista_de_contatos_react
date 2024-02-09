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
    background-color: #f8f8f8;
    line-height: 1.6;
    color: #333;
  }
  .oculto {
    display: none;
  }

  .visivel {
    display: block;
  }
`

export const Container = styled.div`
  display: block;
  height: 100vh;
  padding: 0 30vw;
`

export default EstiloGlobal
