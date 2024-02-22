import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { Produto } from '../../components/Produto/styles'
import { Produto } from '../../App'

type FavoritarState = {
  favoritos: Produto[]
}

const initialState: FavoritarState = {
  favoritos: []
}

const favoritarSlice = createSlice({
  name: 'favoritar',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favorito = action.payload

      if (state.favoritos.find((produto) => produto.id == favorito.id)) {
        state.favoritos = state.favoritos.filter(
          (produto) => produto.id !== favorito.id
        )
      } else {
        state.favoritos.push(favorito)
      }
    }
  }
})

export const { favoritar } = favoritarSlice.actions
export default favoritarSlice.reducer
// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
