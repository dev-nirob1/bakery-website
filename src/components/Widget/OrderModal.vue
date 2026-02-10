<script setup>
import { onMounted, onUnmounted } from 'vue'

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits(['close'])

const handleKeydown = (e) => {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="isOpen" class="modal-overlay" @click.self="emit('close')">
        <div class="order-modal">
          <button class="close-modal" @click="emit('close')">&times;</button>

          <h3 class="modal-title">Pre-Order</h3>
          <p class="modal-subtitle">Reserve your loaves for pickup tomorrow.</p>

          <form class="order-form" @submit.prevent>
            <div class="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div class="form-group">
              <input type="tel" placeholder="Phone Number" required />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Delivery Address" required />
            </div>
            <div class="form-group">
              <select required>
                <option value="" disabled selected>Select Items...</option>
                <option value="sourdough">Country Sourdough ($9)</option>
                <option value="croissant">Classic Croissant Box ($18)</option>
                <option value="morning-bun">Morning Bun Box ($20)</option>
              </select>
            </div>
            <div class="form-group">
              <label class="input-label">Pickup Time</label>
              <input type="time" value="09:00" required />
            </div>

            <button type="submit" class="submit-btn btn-outline">Confirm Reservation</button>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Start from top to allow scrolling */
  z-index: 2000;
  backdrop-filter: blur(4px);
  overflow-y: auto;
  padding: 60px 20px;
}

.order-modal {
  background: var(--bg-cream);
  padding: 50px;
  width: 100%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  margin: auto; /* Center vertically if space allows */
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 2rem;
  color: var(--text-primary);
  cursor: pointer;
  line-height: 1;
  transition: color 0.3s ease;
}

.close-modal:hover {
  color: var(--accent-gold);
}

.modal-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.modal-subtitle {
  color: var(--text-muted);
  margin-bottom: 30px;
  font-family: var(--font-body);
}

.order-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.input-label {
  font-family: var(--font-logo);
  color: var(--accent-gold);
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.order-form input,
.order-form select {
  width: 100%;
  padding: 15px 0;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  font-family: var(--font-body);
  font-size: 1rem;
  border-radius: 0;
  transition: border-bottom-color 0.3s ease;
}

.order-form input:focus,
.order-form select:focus {
  outline: none;
  border-bottom-color: var(--accent-gold);
}

.submit-btn {
  width: 100%;
  margin-top: 0.5rem;
  background: var(--text-primary);
  color: #fff;
  border: 1px solid var(--text-primary);
  padding: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 0;
  transition: all 0.3s ease;
}

.submit-btn:hover {
  background: var(--accent-gold);
  border-color: var(--accent-gold);
  color: #fff;
}

/* Modal Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active .order-modal {
  transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.modal-fade-enter-from .order-modal {
  transform: translateY(40px);
}

@media (max-width: 600px) {
  .order-modal {
    padding: 30px;
    width: 90%;
  }
}
</style>
