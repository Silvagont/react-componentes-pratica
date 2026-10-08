import Titulo from "./componentes/Titulo";
import Aluno from "./componentes/Aluno";
import Nota from "./componentes/Nota";
import Produto from "./componentes/Produto";

function App() {
  return (
    <main className="container">
      <Titulo />

      <section>
        <h2>Alunos</h2>

        <div className="alunos">
          <Aluno nome="Carlos" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Ana" turma="Desenvolvimento de Sistemas" />
          <Aluno nome="Pedro" turma="Desenvolvimento de Sistemas" />
        </div>
      </section>

      <section>
        <h2>Notas</h2>

        <div className="notas">
          <Nota disciplina="React" nota={8.5} />
          <Nota disciplina="JavaScript" nota={9} />
          <Nota disciplina="HTML e CSS" nota={10} />
        </div>
      </section>

      <section>
        <h2>Produtos</h2>

        <div className="produtos">
          <Produto
            nome="Teclado Mecânico"
            descricao="Teclado com iluminação RGB"
            preco={250}
            disponivel={true}
          />

          <Produto
            nome="Mouse"
            descricao="Mouse sem fio"
            preco={120}
            disponivel={true}
          />

          <Produto
            nome="Headset Gamer"
            descricao="Headset com microfone"
            preco={180}
            disponivel={false}
          />

          <Produto
            nome="Mousepad"
            descricao="Mousepad grande para jogos"
            preco={80}
            disponivel={true}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
import "./App.css";