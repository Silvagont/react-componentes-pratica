function Destaque({ titulo, texto }) {
  return (
    <div className="destaque">
      <span>✦</span>

      <div>
        <h3>{titulo}</h3>
        <p>{texto}</p>
      </div>
    </div>
  );
}

export default Destaque;