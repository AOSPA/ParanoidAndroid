<template>
    <transition name="fade" mode="out-in">
        <Phone2View/>
    </transition>
    </template>
    
    <script>
    import Phone2View from "../components/phone2/Phone2View.vue";
    
    export default {
      name: "Phone2",
      components: {
        Phone2View
      },
    };
    </script>
    
    <style>
    .fade-enter-active,
    .fade-leave-active {
      transition-duration: 0.3s;
      transition-property: opacity;
      transition-timing-function: ease;
    }
    
    .fade-enter,
    .fade-leave-active {
      opacity: 0
    }
    </style>