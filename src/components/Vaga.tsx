import styled from 'styled-components'

const VagaBox = styled.div`
  border: 1px solid #ccc;
  padding: 15px;
  margin-bottom: 10px;
`

type Props = {
  titulo: string
  descricao: string
}

export function Vaga({ titulo, descricao }: Props) {
  return (
    <VagaBox>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </VagaBox>
  )
}
