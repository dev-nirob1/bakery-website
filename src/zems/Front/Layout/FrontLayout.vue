<script setup>
import { RouterView } from 'vue-router'
import NavbarSection from '@/components/Section/NavbarSection.vue'
import FooterSection from '@/components/Section/FooterSection.vue'
</script>
<template>
  <div class="layout-wrapper">
    <div class="texture-overlay"></div>
    <NavbarSection />
    <main>
      <RouterView />
    </main>
    <FooterSection />
  </div>
</template>

<style>
/* Texture Overlay and global utilities */
.texture-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.04;
  background-image: url('https://www.transparenttextures.com/patterns/cream-paper.png');
  pointer-events: none;
  z-index: 9999;
}

/* Global utility for scroll reveal or other shared styles if needed */
.image-reveal {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.image-reveal img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 1.2s ease;
  will-change: transform;
}

.image-reveal:hover img {
  transform: scale(1.05);
}
</style>
