<template>
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-container">
              <div class="d-flex justify-content-end">
                <button @click="$emit('close-modal')" class="btn">X</button>
              </div>
              <div class="my-3 row">
                <label for="username" class="col-sm-2 col-form-label">Username</label>
                <div class="col-sm-10">
                  <input v-model="user_name" required type="text" class="form-control" :class="error.user_name ? 'is-invalid' : ''" id="username" placeholder="anonymous">
                </div>
              </div>
              <div class="my-3 row">
                <label for="review" class="col-sm-2 col-form-label">Review</label>
                <div class="col-sm-10">
                  <textarea v-model="description" required type="text" :class="error.description ? 'is-invalid' : ''" class="form-control" id="review" placeholder="Great movie!" rows="3"></textarea>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button @click="eventAdd" class="btn btn-primary">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </transition>
</template>

<script>
export default {
  name: 'ReviewModal',
  props: {
    data: {
      type: Object
    }
  },
  data () {
    return {
      user_name: this.data.user_name ? this.data.user_name : '',
      description: this.data.description ? this.data.description : '',
      error: {
        user_name: false,
        description: false
      }
    }
  },
  methods: {
    eventAdd () {
      this.validate()
      if (this.error.user_name || this.error.description) {
        return
      } else {
        this.$emit('event-add', { user_name: this.user_name, description: this.description })
        this.user_name = ''
        this.description = ''
      }
    },
    validate () {
      this.error.user_name = this.user_name ? false : true
      this.error.description = this.description ? false : true
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 40rem;
  max-height: 98vh;
  overflow: hidden;
  margin: 0px auto;
  padding: 20px 30px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.content{
  max-height: 83vh;
  overflow: scroll;
  overflow-x: hidden;
}
.content::-webkit-scrollbar {
  width: 6px;
  background: #FFF2F2;
  border-radius: 20px;
}
.content::-webkit-scrollbar-thumb {
  background: #789B6D;
  border-radius: 20px;
}
.header-modal h2{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #1E1E1E;
  padding-left: 15px;
}
.label-font {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.15em;
    color: #1E1E1E;
}
.col-form-label {
  text-align: left;
}
.__label-err {
  font-size: 12px;
  color: red;
}
.modal-container {
  width: 40rem;
  max-height: 98vh;
  overflow: hidden;
  margin: 0px auto;
  padding: 20px 30px;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
</style>
