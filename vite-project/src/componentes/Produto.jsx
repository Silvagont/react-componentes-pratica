function Produto({ nome, descricao, preco, disponivel }) {
  return (
    <div className="produto">
      <div>
        <span className={disponivel ? "status disponivel" : "status indisponivel"}>
          {disponivel ? "Disponível" : "Indisponível"}
        </span>

        <h3>{nome}</h3>
        <p>{descricao}</p>
        <strong>R$ {preco.toFixed(2).replace(".", ",")}</strong>
      </div>

      <button>Comprar</button>
    </div>
  );
}

export default Produto;