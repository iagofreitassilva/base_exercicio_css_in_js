import styled from 'styled-components'

const Form = styled.form`
  margin: 20px 0;
  display: flex;
  gap: 10px;
`

const Input = styled.input`
  padding: 10px;
  flex: 1;
`

const Button = styled.button`
  padding: 10px 20px;
  background: #333;
  color: white;
  border: none;
  cursor: pointer;
`

export function Formulario() {
  return (
    <Form>
      <Input type="text" placeholder="Digite o cargo" />
      <Button>Buscar</Button>
    </Form>
  )
}
