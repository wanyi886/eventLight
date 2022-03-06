'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Events', [
      {
        hostId: 1,
        categoryId: 7,
        title:'Soundgasm San Jose',
        description:'Have fun with us!! Dress Code: Sexy, Swaggy & Sophisticated.',
        imgUrl:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F237069949%2F232815302468%2F1%2Foriginal.20220226-014351?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C686%2C3648%2C1824&s=4661f4c6d9f68b214675563145875c33',
        price: 0,
        date: "2022-04-22",
        startTime:'13:30',
        endTime:'16:30',
        address: '32 South 3rd Street',
        city:'San Jose',
        state:'CA',
        zipCode:'95113',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        categoryId: 5,
        title: 'Official Nicky Jam Concert After Party',
        description: 'The best After Party ever! This event will sell out, hurry!!',
        imgUrl:'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F239125839%2F202130416373%2F1%2Foriginal.20220301-221848?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C335%2C1024%2C512&s=cfb7b515ccb572835e98e82f268643ba',
        price: 15,
        date: '2022-06-09',
        startTime:'13:30',
        endTime:'16:30',
        address:'58 South First Street',
        city:'San Jose',
        state:'CA',
        zipCode:'95113',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        categoryId: 7,
        title: 'MaroonSix World Tour 2022',
        description: 'Get ready to high!',
        imgUrl:'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 300,
        date: '2022-07-08',
        startTime:'13:30',
        endTime:'16:30',
        address:'620 Atlantic Ave',
        city:'Brooklyn',
        state:'NY',
        zipCode:'11217',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 1,
        categoryId: 7,
        title: 'MaroonSix World Tour 2022',
        description: 'Get ready to high!',
        imgUrl:'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 500,
        date: '2022-08-05',
        startTime:'10:30',
        endTime:'12:30',
        address:'620 Atlantic Ave',
        city:'Brooklyn',
        state:'NY',
        zipCode:'11217',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 3,
        categoryId: 7,
        title: 'Sony Music 50 years Concert',
        description: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
        imgUrl:'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 299,
        date: '2022-05-13',
        startTime:'13:30',
        endTime:'16:30',
        address:'620 Atlantic Ave',
        city:'Brooklyn',
        state:'NY',
        zipCode:'11217',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        hostId: 2,
        categoryId: 4,
        title: 'Software Engineers meet up',
        description: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
        imgUrl:'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        price: 5,
        date: '2022-05-13',
        startTime:'13:30',
        endTime:'16:30',
        address:'620 Atlantic Ave',
        city:'Brooklyn',
        state:'NY',
        zipCode:'11217',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Events', null, {});

  }
};