<script setup>
defineProps({
  image: String,
  title: String,
  price: String,
  alt: String,
})
</script>

<template>
  <article class="menu-card">
    <div class="menu-img-wrap">
      <img :src="image" :alt="alt || title" loading="lazy" />
    </div>
    <div class="menu-info">
      <h3 class="menu-title">{{ title }}</h3>
      <p class="menu-price">{{ price }}</p>
    </div>
  </article>
</template>

<style scoped>
.menu-card {
  text-align: center;
  padding: 1rem;
  border: 1px solid var(--border-subtle);
  background: #fff;
  transition:
    transform 0.4s var(--ease-out),
    border-color 0.4s var(--ease-out),
    box-shadow 0.4s var(--ease-out);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.menu-card:hover {
  border-color: var(--accent-gold);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

.menu-img-wrap {
  position: relative;
  aspect-ratio: 3 / 3; /* Taller aspect ratio as requested */
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: var(--bg-cream);
}

.menu-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out);
  display: block;
}

.menu-card:hover .menu-img-wrap img {
  transform: scale(1.1);
}

.menu-title {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-bottom: 4px;
  font-weight: 400;
}

.menu-price {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--accent-gold);
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .menu-title {
    font-size: 1.1rem;
  }
}
</style>
