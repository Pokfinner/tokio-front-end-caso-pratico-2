import Produto from './Produto'

const Carrinho = (props) => {

    if (props.produtos.length === 0) {
        return <div> Ainda não tem produtos no carrinho. </div>
    }
    else return (
        <div className='carrinho'>
            {props.produtos.map((produto, index) => (
                <Produto setProdutos={props.setProdutos} produto={produto} id={index} key={index} />
            ))}

            <div>Valor Total: {
                props.produtos.reduce((accum, curr) => {
                    return accum + parseInt(curr.preco)
                }, 0).toFixed(2) + "€"
            }</div>
        </div>
    )

}

export default Carrinho