<template>
  <div v-if="visible" class="footer" :class="{ isWhite }">
    <!-- Removed the add button -->
  </div>
</template>

<script>
import bus, { EVENT_KEY } from '../utils/bus'

export default {
  name: 'BaseFooter',
  props: ['isWhite'],
  data() {
    return {
      visible: true
    }
  },
  created() {
    bus.on('setFooterVisible', (e) => (this.visible = e))
    bus.on(EVENT_KEY.ENTER_FULLSCREEN, () => (this.visible = false))
    bus.on(EVENT_KEY.EXIT_FULLSCREEN, () => (this.visible = true))
  },
  unmounted() {
    bus.off(EVENT_KEY.ENTER_FULLSCREEN)
    bus.off(EVENT_KEY.EXIT_FULLSCREEN)
  },
  methods: {
    $nav(path) {
      this.$router.push(path)
    },
    tab(index) {
      // Removed the navigation logic for the add button
    }
  }
}
</script>

<style scoped lang="less">
@import '../assets/less/index';

.footer {
  font-size: 14rem;
  position: fixed;
  width: 100%;
  height: var(--footer-height);
  z-index: 2;
  top: calc(var(--vh, 1vh) * 100 - var(--footer-height));
  background: var(--footer-color);
  color: white;
  display: flex;

  &.isWhite {
    background: white !important;
    color: #000 !important;
  }

  .l-button {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 16rem;

    .add-ctn {
      display: none; /* Hide the add button container */
    }
  }
}
</style>