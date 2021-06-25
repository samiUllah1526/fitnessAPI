'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add seed commands here.
    
    
     await queryInterface.bulkInsert('EXCERCISES', [{
        excercie: 'Weight Lifting: general',
          calories_burned: '90',
      //  isBetaMember: false,
    
        },
        {
          excercie: 'Aerobics: water',
          calories_burned: '120',
        },
        {
          excercie: 'Stretching',
          calories_burned: '120',
        }
          ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
