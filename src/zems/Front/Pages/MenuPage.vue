<script setup>
import PageHero from '@/components/Section/PageHero.vue'
import MenuGridSection from '@/zems/Front/Components/Section/MenuGridSection.vue'
</script>

<template>
  <div class="menu-page">
    <PageHero
      title="Seasonal Offerings"
      bgImage="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000"
    />

    <main>
      <MenuGridSection />
    </main>
  </div>
</template>

<style scoped>
.menu-page {
  background-color: var(--bg-cream);
}
</style>
