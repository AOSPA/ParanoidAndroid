window.onload = function () {
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  function toggleDarkMode(state) {
    localStorage.removeItem("theme");
    localStorage.removeItem("banner");
    localStorage.removeItem("logo");

    if (state) {
      localStorage.setItem("theme", "dark");
      localStorage.setItem("banner", "sapphire-beta-dark.webp");
      localStorage.setItem("logo", "logo_dark.webp");
      setCssVar("--accent", "#5485d8");
      setCssVar("--background", "#000000");
      setCssVar("--card", "#141621");
      setCssVar("--text", "#f7f7f7");
    } else {
      localStorage.setItem("theme", "white");
      localStorage.setItem("banner", "sapphire-beta-light.webp");
      localStorage.setItem("logo", "logo_light.webp");
      setCssVar("--accent", "#5485d8");
      setCssVar("--background", "#ffffff");
      setCssVar("--card", "#f8f8ff");
      setCssVar("--text", "#161616");
    }

    window.dispatchEvent(new CustomEvent("theme-key-localstorage-changed", {
      detail: {
        banner: localStorage.getItem("banner"),
        logo: localStorage.getItem("logo")
      },
    }));
  }

  toggleDarkMode(useDark.matches);
  useDark.addListener(evt => toggleDarkMode(evt.matches));
  window.addEventListener("DOMContentLoaded", load);
};

const setupMetaColor = (color) => {
  document.querySelector("meta[name='theme-color']").content = color;
  document.querySelector("meta[name='msapplication-TileColor']").content = color;
};

const setCssVar = (name, value) => {
  name == "--card" ? setupMetaColor(value) : null;
  document.getElementsByTagName("body")[0].style.setProperty(name, value);
};
