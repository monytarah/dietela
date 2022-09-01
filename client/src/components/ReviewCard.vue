<template>
  <div class="review-detail">
    <div class="d-flex justify-content-between">
      <div>
      "{{ review.description }}" - {{ review.user_name }}
      </div>
      <div class="d-flex align-items-center">
        <i @click="updateReview" class="fa fa-pencil-square-o icon" style="margin-right: 10px;"></i>
        <i @click="deleteReview(review)" class="fa fa-trash-o icon"></i>
      </div>
    </div>
    <ReviewModal 
      v-show="addModal"
      :data="review"
      @close-modal="toggleModal"
      @event-add="setUpdate"
    />
  </div>
</template>

<script>
import ReviewModal from '@/components/ReviewModal.vue'
export default {
  name: 'ReviewCard',
  props: [ 'review' ],
  components: {
    ReviewModal
  }, 
  data () {
    return {
      addModal: false,
    }
  },
  methods: {
    deleteReview (val) {
      this.$store.dispatch('deleteReview', val)
    },
    updateReview () {
      this.toggleModal()
    },
    setUpdate (val) {
      const payload = {
        user_name: val.user_name,
        description: val.description,
        movie_id: this.$route.params.id,
        id: this.review.id
      }
      this.$store.dispatch('updateReview', payload)
      this.toggleModal()
    },
    toggleModal () {
      this.addModal = !this.addModal
    }
  }
}
</script>

<style>
.review-detail {
  padding: 15px 10px;
  border: 1px solid rgba(0, 0, 0, 0.175);
  border-radius: 0.375rem;
  margin: 10px 0;
}
.icon:hover {
  cursor: pointer;
}
</style>