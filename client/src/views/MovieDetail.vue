<template>
  <div class="container">
    <MovieDetailCard :movie="movie"/>
    <div class="review-card">
      <h3>Reviews</h3>
      <span class="add-review" @click="addForm">Add Review</span>
      <div v-for="review in reviews" :key="review.id">
        <ReviewCard :review="review"/>
      </div>
    </div>
    <ReviewModal 
      v-show="addModal"
      :data="dataModal"
      @close-modal="toggleModal"
      @event-add="setAdd"
    />
  </div>
</template>

<script>
import MovieDetailCard from '@/components/MovieDetailCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import ReviewModal from '@/components/ReviewModal.vue'
export default {
  name: 'MovieDetail',
  components: {
    MovieDetailCard,
    ReviewCard,
    ReviewModal
  },
  data () {
    return {
      addModal: false,
      dataModal: {
        user_name: '',
        description: ''
      }
    }
  },
  methods: {
    toggleModal () {
      this.addModal = !this.addModal
    },
    setAdd (val) {
      const payload = {
        user_name: val.user_name,
        description: val.description,
        movie_id: this.$route.params.id
      }
      this.$store.dispatch('createReview', payload)
      this.toggleModal()
    },
    addForm () {
      this.toggleModal()
    }
  },
  computed: {
    movie () {
      return this.$store.state.detailMovie
    },
    reviews () {
      return this.$store.state.reviews
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.$store.dispatch('getDetailMovie', id)
    this.$store.dispatch('getAllReviews', id)
  }
}
</script>

<style>
.detail {
  margin-top: 40px;
  padding: 20px;
}
.img-detail {
  height: 280px;
}
.img-detail img {
  width: 100%;
  height: 100%
}
.review-card {
  padding: 20px 0;
  text-align: left;
}
.add-review {
  text-decoration: underline;
}
.add-review:hover {
  cursor: pointer;
}
</style>