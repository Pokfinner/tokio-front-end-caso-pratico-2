const AddProduto = (props) => {

    const addProduto = (event) => {

        event.preventDefault()

        const nome = event.target.nome.value
        const preco = event.target.preco.value

        const produto = { nome, preco }

        props.setProdutos(produtos => [...produtos, produto])

    }

    return (
        <form onSubmit={addProduto}>

            <h1>Adicionar Produto:</h1>

            <label htmlFor='nome'>Nome:</label>
            <input name='nome' />

            <label htmlFor='preco'>Preço:</label>
            <input name='preco' />

            <input type='submit' value={`Adicionar`} />

        </form>
    )

}

export default AddProduto