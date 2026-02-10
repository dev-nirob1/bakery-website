<template>
  <section class="story-section">
    <div class="container">
      <!-- Pull Quote -->
      <blockquote class="pull-quote">
        "Bread is not an invention. It is a relationship between the earth, the grain, and the
        baker's hands."
      </blockquote>

      <!-- Chapter 1: The Origin -->
      <section class="story-block">
        <div class="story-visual">
          <div class="image-reveal">
            <img
              src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800"
              alt="Wheat Stalks"
            />
          </div>
        </div>
        <div class="story-content">
          <span class="chapter-label">Chapter 01</span>
          <h2 class="section-title">The Soil</h2>
          <p class="section-desc">
            We source our heritage grains specifically from regenerative farms in the Cotswolds. The
            farmers we work with believe that healthy soil creates complex flavor profiles that no
            additive can mimic. We mill our flour fresh every morning to preserve the volatile oils
            and nutrients that factory processing destroys.
          </p>
        </div>
      </section>

      <!-- Chapter 2: The Process (Reversed) -->
      <section class="story-block reversed">
        <div class="story-visual">
          <div class="image-reveal">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
              alt="Sourdough Starter"
            />
          </div>
        </div>
        <div class="story-content">
          <span class="chapter-label">Chapter 02</span>
          <h2 class="section-title">The Wait</h2>
          <p class="section-desc">
            Modern bread is rushed. Ours is not. Our signature levain (wild yeast starter) is over
            12 years old. Every loaf undergoes a cold fermentation process lasting exactly 48 hours.
            This slow rise breaks down gluten, unlocks deep fermented notes, and creates that
            signature open crumb structure that defines a true artisan loaf.
          </p>
        </div>
      </section>

      <!-- Chapter 3: The Heat -->
      <section class="story-block">
        <div class="story-visual">
          <div class="image-reveal">
            <img
              src="https://images.unsplash.com/photo-1586549042247-a4dc7d9673b5?auto=format&fit=crop&q=80&w=800"
              alt="Wood Fired Oven"
            />
          </div>
        </div>
        <div class="story-content">
          <span class="chapter-label">Chapter 03</span>
          <h2 class="section-title">The Fire</h2>
          <p class="section-desc">
            The final transformation happens on the stone hearth of our deck ovens. The intense
            bottom heat ensures a caramelized, singing crust while the steam injection allows the
            loaf to spring to its full potential. The result is a contrast of textures: shattered
            crispness on the outside, and a custard-like softness within.
          </p>
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped>
.story-section {
  padding: 100px 0;
  background-color: var(--bg-cream);
}

.story-block {
  display: flex;
  align-items: center;
  gap: 80px;
  margin-bottom: 120px;
}

.story-block.reversed {
  flex-direction: row-reverse;
}

.story-content {
  flex: 1;
}

.story-visual {
  flex: 1;
  position: relative;
}

.image-reveal {
  position: relative;
  overflow: hidden;
}

.story-visual img {
  width: 100%;
  box-shadow: 20px 20px 0 rgba(212, 175, 55, 0.1);
  display: block;
  transition: transform 0.8s var(--ease-out);
}

.story-block:hover .story-visual img {
  transform: scale(1.05);
}

.chapter-label {
  font-family: var(--font-logo);
  font-size: 0.9rem;
  letter-spacing: 3px;
  color: var(--accent-gold);
  text-transform: uppercase;
  display: block;
  margin-bottom: 20px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 3rem;
  color: var(--text-primary);
  margin-bottom: 30px;
  line-height: 1.1;
}

.section-desc {
  font-family: var(--font-body);
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--text-muted);
  text-align: left;
}

.pull-quote {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  line-height: 1.4;
  font-style: italic;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 120px;
  color: var(--text-primary);
  position: relative;
}

.pull-quote::before {
  content: '“';
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  color: var(--accent-gold);
  opacity: 0.2;
}

@media (max-width: 992px) {
  .story-block {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .story-section {
    padding: 60px 0;
  }

  .story-block,
  .story-block.reversed {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 80px;
  }

  .story-visual img {
    box-shadow: 10px 10px 0 rgba(212, 175, 55, 0.1);
  }

  .pull-quote {
    font-size: 1.6rem;
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 2.2rem;
  }
}
</style>
