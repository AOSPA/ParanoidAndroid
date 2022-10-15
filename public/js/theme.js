window.addEventListener("DOMContentLoaded", () => {
  applyTheme();
});

window.onload = function () {
  showContent();
}

function applyTheme() {
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  function toggleDarkMode(state) {

    if (state) {
      localStorage.setItem("theme", "dark");
      localStorage.setItem("banner", "logo_d.svg");
      localStorage.setItem("logo", "logo_dark.webp");
      setCssVar("--accent", "#fedcda");
      setCssVar("--background", "#201a1a");
      setCssVar("--container", "rgb(255, 218, 217)");
      setCssVar("--buttonHighlight", "#372f2d")
      setCssVar("--searchColor", "#000000");
      setCssVar("--card", "#372f2d");
      setCssVar("--text", "#faf0ef");
      setCssVar("--textHighlight", "#1a1b1b");
      setCssVar("--secondaryTextColor", "#272630");
      setCssVar("--selectedItemDescription", "#E6E1E5");
      setCssVar("--buttonBackground", "#1C1B1F");
      setCssVar("--buttonText", "#E6E1E5");
      setCssVar("--highlightSelection", "rgba(255,255,255, 0.05)");
    } else {
      localStorage.setItem("theme", "white");
      localStorage.setItem("banner", "logo.svg");
      localStorage.setItem("logo", "logo_light.webp");
      setCssVar("--accent", "#904a48");
      setCssVar("--background", "#fceeed");
      setCssVar("--container", "#904a48");
      setCssVar("--buttonHighlight", "#eae2df")
      setCssVar("--searchColor", "#fffbfd");
      setCssVar("--card", "#fff8f6");
      setCssVar("--text", "#494550");
      setCssVar("--textHighlight", "#ffffff");
      setCssVar("--secondaryTextColor", "#79737e");
      setCssVar("--selectedItemDescription", "#21035b");
      setCssVar("--buttonBackground", "#fdfbff");
      setCssVar("--buttonText", "gray");
      setCssVar("--highlightSelection", "rgba(0,0,0, 0.05)")
    }

    window.dispatchEvent(new CustomEvent("theme-key-localstorage-changed", {
      detail: {
        //banner: localStorage.getItem("banner"),
        logo: localStorage.getItem("logo"),
        theme: localStorage.getItem("theme")
      },
    }));
  }

  toggleDarkMode(useDark.matches);
  useDark.addListener(evt => toggleDarkMode(evt.matches));
};


function showContent() {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
}

const setupMetaColor = (color) => {
  document.querySelector("meta[name='theme-color']").content = color;
  document.querySelector("meta[name='msapplication-TileColor']").content = color;
};

const setCssVar = (name, value) => {
  name == "--background" ? setupMetaColor(value) : null;
  document.getElementsByTagName("body")[0].style.setProperty(name, value);
};
