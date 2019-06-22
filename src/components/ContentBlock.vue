<template>
    <div class="contentBlock is-flex">
        <transition name="fade">
            <div class="foreground" v-if="showContent">
                <slot></slot>
            </div>
        </transition>
        <div class="background" :style="{ backgroundImage: 'url(' + background + ')' }"></div>
        <div class="backgroundOverlay"></div>
    </div>
</template>

<script>
export default {
  name: 'contentblock',
  data: function data() {
    return {
      showContent: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showContent = true;
    }, 500);
  },
  props: {
    background: String,
  },
};
</script>

<style lang="scss" scoped>
.contentBlock {
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.background {
    height: 100vh;
    background-position: center center;
    background-size: cover;
    width: 100%;
    position: fixed;
}
.backgroundOverlay {
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.75);
    position: fixed;
}
.foreground {
    z-index: 1;
}

@media screen and (max-width: 680px) {
    .foreground {
        max-height: 100vh;
        margin-top: 115px;
        padding: 15px;
    }
    .background {
        background-size: cover;
    }
}
</style>
