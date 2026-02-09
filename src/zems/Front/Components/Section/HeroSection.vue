<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollY = ref(0)
const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section class="hero-wrapper">
    <div class="hero-bg-container">
      <img
        src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000"
        alt="Rustic Bakery Table"
        class="hero-bg-img"
        id="hero-img"
        :style="{ transform: `translateY(${scrollY * 0.4}px)` }"
      />
    </div>
    <div
      class="hero-content"
      id="hero-content"
      :style="{ transform: `translateY(${scrollY * -0.1}px)`, opacity: 1 - scrollY / 700 }"
    >
      <span class="hero-subtitle">EST. 2024</span>
      <h1 class="hero-title">The Art of <br /><em>Slow</em> Baking</h1>
      <p class="hero-desc">Flour, water, time, and patience.</p>
    </div>
  </section>
</template>

<style scoped>
.hero-wrapper {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #000;
}

.hero-bg-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
}

.hero-bg-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0.2) 30%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-bg-img {
  width: 100%;
  height: 120%; /* Increased height for parallax range */
  object-fit: cover;
  will-change: transform;
}

.hero-content {
  position: relative;
  z-index: 10;
  color: #fff;
  will-change: transform, opacity;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  display: block;
  font-family: var(--font-body);
  font-size: 0.9rem;
  letter-spacing: 5px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #fff;
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 5rem;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 30px;
  font-weight: 400;
}

.hero-title em {
  font-style: italic;
  font-family: var(--font-heading);
}

.hero-desc {
  font-family: var(--font-body);
  font-size: 1.2rem;
  margin-top: 20px;
  color: #fff;
  font-weight: 300;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 0.8rem;
    letter-spacing: 3px;
  }
}
</style>
