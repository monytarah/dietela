const router = require('express').Router()
const movieRouter = require('./movies')
const reviewRouter = require('./review')

router.get('/', (req, res, next) => {
  res.send(`It's working`)
})
router.use('/movies', movieRouter)
router.use('/reviews', reviewRouter)

module.exports = router