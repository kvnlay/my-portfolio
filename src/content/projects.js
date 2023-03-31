import facemash from 'images/facemash2.png';
import battleship from 'images/battleship.png';
import bookStore from 'images/recipestore.png';
import yelpHotel from 'images/yelphotel.png';
import weather from 'images/weather_app.png';

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: 'Facemash',
    description:
      'Facemash is a clone of some of the core features of facebook which includes; users, profiles, “friending”, posts, news feed, and “liking”.',
    skills: ['Bootstrap', 'Ruby on Rails', 'Postgresql'],
    image: facemash,
    links: {
      github: 'https://github.com/kvnlay/facemash',
      preview: 'https://face-mash.onrender.com/',
    },
  },
  {
    title: 'Yelp Hotel',
    description:
      'Yelp hotel is an app where users can post reviews on hotels and also comment. ',
    skills: ['HTML5', 'Bootstrap', 'NodeJS', 'Express.JS', 'MongoDB'],
    image: yelpHotel,
    links: {
      github: 'https://github.com/kvnlay/yelp-hotel',
      preview: 'https://polar-citadel-56618.herokuapp.com',
    },
  },
  {
    title: 'Recipe store',
    description:
      'Simple recipe bookstore app built with ReactJS and Redux where users can upload recipe books, information about the book etc.Simple recipe bookstore app built with ReactJS and Redux where users can upload recipe books, information about the book etc.',
    skills: ['HTML5', 'CSS3', 'ReactJS', 'Redux'],
    image: bookStore,
    links: {
      github: 'https://github.com/kvnlay/magic-bookstore',
      preview: 'https://magic-bookstore.herokuapp.com/',
    },
  },
  {
    title: 'Battleship game',
    description:
      'This is a Battleship game written in vanilla JavaScript and tested with jest testing framework.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'webpack'],
    image: battleship,
    links: {
      github: 'https://github.com/kvnlay/battleship',
      preview:
        'https://raw.githack.com/Cena-JM/battleship/master/dist/index.html',
    },
  },
  {
    title: 'Weather app',
    description:
      'A Weather App built using vanilla JavaScript & OpenWeather API. Users can input city location, submit the form and get live weather data of any location in the world.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'OpenweatherAPI'],
    image: weather,
    links: {
      github: 'https://github.com/kvnlay/weather-app',
      preview:
        'https://raw.githack.com/kvnlay/weather-app/develop/dist/index.html',
    },
  },
  // {
  //   title: 'Todolist',
  //   description:
  //     'This is a todolist project with prioritized lists of all the tasks that you need to carry out. It list everything that you have to do, with different priorities: high being red, medium being orange, and low being green.',
  //   skills: ['HTML5', 'CSS3', 'JavaScript', 'Webpack'],
  //   image: todolist,
  //   links: {
  //     github: 'https://github.com/kvnlay/todo-list',
  //     preview:
  //       'https://raw.githack.com/Cena-JM/todo-list/development/dist/index.html',
  //   },
  // },
];
