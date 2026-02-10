<script setup>
import MenuItem from '@/zems/Front/Components/Widget/MenuItem.vue'

const viennoiserieItems = [
  {
    title: 'Classic Croissant',
    price: '$4.50',
    description: 'AOP Butter, 27 layers, honeycomb crumb.',
    image:
      'https://images.unsplash.com/photo-1530610476181-d83430b64dcd?auto=format&fit=crop&q=80&w=300',
  },
  {
    title: 'Pain au Chocolat',
    price: '$5.25',
    description: 'Valrhona 55% dark chocolate batons.',
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&q=80&w=300',
  },
  {
    title: 'Kouign-Amann',
    price: '$5.50',
    description: 'Breton caramelized butter cake.',
    image:
      'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=300',
  },
  {
    title: 'Almond Bostock',
    price: '$6.00',
    description: 'Brioche, frangipane, toasted almonds.',
    image:
      'https://images.unsplash.com/photo-1619681342686-218a599607eb?auto=format&fit=crop&q=80&w=300',
  },
]

const sourdoughItems = [
  {
    title: 'Country Loaf',
    price: '$9.00',
    description: 'Organic white & whole wheat blend. 48h ferment.',
    image:
      'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=300',
  },
  {
    title: 'Seeded Rye',
    price: '$10.00',
    description: 'Caraway, flax, sunflower seeds.',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300',
  },
  {
    title: 'Olive & Rosemary',
    price: '$11.00',
    description: 'Kalamata olives, fresh rosemary.',
    image:
      'https://images.unsplash.com/photo-1575234563462-23c3b01625f4?auto=format&fit=crop&q=80&w=300',
  },
  {
    title: 'Walnut Cranberry',
    price: '$12.00',
    description: 'Toasted walnuts, dried cranberries.',
    image:
      'https://images.unsplash.com/photo-1598373182133-52452f7691f6?auto=format&fit=crop&q=80&w=300',
  },
]
</script>

<template>
  <section class="menu-grid-section">
    <div class="container">
      <!-- Section: Viennoiserie -->
      <div class="menu-category">
        <h2 class="category-title">Viennoiserie</h2>
        <div class="menu-grid">
          <MenuItem v-for="item in viennoiserieItems" :key="item.title" v-bind="item" />
        </div>
      </div>

      <!-- Section: Sourdough -->
      <div class="menu-category">
        <h2 class="category-title">Sourdough</h2>
        <div class="menu-grid">
          <MenuItem v-for="item in sourdoughItems" :key="item.title" v-bind="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-grid-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-cream);
}

.menu-category {
  margin-bottom: var(--spacing-xl);
}

.menu-category:last-child {
  margin-bottom: 0;
}

.category-title {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-md);
  position: relative;
  display: inline-block;
}

.category-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 50px;
  height: 2px;
  background-color: var(--accent-gold);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md) var(--spacing-lg);
}

@media (max-width: 992px) {
  .menu-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
  }
}

@media (max-width: 768px) {
  .category-title {
    font-size: 2rem;
  }
}
</style>
