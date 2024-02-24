import styled from 'styled-components'

export const HeadDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  img {
    max-height: 40px;
    cursor: pointer;
  }
`

export const MenuHamburguer = styled.div<{ open: boolean }>`
  margin-top: 12px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  max-height: ${(props) => (props.open ? '500px' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.open ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.3s ease;
  z-index: 999;
`

export const MenuItem = styled.div`
  padding: 8px;
  cursor: pointer;
  &:last-child {
    border-top: 1px solid #ccc;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`

export const BotaoHome = styled.button`
  margin-top: 4px;
  padding: 8px;
  cursor: pointer;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:last-child {
    border-top: 1px solid #ccc;
  }
  &:hover {
    background-color: #f0f0f0;
  }
`

export const BotoesDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const TresPontosButton = styled.button`
  font-weight: bold;
  font-size: 1.6rem;
  background: none;
  border: none;
  margin-left: auto;
  transform: rotate(90deg);
`
export const BotoesContato = styled.div<{ show: boolean }>`
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-height: ${(props) => (props.show ? '500px' : '0')};
  overflow: hidden;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.3s ease;
  z-index: 999;
  margin-bottom: 12px;
`
export const ContatoDiv = styled.div`
  padding: 16px 0 8px 16px;
  display: flex;
  width: 100%;
  border-bottom: 1px solid #ccc;
  .dadosContato {
    width: 100%;
  }
`
export const BotaoSalvar = styled.button`
  padding: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  background-color: green;
  height: 32px;
  border-radius: 4px;
  border: none;
`
export const BotaoCancelar = styled.button`
  padding: 8px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  background-color: red;
  height: 32px;
  border-radius: 4px;
  border: none;
  margin-left: 8px;
`
export const EditandoCttDiv = styled.div`
  display: block;
  margin-bottom: 8px;
  .dadosContato {
    input {
      max-width: 100%;
      width: 100%;
      font-size: 1rem;
      padding: 8px;
      margin: 0 0 8px 0;
      border-radius: 4px;
      outline: solid 1px #ccc;
      border: none;
      &:focus {
        outline: solid 1px black;
      }
    }
  }
`
