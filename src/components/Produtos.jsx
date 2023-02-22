const Produtos = ({ listaProdutos }) => (
    <section className="listaProdutos">
        <h2>Nossos Produtos</h2>
        <ul>
            {
                listaProdutos.map((produto, index) => (
                    <li className="cardProduto" key={index}>
                        <img src={produto.imagem} alt={produto.nome} />
                    </li>
                ))
            }
        </ul>
    </section>
)

export default Produtos