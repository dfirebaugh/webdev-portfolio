import portfolio from '../images/portfolio.jpg';
import rogue from '../images/roguelike.jpg';
import gol from '../images/gameoflife.jpg';
import um3 from '../images/um3.jpg';
import ttt from '../images/ttt.jpg';
import pclock from '../images/pclock.jpg';
import qgen from '../images/qgen.jpg';
import md from '../images/md.jpg';
import bar from '../images/bar.jpg';
import scatter from '../images/scatter.jpg';
import weather from '../images/weather.jpg';
import hrvaWeb from '../images/hrvaWeb.jpg';
import voting from '../images/voting.jpg';

let projects = [{
  name: 'Voting App',
  url: 'https://voting-app-df.herokuapp.com',
  github: 'https://github.com/dfirebaugh/voting-app',
  image: voting,
  tech: ['ReactJS', 'Express', 'NodeJS', 'MongoDB']
},
{
  name: 'WebDev Portfolio',
  url: 'http://dfire.io',
  github: 'https://github.com/dfirebaugh/webdev-portfolio',
  image: portfolio,
  tech: ['ReactJS', 'Bootstrap']
},
{
  name: 'RogueLike',
  url: 'https://dfirebaugh.github.io/roguelike-crawler/',
  github: 'https://github.com/dfirebaugh/roguelike-crawler',
  image: rogue,
  tech: ['ReactJS']
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
  tech: ['ReactJS', 'Bootstrap']
},
{
  name: 'Ultimaker Web DashBoard',
  url: 'http://ultimaker.hackrva.org',
  github: 'https://github.com/dfirebaugh/um3-react-dashboard',
  image: um3,
  tech: ['ReactJS']
},
{
  name: 'TicTacToe',
  url: 'https://codepen.io/dfire/full/xOxrJO/',
  codepen: 'https://codepen.io/dfire/pen/xOxrJO',
  image: ttt,
  tech: ['JQuery']
},
{
  name: 'Pomodoro Clock',
  url: 'https://codepen.io/dfire/full/QEWpry/',
  codepen: 'https://codepen.io/dfire/pen/QEWpry',
  image: pclock,
  tech: ['JQuery']
},
{
  name: 'Quote Generator',
  url: 'https://codepen.io/dfire/full/JGvmgG/',
  github: 'https://codepen.io/dfire/pen/JGvmgG',
  image: qgen,
  tech: ['JQuery']
},
]




export default projects;
