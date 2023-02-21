const ListaProdutos = (props) => (
    <li className="cardProduto">
        <img src={props.imagem} alt={props.nome} />
    </li>
)

export default ListaProdutos