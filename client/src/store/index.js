import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    reviews: [],
    detailReview: {},
    detailMovie: {}
  },
  mutations: {
    setAllMovies (state, payload) {
      state.movies = payload
    },
    setAllReviews (state, payload) {
      state.reviews = payload
    },
    setDetailReview (state, payload) {
      state.detailReview = payload
    },
    setDetailMovie (state, payload) {
      state.detailMovie = payload
    }
  },
  actions: {
    async getAllMovies (context) {
      try {
        const { data } = await axios.get('movies')
        context.commit('setAllMovies', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getAllReviews (context, payload) {
      try {
        const { data } = await axios.get('/reviews/movies/' + payload)
        context.commit('setAllReviews', data)
      } catch (error) {
        console.log(error)
      }
    },
    async getDetailReview (context, payload) {
      try {
        const { data } = await axios.get('/reviews/' + payload)
        context.commit('setDetailReview', data)
      } catch (error) {
        console.log(error)
      }
    },
    async createReview (context, payload) {
      try {
        const { movie_id } = payload 
        await axios.post('/reviews', payload)
        context.dispatch('getAllReviews', movie_id)
      } catch (error) {
        console.log(error)
      }
    },
    async updateReview (context, payload) {
      try {
        const { id, movie_id } = payload
        await axios.put(`/reviews/${id}`, payload)
        context.dispatch('getAllReviews', movie_id)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteReview (context, payload) {
      try {
        const { movie_id, id } = payload
        await axios.delete(`/reviews/${id}`)
        context.dispatch('getAllReviews', movie_id)
      } catch (error) {
        console.log(error)
      }
    },
    async getDetailMovie (context, payload) {
      try {
        const { data } = await axios.get('/movies/' + payload)
        context.commit('setDetailMovie', data)
      } catch (error) {
        console.log(error)
      }
    },
  },
  modules: {
  }
})
