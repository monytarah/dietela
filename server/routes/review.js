const ReviewController = require('../controllers/review_controller')

const router = require('express').Router()

router.post('/', ReviewController.createReview)
router.get('/movies/:movie_id', ReviewController.getReviewByMovie)
router.get('/:review_id', ReviewController.getReviewById)
router.put('/:review_id', ReviewController.updateReviewById)
router.delete('/:review_id', ReviewController.deleteReviewById)

module.exports = router