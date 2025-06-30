import styled from 'styled-components'

const Header = styled.header`
  background: #333;
  color: white;
  padding: 20px;
  text-align: center;
`

export function Cabecalho() {
  return <Header><h1>Portal de Vagas</h1></Header>
}
