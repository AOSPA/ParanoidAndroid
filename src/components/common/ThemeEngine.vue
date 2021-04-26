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
        <div id="backgrounds-render"></div>
        <div style="clear: both"></div>
      </div>
      <div>
        <span class="accent">COLOR</span>
        <div id="colors-render"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ThemeEngine',
};
</script>
