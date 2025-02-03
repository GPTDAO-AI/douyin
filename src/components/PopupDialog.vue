<script setup lang="ts">
defineProps({
  visible: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}
</script>

<template>
  <Teleport to="body">
    <div v-if="visible" class="popup-overlay" @click="handleClose">
      <div class="popup-content" @click.stop>
        <div class="popup-close" @click="handleClose">×</div>
        <p class="popup-text">✨ Enjoy these videos? Let's explore more!</p>
        <button class="join-button" onclick="window.open('https://t.me/lol_super_factory', '_blank')">
          Join the Channel
        </button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  min-width: 300px;
  text-align: center;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #666;
}

.join-button {
  background: #0088cc;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
}

.join-button:hover {
  background: #006699;
}

.popup-text {
  margin-bottom: 20px;
  font-size: 16px;
}
</style> 