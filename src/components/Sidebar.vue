<template>
    <ul id="slide-out" class="sidenav">
    <div>
      <a class="bar-logo center" href="/">
        <img src="https://avatars0.githubusercontent.com/u/49829986?s=100&v=4">
        <h4 class="accent">KrakenProject</h4>
      </a>

      <div class="square searchbar">
        <div class="search-wrapper">
          <i class="material-icons is-s">search</i>
          <input style="width: 80%" type="text"
            placeholder="Type your device... " />
        </div>
      </div>
      <ul class="collapsible collapsible-accordion">
        <template >
          <li>
            <div class="collapsible-header">
              <i class="material-icons">phone_android</i>
              <span style="width: 90%">Brand</span>
              <i class="material-icons">arrow_drop_down</i>
            </div>

            <div class="collapsible-body">
              <ul>
                <template>
                  <li><a class="pointer devilist">
                      Device name (codename)</a></li>
                </template>
              </ul>
            </div>
          </li>
        </template>
      </ul>
    </div>
  </ul>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>