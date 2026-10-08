function Nota({ disciplina, nota }) {
  return (
    <div className="nota">
      <h3>{disciplina}</h3>
      <p>Nota: {nota}</p>
    </div>
  );
}

export default Nota;