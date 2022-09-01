<template>
  <div class="card detail mb-3">
    <div class="row g-0">
      <div class="col-md-2 img-detail">
        <img :src="movie.img" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-10 description">
        <div class="card-body">
          <h2 class="card-title">{{ movie.title }}</h2>
          <p class="card-text">IMDb Rate: {{ movie.imdb_rate }}</p>
          <p class="card-text">Release Date: {{ movie.release_date ? movie.release_date.split('T')[0] : '-' }}</p>
          <p class="card-text">Genre: {{ movie.genre }}</p>
          <p class="card-text">Cast: {{ movie.cast }}</p>
          <p class="card-text">{{ movie.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetailCard',
  props: [ 'movie' ]
}
</script>

<style>

</style>