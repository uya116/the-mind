// 状態の定義
export const state = () => ({
  submittedCards: []
})

// 状態を更新
export const mutations = {
  setSubmittedCards(state, data) {
    state.submittedCards = data;
  }
}

export const getters = {
  getSubmittedCards(state) {
      return state.submittedCards;
  },
}

export const actions = {
  updateSubmittedCards({ commit }, cards) {
      commit('setSubmittedCards', cards)
  },
}
