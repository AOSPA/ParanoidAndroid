const toogleMenu = () => {
    var menu = document.getElementsByClassName("menu")[0];
    menu.style.display = menu.style.display == 'none' ? 'block' : 'none'
}

window.onload = function () {

    !!localStorage.getItem('accent') ? setCssVar('--accent', localStorage.getItem('accent')) : null

    !!localStorage.getItem('bg') ? handlerBg(localStorage.getItem('bg')) : null

};

const colors = {
    "#ffffff": ['white', 'black'], // card, text for white
    "#000000": ['#090909', '#f7f7f7'], // card, text for black
    "default": ['#1C1C1C', '#f7f7f7', '#a97cf0', '#212121'] // card, text, accent, bg for default
}


const setAccent = obj => {
    var color = rbg2Hex(obj.style.backgroundColor);
    color === colors['default'][2] ?
        localStorage.removeItem('accent') :
        localStorage.setItem('accent', color)
    setCssVar("--accent", color)
}

const setBg = obj => {
    var color = rbg2Hex(obj.style.backgroundColor);
    color === colors['default'][3] ?
        localStorage.removeItem('bg') :
        localStorage.setItem('bg', color)
    handlerBg(color);
}

const handlerBg = hex => {

    color = !!colors[hex] ? colors[hex] : colors['default'];

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

const rbg2Hex = rgb => {
    rgb = rgb.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+)/i);
    return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : rgb;
}