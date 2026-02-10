<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  italicTitle: {
    type: String,
    default: '',
  },
  bgImage: {
    type: String,
    default:
      'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=2000',
  },
})

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

const bgTransform = computed(() => `translateY(${scrollY.value * 0.4}px)`)
const contentTransform = computed(() => `translateY(${scrollY.value * -0.1}px)`)
const contentOpacity = computed(() => 1 - scrollY.value / 500)
</script>

<template>
  <header class="page-hero">
    <div class="hero-bg-container">
      <img :src="bgImage" :alt="title" class="hero-bg-img" id="hero-img" />
    </div>
    <div class="hero-content">
      <h1 class="hero-title">
        {{ title }} <br />
        <em v-if="italicTitle">{{ italicTitle }}</em>
      </h1>
    </div>
  </header>
</template>

<style scoped>
.page-hero {
  height: 60vh;
  min-height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end; /* As modified by USER */
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
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.2) 50%,
    rgba(0, 0, 0, 0.5) 100%
  );
  z-index: 2;
  pointer-events: none;
}

.hero-bg-img {
  width: 100%;
  height: 140%; /* Extra height for parallax */
  object-fit: cover;
  will-change: transform;
  transform: v-bind('bgTransform');
}

.hero-content {
  position: relative;
  z-index: 10;
  color: #fff;
  will-change: transform, opacity;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  padding: 0 20px 80px; /* Added some bottom padding since it's flex-end */
  transform: v-bind('contentTransform');
  opacity: v-bind('contentOpacity');
}

.hero-title {
  font-family: var(--font-heading);
  font-size: 4rem;
  color: #ffffff;
  line-height: 1.1;
  font-weight: 400;
}

.hero-title em {
  font-style: italic;
  font-family: var(--font-heading);
}

@media (max-width: 768px) {
  .page-hero {
    height: 50vh;
  }

  .hero-title {
    font-size: 2.8rem;
  }
}
</style>
