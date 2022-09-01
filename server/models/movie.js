'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasMany(models.Review, {
        foreignKey: 'movie_id',
        sourceKey: 'id'
      })
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.STRING,
    release_date: DataTypes.DATE,
    genre: DataTypes.STRING,
    imdb_rate: DataTypes.STRING,
    cast: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};