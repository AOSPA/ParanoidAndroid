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
      localStorage.setItem("banner", "banner-dark.webp");
      localStorage.setItem("logo", "logo_dark.webp");
      setCssVar("--accent", "#D0BCFF");
      setCssVar("--background", "#1C1B1F");
      setCssVar("--container", "rgba(100,83,148, 0.35)");
      setCssVar("--buttonHighlight", "#4F378B")
      setCssVar("--searchColor", "#000000");
      setCssVar("--card", "#272630");
      setCssVar("--text", "#ffffff");
      setCssVar("--textHighlight", "#ffffff");
      setCssVar("--secondaryTextColor", "#272630");
      setCssVar("--selectedItemDescription", "#E6E1E5");
      setCssVar("--buttonBackground", "#1C1B1F");
      setCssVar("--buttonText", "#E6E1E5");
      setCssVar("--highlightSelection", "rgba(255,255,255, 0.05)");
    } else {
      localStorage.setItem("theme", "white");
      localStorage.setItem("banner", "banner-light.webp");
      localStorage.setItem("logo", "logo_light.webp");
      setCssVar("--accent", "#4958a9");
      setCssVar("--container", "#eadeff");
      setCssVar("--buttonHighlight", "#D0BCFF")
      setCssVar("--searchColor", "#fffbfd");
      setCssVar("--background", "#eae3f1");
      setCssVar("--card", "#f3edf8");
      setCssVar("--text", "#494550");
      setCssVar("--textHighlight", "#272630");
      setCssVar("--secondaryTextColor", "#79737e");
      setCssVar("--selectedItemDescription", "#21035b");
      setCssVar("--buttonBackground", "#fdfbff");
      setCssVar("--buttonText", "gray");
      setCssVar("--highlightSelection", "rgba(0,0,0, 0.05)")
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
