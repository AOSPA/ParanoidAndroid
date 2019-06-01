<template>
  <div class="loadContainer">
    <div class="preloader-wrapper small active">
      <div class="spinner-layer spinner-accent-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loading"
};
</script>
<style>
.loadContainer {
  width: 100%;
  height: 150px;
  display: flex;
}
.spinner-accent-only {
  border-color: var(--accent);
}
.preloader-wrapper {
  margin: auto;
}
</style>
