import Cabecalho from "./components/Cabecalho";
import CardCurso from "./components/CardCurso";
import Destaque from "./components/Destaque";
import Rodape from "./components/Rodape";
import "./App.css";

const cursos = [
  {
    nome: "Desenvolvimento de Sistemas",
    duracao: "1200 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 12
  },
  {
    nome: "Redes de Computadores",
    duracao: "1000 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 8
  },
  {
    nome: "Manutenção de Computadores",
    duracao: "800 horas",
    modalidade: "Presencial",
    nivel: "Técnico",
    vagas: 0
  },
  {
    nome: "Programação Web",
    duracao: "900 horas",
    modalidade: "Híbrido",
    nivel: "Qualificação",
    vagas: 15
  },
  {
    nome: "Banco de Dados",
    duracao: "700 horas",
    modalidade: "Online",
    nivel: "Qualificação",
    vagas: 10
  },
  {
    nome: "Desenvolvimento Mobile",
    duracao: "1000 horas",
    modalidade: "Híbrido",
    nivel: "Técnico",
    vagas: 6
  }
];

function App() {
  return (
    <div className="pagina">
      <Cabecalho />

      <main className="conteudo">
        <section className="cursos">
          <div className="titulo-secao">
            <span>FORMAÇÕES</span>
            <h2>Encontre seu próximo curso</h2>
            <p>
              Escolha uma formação e comece a desenvolver suas habilidades.
            </p>
          </div>

          <div className="grid-cursos">
            {cursos.map((curso) => (
              <CardCurso
                key={curso.nome}
                {...curso}
              />
            ))}
          </div>
        </section>

        <section className="destaques">
          <div className="titulo-secao">
            <span>POR QUE ESTUDAR?</span>
            <h2>Aprenda fazendo</h2>
          </div>

          <div className="grid-destaques">
            <Destaque
              titulo="Projetos práticos"
              texto="Desenvolva projetos durante sua formação e coloque seus conhecimentos em prática."
            />

            <Destaque
              titulo="Tecnologia"
              texto="Aprenda ferramentas e conceitos utilizados no mercado de trabalho."
            />

            <Destaque
              titulo="Preparação profissional"
              texto="Desenvolva habilidades importantes para iniciar sua carreira na tecnologia."
            />
          </div>
        </section>
      </main>

      <Rodape />
    </div>
  );
}

export default App;