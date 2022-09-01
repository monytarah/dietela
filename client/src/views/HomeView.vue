<template>
  <div class="home container">
    <div class="row">
      <div class="col d-flex align-items-stretch" v-for="movie in movies" :key="movie.id">
        <MovieCard :data="movie" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'
export default {
  name: 'HomeView',
  components: {
    MovieCard
  },
  computed: {
    movies () {
      return this.$store.state.movies
    }
  },
  mounted () {
    this.$store.dispatch('getAllMovies')
  }
}
</script>
<style>
.home {
  margin-top: 30px;
}
</style>
