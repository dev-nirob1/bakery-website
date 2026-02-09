<template>
  <section class="philosophy-section" id="story">
    <div class="container grid-2">
      <div class="text-block">
        <h2 class="section-title">
          <span class="subtitle">Philosophy</span>
          Simplicity is the Ultimate Sophistication
        </h2>
        <p class="section-desc">
          We believe in honoring the grain. Our 48-hour fermentation process instead of industrial
          shortcuts unlocks flavors that cannot be rushed. Every loaf tells a story of patience,
          temperature, and tradition.
        </p>
        <router-link to="/story" class="btn-outline">Read Our Journey</router-link>
      </div>
      <div class="image-reveal">
        <img
          src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000"
          alt="Baker kneading dough"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.philosophy-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-cream);
  position: relative;
  z-index: 10;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 30px;
}

.section-title .subtitle {
  display: block;
  font-family: var(--font-body);
  font-size: 0.9rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: var(--accent-gold);
  margin-bottom: 15px;
}

.section-desc {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin-bottom: 40px;
}

.btn-outline {
  display: inline-block;
  padding: 15px 35px;
  border: 1px solid var(--text-muted);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  text-decoration: none;
  transition: var(--transition-fast);
}

.btn-outline:hover {
  background: var(--text-primary);
  color: #fff;
  border-color: var(--text-primary);
}

.image-reveal {
  position: relative;
  overflow: hidden;
  border-radius: 4px; /* Subtle rounding for a premium feel */
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
}

.image-reveal img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.8s var(--ease-out);
}

.image-reveal:hover img {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .grid-2 {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .section-title {
    font-size: 2.5rem;
  }

  .philosophy-section {
    padding: var(--spacing-lg) 0;
  }
}
</style>
