import portfolio from '../images/portfolio.jpg';
import rogue from '../images/roguelike.jpg';
import gol from '../images/gameoflife.jpg';
// import recipe from '../images/recipe.jpg';
import um3 from '../images/um3.jpg';
import markdown from '../images/markdown.jpg';
import fcc from '../images/fcc.jpg';
import ttt from '../images/ttt.jpg';
import pclock from '../images/pclock.jpg';
import qgen from '../images/qgen.jpg';
import md from '../images/md.jpg';
import speed from '../images/speed.jpg';
import bar from '../images/bar.jpg';
import scatter from '../images/scatter.jpg';
import weather from '../images/weather.jpg';

let projects = [{
  name:'WebDev Portfolio',
  url:'http://dfire.io',
  github:'https://github.com/dfirebaugh/webdev-portfolio',
  image:portfolio,
  tech:['ReactJS','Bootstrap']
},
{
  name:'RogueLike',
  url:'https://dfirebaugh.github.io/roguelike-crawler/',
  github:'https://github.com/dfirebaugh/roguelike-crawler',
  image:rogue,
  tech:['ReactJS']
},
{
  name:'Game of Life',
  url:'https://dfirebaugh.github.io/game-of-life/',
  github:'https://github.com/dfirebaugh/game-of-life',
  image:gol,
  tech:['ReactJS']
},
// {
//   name:'Recipe Book',
//   url:'https://codepen.io/dfire/full/JJvNJg/',
//   github:'https://github.com/dfirebaugh/recipe-book',
//   image:recipe,
//   tech:['ReactJS']
// },
{
  name:'Weather',
  url:'https://dfirebaugh.github.io/weather-dashboard/',
  github:'https://github.com/dfirebaugh/weather-dashboard',
  image:weather,
  tech:['ReactJS', 'Bootstrap']
},
{
  name:'Ultimaker Web DashBoard',
  url:'http://ultimaker.hackrva.org',
  github:'https://github.com/dfirebaugh/um3-react-dashboard',
  image:um3,
  tech:['ReactJS']
},
{
  name:'MarkDown Previewer',
  url:'https://dfirebaugh.github.io/markdown-previewer/',
  github:'https://github.com/dfirebaugh/markdown-previewer',
  image:markdown,
  tech:['ReactJS']
},
{
  name:'FCC LeaderBoard',
  codepen:'https://codepen.io/dfire/pen/LZbBYN',
  url:'https://codepen.io/dfire/full/LZbBYN/',
  image:fcc,
  tech:['ReactJS']
},
{
  name:'TicTacToe',
  url:'https://codepen.io/dfire/full/xOxrJO/',
  codepen:'https://codepen.io/dfire/pen/xOxrJO',
  image:ttt,
  tech:['JQuery']
},
{
  name:'Pomodoro Clock',
  url:'https://codepen.io/dfire/full/QEWpry/',
  codepen:'https://codepen.io/dfire/pen/QEWpry',
  image:pclock,
  tech:['JQuery']
},
{
  name:'Quote Generator',
  url:'https://codepen.io/dfire/full/JGvmgG/',
  github:'https://codepen.io/dfire/pen/JGvmgG',
  image:qgen,
  tech:['JQuery']
},
{
  name:'moonDefender',
  url:'https://games.hackrva.org/moon-defender/',
  github:'https://github.com/dfirebaugh/moon-defender',
  image:md,
  tech:['Canvas']
},
{
  name:'SpeedTest',
  url:'http://dfire.io/speedtest/index.php.html',
  image:speed,
  tech:['Canvas']
},
{
  name:'url shortener-api',
  url:'https://dfire-url-shortener.glitch.me/www.google.com',
  github:'https://github.com/dfirebaugh/url_shortener',
  image:'',
  tech:['ExpressJS','NodeJS','MongoDB']
},
{
  name:'headerparser-api',
  url:'https://dfire-headparser-api.glitch.me/',
  github:'https://github.com/dfirebaugh/headerparser-api',
  image:'',
  tech:['ExpressJS','NodeJS']
},
{
  name:'timestamp-api',
  url:'https://dfire-timestamp-api.glitch.me',
  github:'https://github.com/dfirebaugh/timestamp-api',
  image:'',
  tech:['ExpressJS','NodeJS']
},
{
  name:'BarChart',
  url:'https://codepen.io/dfire/full/QOMgrV/',
  codepen:'https://codepen.io/dfire/pen/QOMgrV',
  image:bar,
  tech:['D3js']
},
{
  name:'ScatterPlot',
  url:'https://codepen.io/dfire/full/pdwOKb/',
  codepen:'https://codepen.io/dfire/pen/pdwOKb',
  image:scatter,
  tech:['D3js']
},{
  name:'File Metadata Microservice',
  url:'https://dfire-file-metadata-microservice.glitch.me',
  github:'https://github.com/dfirebaugh/file-metadata-microservice',
  image:'',
  tech:['ExpressJS','NodeJS']
},{
  name:'Image Search Abstraction Layer',
  url:'https://dfire-image-search-abstraction.glitch.me/imagesearch/lol cats',
  github:'https://github.com/dfirebaugh/image-search-abstraction-layer',
  image:'',
  tech:['ExpressJS','NodeJS','MongoDB']
}



]




export default projects ;
