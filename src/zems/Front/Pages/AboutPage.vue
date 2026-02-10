<script setup>
import PageHero from '@/components/Section/PageHero.vue'
import StorySection from '@/zems/Front/Components/Section/StorySection.vue'
</script>

<template>
  <div class="about-page">
    <PageHero
      title="Our"
      italicTitle="Journey"
      bgImage="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000"
    />

    <main>
      <StorySection />
    </main>
  </div>
</template>

<style scoped>
.about-page {
  background-color: var(--bg-cream);
}
</style>
