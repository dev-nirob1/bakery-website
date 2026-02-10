<script setup>
import PageHero from '@/components/Section/PageHero.vue'
</script>

<template>
  <div class="contact-page">
    <PageHero
      title="Visit Us"
      bgImage="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=2000"
    />

    <main class="container py-content">
      <div class="contact-grid">
        <!-- Left: Info -->
        <div class="info-column">
          <div class="info-card">
            <div class="info-group">
              <span class="info-label">Location</span>
              <p class="info-value">128 Baker Street</p>
              <p class="info-value">London, UK W1U 6TY</p>
            </div>

            <div class="info-group">
              <span class="info-label">Hours</span>
              <p class="info-value">Tue - Fri: 07:00 - 16:00</p>
              <p class="info-value">Sat - Sun: 08:00 - 15:00</p>
              <p class="info-value" style="color: var(--text-muted); font-size: 0.9rem">
                (Closed Mondays)
              </p>
            </div>

            <div class="info-group">
              <span class="info-label">Contact</span>
              <p class="info-value">hello@luminabakery.com</p>
              <p class="info-value">+44 20 7946 0123</p>
            </div>
          </div>

          <div class="form-section">
            <h3 class="form-title">Drop us a Note</h3>
            <form class="contact-form" @submit.prevent>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <textarea rows="4" placeholder="Message"></textarea>
              <button type="submit" class="btn-outline">Send Message</button>
            </form>
          </div>
        </div>

        <!-- Right: Map -->
        <div class="map-frame">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.698377759628!2d-0.1596284842295717!3d51.518755679636965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a285629%3A0x6b69658098c43725!2s128%20Baker%20St%2C%20London%20W1U%206TY%2C%20UK!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.contact-page {
  background-color: var(--bg-cream);
}

.py-content {
  padding-top: 100px;
  padding-bottom: 100px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  margin-bottom: 50px;
}

.info-card {
  padding: 40px;
  border: 1px solid var(--border-subtle);
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
}

.info-group {
  margin-bottom: 40px;
}

.info-group:last-child {
  margin-bottom: 0;
}

.info-label {
  font-family: var(--font-logo);
  color: var(--accent-gold);
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-bottom: 15px;
  display: block;
  text-transform: uppercase;
}

.info-value {
  font-family: var(--font-body);
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--text-primary);
}

.form-section {
  margin-top: 60px;
}

.form-title {
  font-family: var(--font-heading);
  font-size: 2rem;
  margin-bottom: 30px;
  color: var(--text-primary);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 15px 0;
  border: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background: transparent;
  border-radius: 0;
  font-family: var(--font-body);
  font-size: 1rem;
  margin-bottom: 30px;
  transition: 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-bottom-color: var(--accent-gold);
}

.map-frame {
  width: 100%;
  height: 100%;
  min-height: 600px;
  background: #e5e5e5;
  position: relative;
  overflow: hidden;
}

.map-frame iframe {
  width: 100%;
  height: 100%;
  border: 0;
  transition: 0.5s;
}

.btn-outline {
  display: inline-block;
  padding: 15px 40px;
  border: 1px solid var(--text-muted);
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  text-decoration: none;
  background: transparent;
  cursor: pointer;
  border-radius: 0;
  transition: var(--transition-fast);
}

.btn-outline:hover {
  background: var(--text-primary);
  color: #fff;
  border-color: var(--text-primary);
}

@media (max-width: 992px) {
  .contact-grid {
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .py-content {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .map-frame {
    min-height: 400px;
    order: -1; /* Move map to top on mobile */
  }

  .info-card {
    padding: 30px;
  }
}
</style>
