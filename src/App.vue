<template>
  <div id="app">
    <transition name="slide-down">
      <NavBar v-if="showNav"/>
    </transition>
    <router-view v-if="showNav"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "app",
  components: {
    NavBar
  },
  data: function data() {
    return {
      showNav: false
    };
  },
  created() {
    setTimeout(() => {
      this.showNav = true;
    }, 500);
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Voces|Roboto:300,400");
@import url("https://use.fontawesome.com/releases/v5.2.0/css/all.css");
html,
body {
  background-color: black;
}
// Animations
.slide-down-enter-active {
  transition: all 1s;
}
.slide-down-enter,
.slide-down-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
