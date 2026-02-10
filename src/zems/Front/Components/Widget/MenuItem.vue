<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <article class="menu-item">
    <div class="item-thumb-wrap">
      <img :src="image" class="item-thumb" :alt="alt || title" />
    </div>
    <div class="item-content">
      <div class="item-header">
        <h4 class="item-title">{{ title }}</h4>
        <span class="item-price">{{ price }}</span>
      </div>
      <p class="item-desc">{{ description }}</p>
    </div>
  </article>
</template>

<style scoped>
.menu-item {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-subtle);
  transition: transform 0.3s var(--ease-out);
}

.menu-item:hover {
  transform: translateX(10px);
}

.item-thumb-wrap {
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.item-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s var(--ease-out);
}

.menu-item:hover .item-thumb {
  transform: scale(1.1);
}

.item-content {
  flex-grow: 1;
}

.item-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
}

.item-title {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  color: var(--text-primary);
  font-weight: 400;
  margin: 0;
}

.item-price {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--accent-gold);
  font-weight: 600;
}

.item-desc {
  font-family: var(--font-body);
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 768px) {
  .item-title {
    font-size: 1.2rem;
  }

  .item-thumb-wrap {
    width: 80px;
    height: 80px;
  }
}
</style>
