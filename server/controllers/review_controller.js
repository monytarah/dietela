const { Review } = require('../models')

class ReviewController {
  static async createReview (req, res, next) {
    try {
      const { description, user_name, movie_id } = req.body
      const data = await Review.create({ description, user_name, movie_id })
      console.log(data)
      res.status(201).json({ message: 'Success'})
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error'})
    }
  }
  static async getReviewByMovie (req, res, next) {
    try {
      const movie_id = req.params.movie_id
      const data = await Review.findAll({
        where: { movie_id }
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error'})
    }
  }
  static async getReviewById (req, res, next) {
    try {
      const id = req.params.review_id
      const data = await Review.findOne({
        where: { id }
      })
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error'})
    }
  }
  static async updateReviewById (req, res, next) {
    try {
      const id = req.params.review_id
      const { user_name, description, movie_id } = req.body
      const data = await Review.update(
        {
          user_name, 
          description,
          movie_id
        },
        { where: { id } })
      res.status(200).json({ message: 'Success' })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error'})
    }
  }
  static async deleteReviewById (req, res, next) {
    try {
      const id = req.params.review_id
      const data = await Review.destroy({ 
        where: { id } 
      })
      console.log(data)
      res.status(200).json({ message: 'Success' })
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error'})
    }
  }
}

module.exports = ReviewController