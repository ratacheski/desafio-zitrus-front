export const state = () => ({
  tiposProduto: []
})

export const getters = {
  tiposProduto(state){
    return state.tiposProduto;
  }
}

export const mutations = {
  SET_TIPOS_PRODUTO(state, payload) {
    state.tiposProduto = payload
  }
}

export const actions = {
  async nuxtClientInit({ commit }) {
    const tipos = await this.$axios.$get('/produtos/tipos');
    commit('SET_TIPOS_PRODUTO', tipos);
  }
}
