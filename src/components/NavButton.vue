<template>
    <div class="column has-text-centered">
        <a v-on:click="navigate(link)" :target="blank && '_blank'">
            <p :class="[{ active: active }, 'navLink']">
                {{ text }}
            </p>
        </a>
    </div>
</template>

<script>
export default {
  name: 'navbutton',
  props: {
    text: String,
    link: String,
    active: Boolean,
    click: Function,
    blank: Boolean,
  },
  methods: {
    navigate: async function navigate(name) {
      if (name.startsWith('http')) {
        return this.blank ? window.open(name, '_blank') : window.location.replace(name);
      }
      await this.$router.push({
        name,
      });
      return this.$props.click();
    },
  },
};
</script>

<style lang="scss" scoped>
    .navLink {
        font-variant: small-caps;
        padding: 15px 0;
        color: black;
        transition: color .3s;
        &:hover, &.active {
            color: lightgrey;
        }
    }
</style>
