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
      localStorage.setItem("banner", "logo_dark.svg");
      localStorage.setItem("logo", "logo_dark.svg");
      setCssVar("--accent", "#71dba7");
      setCssVar("--background", "#191c1a");
      setCssVar("--container", "#7f9687");
      setCssVar("--buttonHighlight", "#24342a")
      setCssVar("--searchColor", "#000000");
      setCssVar("--card", "#24342a");
      setCssVar("--text", "#ffffff");
      setCssVar("--textHighlight", "#1a1b1b");
      setCssVar("--secondaryTextColor", "#272630");
      setCssVar("--selectedItemDescription", "#E6E1E5");
      setCssVar("--buttonBackground", "#1C1B1F");
      setCssVar("--buttonText", "#E6E1E5");
      setCssVar("--highlightSelection", "rgba(255,255,255, 0.05)");
      setCssVar("--downloadWallpaperBackground", "rgba(0, 0, 0, 0.7)")
      setCssVar("--downloadWallpaperBackgroundHover", "rgba(0, 0, 0, 0.9)")
      setCssVar("--downloadWallpaperColor", "white")
    } else {
      localStorage.setItem("theme", "white");
      localStorage.setItem("banner", "logo_light.svg");
      localStorage.setItem("logo", "logo_light.svg");
      setCssVar("--accent", "#006c48");
      setCssVar("--background", "#fbfdf8");
      setCssVar("--container", "#24342a");
      setCssVar("--buttonHighlight", "#afc7b7")
      setCssVar("--searchColor", "#afc7b7");
      setCssVar("--card", "#afc7b7");
      setCssVar("--text", "#494550");
      setCssVar("--textHighlight", "#ffffff");
      setCssVar("--secondaryTextColor", "#79737e");
      setCssVar("--selectedItemDescription", "#21035b");
      setCssVar("--buttonBackground", "#fdfbff");
      setCssVar("--buttonText", "gray");
      setCssVar("--highlightSelection", "rgba(0,0,0, 0.05)")
      setCssVar("--downloadWallpaperBackground", "rgba(255, 255, 255, 0.7)")
      setCssVar("--downloadWallpaperBackgroundHover", "rgba(255, 255, 255, 0.9)")
      setCssVar("--downloadWallpaperColor", "grey")
    }

    window.dispatchEvent(new CustomEvent("theme-key-localstorage-changed", {
      detail: {
        banner: localStorage.getItem("banner"),
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
