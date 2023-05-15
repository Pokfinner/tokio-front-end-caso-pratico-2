const Produto = (props) => {

    const removeProduto = (id) => {

        props.setProdutos(produtos => {

            return produtos.filter((produto, index) => index !== id)

        })

    }

    return (
        <div className='produto'>
            <div>{props.id}</div>
            <div>{props.produto.nome}</div>
            <div>{props.produto.preco}</div>

            <button onClick={() => removeProduto(props.id)}>Eliminar Produto</button>
        </div>
    )

}

export default Produto