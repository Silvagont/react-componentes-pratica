function CardCurso({ nome, duracao, modalidade, nivel, vagas }) {
  return (
    <article className="card-curso">
      <div className="card-topo">
        <span>{nivel}</span>

        <span className={vagas > 0 ? "vagas disponiveis" : "vagas completas"}>
          {vagas > 0 ? "Vagas disponíveis" : "Turma completa"}
        </span>
      </div>

      <h3>{nome}</h3>

      <div className="informacoes">
        <p>
          <strong>Duração:</strong> {duracao}
        </p>

        <p>
          <strong>Modalidade:</strong> {modalidade}
        </p>

        <p>
          <strong>Nível:</strong> {nivel}
        </p>
      </div>
    </article>
  );
}

export default CardCurso;