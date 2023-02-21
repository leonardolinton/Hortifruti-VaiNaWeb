const Produtos = (props) => (
    <section className="listaProdutos">
        <h2>Nossos Produtos</h2>
        <ul>
            {props.children}
        </ul>
    </section>
)

export default Produtos