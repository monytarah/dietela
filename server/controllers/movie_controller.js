const { Movie } = require('../models')

class MovieController {
  static async getAllMovies (req, res, next) {
    try {
      const data = await Movie.findAll()
      console.log(data)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error'})
    }
  }
  static async getMovieById (req, res, next) {
    try {
      const id = req.params.id
      const data = await Movie.findOne({
        where: { id }
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error'})
    }
  }
}

module.exports = MovieController