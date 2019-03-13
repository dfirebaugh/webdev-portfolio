import portfolio from '../images/portfolio.jpg';
import rogue from '../images/roguelike.jpg';
import gol from '../images/gameoflife.jpg';
import um3 from '../images/um3.jpg';
import ttt from '../images/ttt.jpg';
import pclock from '../images/pclock.jpg';
import ultibot from '../images/ultibot.png';
import weather from '../images/weather.jpg';

let projects = [{
  name: 'hack-points',
  url: 'https://dfirebaugh.github.io/hack-points/',
  github: 'https://github.com/dfirebaugh/hack-points',
  image: '',
  tech: ["ReactJS", "Material-UI", "Javascript", "Docker"],
  fav: true
}, {
  name: 'Um3-Wooter',
  url: 'https://github.com/dfirebaugh/um3-wooter',
  github: 'https://github.com/dfirebaugh/um3-wooter',
  image: ultibot,
  tech: ['Go', "Docker"]
},
{
  name: 'Lunch-Roulette',
  url: 'https://lunch.dfire.io',
  github: 'https://github.com/dfirebaugh/lunch-roulette',
  tech: ["PHP", "Javascript", "Docker"]
},
{
  name: 'WebDev Portfolio',
  url: 'http://dfire.io',
  github: 'https://github.com/dfirebaugh/webdev-portfolio',
  image: portfolio,
  tech: ['ReactJS', 'Bootstrap', "Javascript"]
},
{
  name: 'RogueLike',
  url: 'https://dfirebaugh.github.io/roguelike-crawler/',
  github: 'https://github.com/dfirebaugh/roguelike-crawler',
  image: rogue,
  tech: ['ReactJS', "Javascript"]
},
{
  name: 'Game of Life',
  url: 'https://dfirebaugh.github.io/game-of-life/',
  github: 'https://github.com/dfirebaugh/game-of-life',
  image: gol,
  tech: ['ReactJS']
},
{
  name: 'Weather',
  url: 'https://dfirebaugh.github.io/weather-dashboard/',
  github: 'https://github.com/dfirebaugh/weather-dashboard',
  image: weather,
  tech: ['ReactJS', 'Bootstrap', "Javascript"]
},
{
  name: 'Ultimaker Web DashBoard',
  url: 'http://ultimaker.hackrva.org',
  github: 'https://github.com/dfirebaugh/um3-react-dashboard',
  image: um3,
  tech: ['ReactJS', "Javascript"]
},
{
  name: 'TicTacToe',
  url: 'https://codepen.io/dfire/full/xOxrJO/',
  codepen: 'https://codepen.io/dfire/pen/xOxrJO',
  image: ttt,
  tech: ['JQuery', "Javascript"]
},
{
  name: 'Pomodoro Clock',
  url: 'https://codepen.io/dfire/full/QEWpry/',
  codepen: 'https://codepen.io/dfire/pen/QEWpry',
  image: pclock,
  tech: ['JQuery', "Javascript"]
}
]




export default projects;
