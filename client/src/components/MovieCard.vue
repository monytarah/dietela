<template>
  <div class="card card-hover" style="width: 18rem;" @click="goToDetail(data.id)" >
    <div class="img-container">
      <img :src="data.img" class="card-img-top" alt="">
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-text">{{ data.description.substr(0, 150) }}...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  props: [ 'data' ],
  methods: {
    goToDetail (id) {
      this.$router.push('/movies/' + id)
    } 
  }
}
</script>

<style>
.card {
  margin-bottom: 30px;
}
.card-hover:hover {
  cursor: pointer;
}
.img-container {
  height: 400px;
}
.img-container img {
  width: 100%;
  height: 100%
}
</style>