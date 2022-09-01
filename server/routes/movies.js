const MovieController = require('../controllers/movie_controller')
const router = require('express').Router()

router.get('/', MovieController.getAllMovies)
router.get('/:id', MovieController.getMovieById)

module.exports = router