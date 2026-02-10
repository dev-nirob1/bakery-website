<script setup>
import PageHero from '@/components/Section/PageHero.vue'
import MenuGridSection from '@/zems/Front/Components/Section/MenuGridSection.vue'
</script>

<template>
  <div class="menu-page">
    <PageHero
      title="Seasonal"
      italicTitle="Offerings"
      bgImage="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=2000"
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
