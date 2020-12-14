window.onload = function () {

  !!localStorage.getItem('accent') ? setCssVar('--accent', localStorage.getItem('accent')) : null

  !!localStorage.getItem('bg') ? handlerBg(localStorage.getItem('bg')) : null

  renderList(backgrounds, setBg, "backgrounds-render");
  renderList(colors, setAccent, "colors-render");

};

const toogleMenu = () => {
  let menu = document.getElementsByClassName("menu")[0];
  menu.style.display = menu.style.display == 'none' ? 'block' : 'none'
}

const defaultColors = {
  "#ffffff": ['white', '#161616'], // card, text for white
  "#000000": ['#090909', '#f7f7f7'], // card, text for black
  "default": ['#1C1C1C', '#f7f7f7', '#5485d8', '#212121'] // card, text, accent, bg for default
}

const backgrounds = ['#ffffff', '#212121', '#000000']
const colors = ['#5485d8', '#2180EA', "#167C80", "#00B1E5", "#38853B", "#FF5722", "#E6125E", "#673AB7", "#D0422D", "#F4AC45", "#996A5A", "#A97CF0", "#A4ADE9", "#84DFE2", "#FFC68A", "#7E8CE0", "#36C7D0", "#FFAF5F"]

const renderList = (colors, applier, placeID) => {
  let ulEl = document.createElement('ul')

  colors.forEach((color) => {
    let liEl = document.createElement('li')
    liEl.setAttribute("class", "colorview");
    liEl.style.backgroundColor = color;
    liEl.onclick = () => {
      applier(color)
    };
    ulEl.appendChild(liEl);
  });

  let render = document.getElementById(placeID);
  render.appendChild(ulEl);
}


const setAccent = hex => {
  hex === defaultColors['default'][2] ?
    localStorage.removeItem('accent') :
    localStorage.setItem('accent', hex)
  setCssVar("--accent", hex)
}

const setBg = hex => {
  hex === defaultColors['default'][3] ?
    localStorage.removeItem('bg') :
    localStorage.setItem('bg', hex)
  handlerBg(hex);
}

const handlerBg = hex => {

  color = !!defaultColors[hex] ? defaultColors[hex] : defaultColors['default'];

  setCssVar("--background", hex);
  setCssVar("--card", color[0]);
  setCssVar("--text", color[1]);
}

const setupMetaColor = color => {
  document.querySelector("meta[name='theme-color']").content = color;
  document.querySelector("meta[name='msapplication-TileColor']").content = color;
}

const setCssVar = (name, value) => {
  name == '--accent' ? setupMetaColor(value) : null;
  document.getElementsByTagName("body")[0].style.setProperty(name, value)
}
