import Project from "../models/Project";
import githubUsersImg from "../assets/projects/github-users.png";
import cliChessImg from "../assets/projects/cli-chess.jpeg";
import cliHangmanImg from "../assets/projects/cli-hangman.jpeg";
import cliMasterMindImg from "../assets/projects/cli-mastermind.jpeg";
import cliTicTacToeImg from "../assets/projects/cli-tic-tac-toe.jpeg";
import cvApplicationImg from "../assets/projects/cv-application.jpeg";
import difoodingImg from "../assets/projects/difooding.jpeg";
import digiMemoryImg from "../assets/projects/digi-memory.jpeg";
import drumMachineImg from "../assets/projects/drum-machine.jpeg";
import etchASketchImg from "../assets/projects/etch-a-sketch.jpeg";
import exerciseTrackerMicroserviceImg from "../assets/projects/exercise-tracker-microservice.jpeg";
import fileMetadataMicroserviceImg from "../assets/projects/file-metadata-microservice.jpeg";
import forumHomepageImg from "../assets/projects/forum-homepage.jpeg";
import hololiveInfoAppImg from "../assets/projects/hololive-infoapp.png";
import imageSearcherImg from "../assets/projects/image-searcher.jpeg";
import javascriptCalculatorImg from "../assets/projects/javascript-calculator.jpeg";
import localWeatherImg from "../assets/projects/local-weather.jpeg";
import markdownPreviewerImg from "../assets/projects/markdown-previewer.jpeg";
import odinLibraryImg from "../assets/projects/odin-library.jpeg";
import pinterestCloneImg from "../assets/projects/pinterest-clone.jpeg";
import pomodoroClockImg from "../assets/projects/pomodoro-clock.jpeg";
import randomQuoteMachineImg from "../assets/projects/random-quote-machine.jpeg";
import reactCalculatorImg from "../assets/projects/react-calculator.jpeg";
import recipeBoxImg from "../assets/projects/recipe-box.jpeg";
import requestHeaderParserMicroserviceImg from "../assets/projects/request-header-parser-microservice.jpeg";
import restaurantPageImg from "../assets/projects/restaurant-page.jpeg";
import restopediaImg from "../assets/projects/restopedia.jpeg";
import rockPaperScissorsImg from "../assets/projects/rock-paper-scissors.jpeg";
import scatterPlotImg from "../assets/projects/scatter-plot.jpeg";
import simonGameImg from "../assets/projects/simon-game.jpeg";
import ticTacToeImg from "../assets/projects/tic-tac-toe.jpeg";
import timestampMicroservice from "../assets/projects/timestamp-microservice.jpeg";
import todoListImg from "../assets/projects/todo-list.jpeg";
import twitchJsonApiImg from "../assets/projects/twitch-json-api.jpeg";
import unavailableImg from "../assets/projects/unavailable.jpg";
import urlShortenerMicroserviceImg from "../assets/projects/url-shortener-microservice.jpeg";
import usEducationalAttainmentChoroplethMapImg from "../assets/projects/us-educational-attainment-choropleth-map.jpeg";
import usGdpImg from "../assets/projects/us-gdp.jpeg";
import videoGameSaleTreeImg from "../assets/projects/video-game-sale-tree.jpeg";
import weatherAppImg from "../assets/projects/weather-app.jpeg";
import wikipediaViewerImg from "../assets/projects/wikipedia-viewer.jpeg";
import heatMapImg from "../assets/projects/monthly-global-land-surface-temperature-heat-map.jpeg"

export const Projects: Array<Project> = [
  {
    title: "Github Users",
    description: "Github Users is an android application where users can view informations about users in Github.",
    type: "Android",
    language: "Kotlin",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/Github-User_Dicoding-Fundamental-Android-Development-Final-Project",
    imageUrl: githubUsersImg,
  },
  {
    title: "Restopedia",
    description: "Restopedia is a Progressive web apps that allows the user to view information about certain restaurants such as their location, menus, reviews and ratings and also favorite them.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://Restopedia.jordyf15.repl.co",
    repoUrl: "https://github.com/jordyf15/Dicoding-Expert-FrontEnd-Web-Development-FinalProject",
    imageUrl: restopediaImg
  },
  {
    title: "CV Creator",
    description: "A CV Creator web application where users can create their own CV and download it.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/cv-application/",
    repoUrl: "https://github.com/jordyf15/cv-application",
    imageUrl: cvApplicationImg
  },
  {
    title: "Digi Memory",
    description: "A digimon themed memory card game built with React.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://jordyf15.github.io/digi-memory/",
    repoUrl: "https://github.com/jordyf15/digi-memory",
    imageUrl: digiMemoryImg
  },
  {
    title: "Wiki Viewer",
    description: "A wikipedia viewer which allow users to search for related wikipedia entries based on the word they type in the search bar and also get a random wikipedia entry if the users want it.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/LYRxwpP",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Wikipedia-Viewer",
    imageUrl: wikipediaViewerImg
  },
  {
    title: "Difooding",
    description: "A web application where users can search for all kinds of food recipes by name or through filter which are divided by 3 types: categories, area, and ingridients.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://codepen.io/jordyf15/full/zYKbMxp",
    repoUrl: "https://github.com/jordyf15/Dicoding-Fundamental-Front-End-Web-Development-FinalProject",
    imageUrl: difoodingImg
  },
  {
    title: "Todo List",
    description: "A web based todo list application where users can organize their todos.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://todo-list.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/todo-list",
    imageUrl: todoListImg
  },
  {
    title: "Weather App",
    description: "A web based weather application where users can view the weather information of the location they searched for.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/weather-app/",
    repoUrl: "https://github.com/jordyf15/weather-app",
    imageUrl: weatherAppImg,
  },
  {
    title: "Odin Library",
    description: "A web based library application where users can save their books information such as author, title, pages, and the read status.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/odin-library/",
    repoUrl: "https://github.com/jordyf15/odin-library",
    imageUrl: odinLibraryImg
  },
  {
    title: "Tic Tac Toe",
    description: "A web based Tic Tac Toe game where users can choose to play against an AI or another User.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/javascript-tic-tac-toe/",
    repoUrl: "https://github.com/jordyf15/javascript-tic-tac-toe",
    imageUrl: ticTacToeImg
  },
  {
    title: "Restaurant Page",
    description: "A restaurant webpage build with only DOM manipulation",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/restaurant-page/",
    repoUrl: "https://github.com/jordyf15/restaurant-page",
    imageUrl: restaurantPageImg
  },
  {
    title: "CLI Chess",
    description: "A command line chess game where users can play against a player or an AI. The user can also save and load their game.",
    type: "Other",
    language: "Ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-chess-1#.replit",
    repoUrl: "https://github.com/jordyf15/ruby-chess",
    imageUrl: cliChessImg
  },
  {
    title: "CLI Tic Tac Toe",
    description: "A command line Tic Tac Toe game where 2 players can play against each other.",
    type: "Other",
    language: "Ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-tic-tac-toe",
    repoUrl: "https://github.com/jordyf15/ruby-tic-tac-toe",
    imageUrl: cliTicTacToeImg
  },
  {
    title: "CLI Hangman",
    description: "A command line hangman game with a save and load feature,",
    type: "Other",
    language: "Ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-hangman",
    repoUrl: "https://github.com/jordyf15/ruby-hangman",
    imageUrl: cliHangmanImg
  },
  {
    title: "CLI Mastermind",
    description: "A command line mastermind game where the user can play against a computer either as a secret code maker or a secret code breaker.",
    type: "Other",
    language: "Ruby",
    technologies: [],
    demoUrl: "https://replit.com/@jordyf15/ruby-mastermind#.replit",
    repoUrl: "https://github.com/jordyf15/ruby-mastermind",
    imageUrl: cliMasterMindImg
  },
  {
    title: "Calculator",
    description: "A simple web based calculator",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/calculator/",
    repoUrl: "https://github.com/jordyf15/calculator",
    imageUrl: javascriptCalculatorImg
  },
  {
    title: "Etch a Sketch",
    description: "A web based application of something between a sketchpad and an Etch-A-Sketch.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/etch-a-sketch/",
    repoUrl: "https://github.com/jordyf15/etch-a-sketch",
    imageUrl: etchASketchImg
  },
  {
    title: "Rock Paper Scissors",
    description: "A web based rock-paper-scissors game where the user will play against a computer until one wins 5 rounds.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://jordyf15.github.io/rock-paper-scissors/",
    repoUrl: "https://github.com/jordyf15/rock-paper-scissors",
    imageUrl: rockPaperScissorsImg
  },

  {
    title: "Simon Game",
    description: "A web based simon game where users can play a simon game for 20 rounds with strict or non-strict mode.",
    type: "Front-end",
    language: "Javascript",
    technologies: [],
    demoUrl: "https://codepen.io/jordyf15/full/XWjqaYw",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Simon-Game",
    imageUrl: simonGameImg
  },
  {
    title: "Pinterest Clone",
    description: "A pinterest clone where users can login with their github account and then can view, link and delete the images they link to in the pinterest clone.",
    type: "Full Stack",
    language: "Javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "https://freecodecamp-pinterest-clone.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pinterest-Clone",
    imageUrl: pinterestCloneImg
  },
  {
    title: "Recipe Box",
    description: "A web based recipe box where users can create, edit, delete, and keep recipes that have names, ingridients, and directions.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjROXqg",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Recipe-Box",
    imageUrl: recipeBoxImg
  },
  {
    title: "Forum Homepage",
    description: "FreeCodeCamp Forum HomePage where users can see the most recent posts in FreeCodeCamp forum including it's details.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/JjRyOEb",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Forum-HomePage",
    imageUrl: forumHomepageImg
  },
  {
    title: "Image Searcher",
    description: "A web based Image Search Abstraction Layer that allows user to search for images related to the query and also see recent searches.",
    type: "Full Stack",
    language: "Javascript",
    technologies: ["React", "MongoDB", "Express"],
    demoUrl: "https://FreeCodeCamp-Image-Searcher-1.jordyf15.repl.co",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Image-Searcher",
    imageUrl: imageSearcherImg
  },
  {
    title: "Twitch Json Api",
    description: "A web based application that display information whether a list of channels IN Twitch.tv are currently streaming or not.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/eYdWOPJ",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Twitch-Json-Api",
    imageUrl: twitchJsonApiImg
  },
  {
    title: "Local Weather",
    description: "A web based local weather application that displays the weather based on the user's current location.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWjJoxX",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Local-Weather/blob/master/package.json",
    imageUrl: localWeatherImg
  },
  {
    title: "Drum Machine",
    description: "A web based drum machine application where users can play a drum.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/MWKBNYe",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Drum-Machine",
    imageUrl: drumMachineImg
  },
  {
    title: "Connecting Four",
    description: "A command line connecting four game built with TTD.",
    type: "Other",
    language: "Ruby",
    technologies: [],
    demoUrl: "",
    repoUrl: "https://github.com/jordyf15/connecting-four",
    imageUrl: unavailableImg,
  },
  {
    title: "Open Music API",
    description: "An API where users can perform a CRUD operation of songs and playlists.",
    type: "Back-end",
    language: "Javascript",
    technologies: ["Postgres", "Redis", "Hapi"],
    demoUrl: "https://jordy-open-music-api.herokuapp.com/",
    repoUrl: "https://github.com/jordyf15/Open-Music-API_Dicoding-Fundamental-BackEnd-Development-Project",
    imageUrl: unavailableImg
  },
  {
    title: "Bookshelf API",
    description: "An API where users can perform a CRUD operation of books.",
    type: "Back-end",
    language:"Javascript",
    technologies: ["Hapi"],
    demoUrl: "https://jordy-bookshelf-api.herokuapp.com/",
    repoUrl: "https://github.com/jordyf15/BookShelf-API-Dicoding-Beginner-BackEnd-Development-Project",
    imageUrl: unavailableImg
  },
  {
    title: "Garuda Game Forum API",
    description: "An API with ",
    type: "Back-end",
    language:"Javascript",
    technologies: ["Hapi", "Postgres"],
    demoUrl: "https://jordy-forum-api.herokuapp.com/",
    repoUrl: "https://github.com/jordyf15/garuda-game-forum-api",
    imageUrl: unavailableImg
  },
  {
    title: "File Metadata Microservice",
    description: "A File Metadata Microservice where users can upload a file and receive it's meta data such as file name and size.",
    type: "Back-end",
    language: "Javascript",
    technologies: ["Express"],
    demoUrl: "https://file-metadata-microservice.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-File-Metadata-Microservice",
    imageUrl: fileMetadataMicroserviceImg
  },
  {
    title: "Exercise Tracker Microservice",
    description: "A Exercise Tracker Microservice where users can add and get exercises for a user.",
    type: "Back-end",
    language:"Javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "https://freecodecamp-project-exercisetracker.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Exercise-Tracker-Microservice",
    imageUrl: exerciseTrackerMicroserviceImg
  },
  {
    title: "URL Shortener Microservice",
    description: "A URL Shortener Microservice where users can shorten a url.",
    type: "Back-end",
    language:"Javascript",
    technologies: ["Express", "MongoDB"],
    demoUrl: "https://url-shortener-microservices.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-URL-Shortener-Microservice",
    imageUrl: urlShortenerMicroserviceImg
  },
  {
    title: "Request Header Parser Microservice",
    description: "A microservice that allows the user to get their IP Address, Preferred Languages, and System Information of their current device.",
    type: "Back-end",
    language:"Javascript",
    technologies: ["Express"],
    demoUrl: "https://request-header-parser-microservice.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Request-Header-Parser-Microservice",
    imageUrl: requestHeaderParserMicroserviceImg
  },
  {
    title: "Timestamp Microservice",
    description: "A microservice that will return a unix and utc timestamp of the inputted time to the user.",
    type: "Back-end",
    language:"Javascript",
    technologies: ["Express"],
    demoUrl: "https://freecodecamp-project-timestamp.jordyf15.repl.co/",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Timestamp-Microservice",
    imageUrl: timestampMicroservice
  },
  {
    title: "Pomodoro Clock",
    description: "A web based pomodoro clock application.",
    type: "Front-end",
    language:"Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/jOWdaWV",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Pomodoro-Clock",
    imageUrl: pomodoroClockImg
  },
  {
    title: "React Calculator",
    description: "A web based calculator application.",
    type: "Front-end",
    language:"Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/BaogOGM",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Javascript-Calculator",
    imageUrl: reactCalculatorImg
  },
  {
    title: "Markdown Previewer",
    description: "A web based markdown previewer where the user can immediately see the preview of the markdown that they wrote.",
    type: "Front-end",
    language:"Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/PoZoKqz",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-MarkdownPreviewer",
    imageUrl: markdownPreviewerImg
  },
  {
    title: "Random Quote Machine",
    description: "A web based Random Quote Machine that displays new and random quote everytime the user clicks on the 'New Quote' button and also allows the user to share it on Twitter and Tumblr.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["React"],
    demoUrl: "https://codepen.io/jordyf15/full/OJyeoar",
    repoUrl: "https://github.com/jordyf15/FreeCodeCamp-Random-Quote-Machine",
    imageUrl: randomQuoteMachineImg
  },
  {
    title: "US GDP's Bar Chart",
    description: "A data visualization of The United States's GDP in the form of a Bar Chart.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/RwrzmWP",
    repoUrl: "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: usGdpImg
  },
  {
    title: "Professional Bicycle Racing Doping Cases's Scatter Plot",
    description: "A data visualization of The Professional Bicycle Racing Doping Cases in the form of a Scatter Plot",
    type: "Front-end",
    language: "Javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/XWdrBMw",
    repoUrl: "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: scatterPlotImg
  },
  {
    title: "Monthly Global Land-Surface Temperature's Heat Map",
    description: "A data visualization of The Monthly Global Land-Surface Temperature in the form of a Heat Map.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/WNwNZJo",
    repoUrl: "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: heatMapImg
  },
  {
    title: "US Educational Attainment's Choropleth Map",
    description: "A data visualization of The United States Educational Attainment in the form of a Choropleth Map",
    type: "Front-end",
    language: "Javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/LYNEQZQ",
    repoUrl: "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: usEducationalAttainmentChoroplethMapImg
  },
  {
    title: "Video Game Sale's Tree Map",
    description: "A data visualization of The Video Game Sale in the form of a Tree Map.",
    type: "Front-end",
    language: "Javascript",
    technologies: ["D3js"],
    demoUrl: "https://codepen.io/jordyf15/full/vYGOGdV",
    repoUrl: "https://github.com/jordyf15/Freecodecamp_Data_Visualization_Projects",
    imageUrl: videoGameSaleTreeImg
  },
]