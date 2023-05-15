import Carrinho from './components/Carrinho'
import AddProduto from './components/AddProduto'
import { useState } from 'react'

function App() {

  const [produtos, setProdutos] = useState([])

  return (
    <div className="App">

      <div className='carrinho-container'>
        <h1> Lista de Produtos </h1>
        <Carrinho setProdutos={setProdutos} produtos={produtos} />
        <AddProduto setProdutos={setProdutos} />
      </div>

    </div>
  );
}

export default App;
