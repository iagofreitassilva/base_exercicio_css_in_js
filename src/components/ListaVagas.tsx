import { Vaga } from './Vaga'

const vagas = [
  { titulo: 'Dev Front-end', descricao: 'React e TypeScript' },
  { titulo: 'Dev Back-end', descricao: 'Node.js e Express' },
]

export function ListaVagas() {
  return (
    <div>
      {vagas.map((vaga, i) => (
        <Vaga key={i} titulo={vaga.titulo} descricao={vaga.descricao} />
      ))}
    </div>
  )
}
