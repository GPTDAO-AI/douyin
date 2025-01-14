<template>
  <div class="indicator-home" :class="{ isLight }">
    <div class="notice" :style="noticeStyle"><span>下拉刷新内容</span></div>
    <Loading :style="loadingStyle" class="loading" style="width: 40rem" :is-full-screen="false" />
  </div>
</template>

<script>
import Loading from '../../../components/Loading.vue'
import bus from '../../../utils/bus'
import { mapState } from 'pinia'
import { useBaseStore } from '@/store/pinia'

export default {
  name: 'IndicatorHome',
  components: {
    Loading
  },
  props: {
    loading: {
      type: Boolean,
      default() {
        return false
      }
    },
    name: {
      type: String,
      default: () => ''
    },
    index: {
      type: Number,
      default: () => 0
    },
    isLight: {
      type: Boolean,
      default: () => false
    }
  },
  setup() {
    const baseStore = useBaseStore()
    return { baseStore }
  },
  data() {
    return {
      moveY: 0
    }
  },
  computed: {
    ...mapState(useBaseStore, ['judgeValue', 'homeRefresh']),
    transform() {
      return `translate3d(0, ${this.moveY - this.judgeValue > this.homeRefresh ? this.homeRefresh : this.moveY - this.judgeValue}px, 0)`
    },
    noticeStyle() {
      if (this.loading) {
        return { opacity: 0 }
      }
      if (this.moveY) {
        return {
          opacity: (this.moveY - this.judgeValue) / (this.homeRefresh / 2) - 0.5,
          transform: this.transform
        }
      }
      return { opacity: 0 }
    },
    loadingStyle() {
      if (this.loading) {
        return { opacity: 1, 'transition-duration': '300ms' }
      }
      if (this.moveY) {
        return {
          opacity: (this.moveY - this.judgeValue) / (this.homeRefresh / 2) - 0.5,
          transform: this.transform
        }
      }
      return {}
    }
  },
  mounted() {
    bus.on(this.name + '-moveY', (e) => {
      this.moveY = e
    })
    bus.on(this.name + '-end', this.end)
  },
  unmounted() {
    bus.off(this.name + '-moveY')
    bus.off(this.name + '-end')
  },
  methods: {
    end() {
      this.moveY = 0
    }
  }
}
</script>

<style scoped lang="less">
.indicator-home {
  position: absolute;
  font-size: 16rem;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  color: white;
  height: var(--home-header-height);
  transition: all 0.3s;
  font-weight: bold;

  .notice {
    opacity: 0;
    top: 0;
    position: absolute;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loading {
    opacity: 0;
    top: 7rem;
    right: 7rem;
    position: absolute;
  }
}
</style>