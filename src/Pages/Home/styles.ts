import styled from 'styled-components'

export const BotaoHome = styled.button`
  padding: 4px;
  border: none;
  border-radius: 4px;
  margin-top: 4px;
  font-weight: bold;
  color: #29abe5;
  font-size: 0.8rem;
  &:hover {
    background-color: #29abe2;
    color: #fff;
  }
`

export const BotoesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.3s ease;
`
export const ContatoDiv = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;

  .dadosContato {
    width: 100%;
  }
`
export const MaisDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 16px 16px 0;
`
export const BotoesMais = styled.div<{ show: boolean }>`
  display: flex;
  flex-direction: column;
  opacity: ${(props) => (props.show ? '1' : '0')};
  transition: opacity 0.3s ease;
`
export const PlusIcon = styled.button`
  color: #fff;
  background-color: #3498db;
  border: none;
  width: 48px;
  height: 48px;
  margin-left: 8px;
  font-family: sans-serif;
  border-radius: 50%;
  font-size: 40px;
  line-height: 1;
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
