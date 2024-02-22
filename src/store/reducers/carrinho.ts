// Slice:  extrai uma parte específica de um dado mais longo
// Reducers: são funções que especificam como o estado da aplicação é atualizado em resposta a uma ação (action) que é despachada para o store (armazenamento central de estado).
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const p = action.payload

      if (state.itens.find((produto) => produto.id == p.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(p)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer

// function adicionarAoCarrinho(produto: Produto) {
//   if (carrinho.find((p) => p.id === produto.id)) {
//     alert('Item já adicionado')
//   } else {
//     setCarrinho([...carrinho, produto])
//   }
// }
