import styled from 'styled-components'

const HeroSection = styled.section`
  background: #eee;
  padding: 40px;
  text-align: center;
`

export function Hero() {
  return (
    <HeroSection>
      <h2>Encontre a vaga perfeita para você</h2>
    </HeroSection>
  )
}
