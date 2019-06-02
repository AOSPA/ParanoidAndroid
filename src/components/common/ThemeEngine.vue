<template>
  <div>
    <a onclick="toogleMenu()" class="accent">
      <i id="settings" class="settings material-icons pointer">color_lens</i>
    </a>
    <div class="menu" style="display: none">
      <h6 class="accent">COLOR ENGINE</h6>
      <div class="line" style="margin-bottom: 12px;"></div>
      <div>
        <span class="accent">BACKGROUND</span>
        <ul>
          <li
            style="border: 1px solid #212121;background-color: #000"
            onclick="setBg(this)"
            class="colorview"
          ></li>
          <li style="background-color: #212121" onclick="setBg(this)" class="colorview"></li>
          <li
            style="border: 1px solid black; background-color: #fff"
            onclick="setBg(this)"
            class="colorview"
          ></li>
        </ul>
        <div style="clear: both"></div>
      </div>
      <div>
        <span class="accent">COLOR</span>
        <ul>
          <li style="background-color: #A97CF0" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #F34235" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #E81E62" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #9B26AF" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #3E50B4" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #02A8F3" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #009587" onclick="setAccent(this)" class="colorview"></li>

          <li style="background-color: #4BAE4F" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #CCDB39" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #FEC007" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #FE9700" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #FE5621" onclick="setAccent(this)" class="colorview"></li>

          <li style="background-color: #76FF03" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #6200EA" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #0091EA" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #D50000" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #21EF8B" onclick="setAccent(this)" class="colorview"></li>
          <li style="background-color: #EF4581" onclick="setAccent(this)" class="colorview"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "ThemeEngine",
}
</script>
