'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Mencuri Raden Saleh',
        img: 'https://upload.wikimedia.org/wikipedia/id/e/ea/Poster_teatrikal_Mencuri_Raden_Saleh.jpg',
        description: 'Sekelompok mahasiswa berencana untuk mencuri lukisan bersejarah. Lukisan tersebut adalah Penangkapan Pangeran Diponegoro karya Raden Saleh',
        release_date: new Date(2022, 7, 25),
        genre: 'Action/Drama',
        imdb_rate: '8.2/10',
        cast: 'Iqbaal Ramadhan, Angga Yunanda, Rachel Amanda, Umay Shahab, Aghniny Haque, dan Ari Irham',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Pengabdi Setan 2 Communion',
        img: 'https://upload.wikimedia.org/wikipedia/id/thumb/2/26/Pengabdi_Setan_2.jpeg/220px-Pengabdi_Setan_2.jpeg',
        description: 'Beberapa tahun setelah berhasil menyelamatkan diri dari kejadian mengerikan yang membuat mereka kehilangan Ibu dan si bungsu lan;',
        release_date: new Date(2022, 7, 4),
        genre: 'Horror',
        imdb_rate: '7.5/10',
        cast: 'Tara Basro, Endy Arfian, Nasar Anuz, dan Bront Palarae',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Mumun',
        img: 'https://upload.wikimedia.org/wikipedia/id/thumb/4/4e/Mumun_official_poster.jpeg/220px-Mumun_official_poster.jpeg',
        description: 'Mumun (Acha Septriasa) dan Juned (Dimas Aditya) merupakan sepasang kekasih yang saling mencintai. Namun, Mumun tewas secara mengenaskan dalam sebuah kecelakaan dan Juned sangat terpukul karenanya.',
        release_date: new Date(2022, 8, 1),
        genre: 'Horror/Comedy',
        imdb_rate: '-',
        cast: 'Acha Septriasa dan Dimas Aditya.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Orphan: First Kill',
        img: 'https://m.media-amazon.com/images/M/MV5BZjgwNDA3MmUtMTQ3Yy00ZDFmLTgwMTktNTBlMTQ3ZTI5MjYxXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
        description: 'After orchestrating a brilliant escape from an Estonian psychiatric facility, Esther travels to America by impersonating the missing daughter of a wealthy family.',
        release_date: new Date(2022, 7, 19),
        genre: 'Horror/Thriller',
        imdb_rate: '6/10',
        cast: 'Isabelle Fuhrman, Julia Stiles, and Rossif Sutherland',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Emergency Declaration',
        img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Emergency_Declaration.jpg/220px-Emergency_Declaration.jpg',
        description: 'While investigating a terrorist threat that goes online, Korean authorities discover that a suspect has recently boarded a flight bound for the United States.',
        release_date: new Date(2022, 7, 16),
        genre: 'Action/Drama',
        imdb_rate: '7.1/10',
        cast: 'Song Kang-ho',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Movies', null, {})
  }
};
