function Aluno({ nome, turma }) {
  return (
    <div className="aluno">
      <h3>{nome}</h3>
      <p>Turma: {turma}</p>
    </div>
  );
}

export default Aluno;