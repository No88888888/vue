import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    movies : null,
    wishList : [],
  },
  getters: {
  },
  mutations: {
    SAVE_MOVIES(state, movie_data) {
      state.movies = movie_data
    },
    SAVE_WISH_LIST(state, wishes) {
      state.wishList.push({
        wishes: wishes,
        isWatched : false
      })
    },
    TOGGLE_WATCHED(state, wish) {
      state.wishList = state.wishList.map((movie) => {
        if (movie === wish) {
          movie.isWatched = !movie.isWatched
        }
        return movie
      })
    },
    DELETE_WATCHED(state, wish) {
      const index = state.wishList.indexOf(wish)
      state.wishList.splice(index, 1)
    },
  },
  actions: {
    saveWishList(context, wishes) {
      context.commit('SAVE_WISH_LIST', wishes)

    },
    toggleWatched(context, wish) {
      context.commit('TOGGLE_WATCHED', wish)
    },
    deleteWatched(context, wish) {
      context.commit('DELETE_WATCHED', wish)
    }
  },
  modules: {
  }
})
