<template>
  <section class="location-section" id="visit">
    <div class="container">
      <div class="location-grid">
        <div class="location-info">
          <div class="info-content">
            <i class="fas fa-map-marker-alt location-icon"></i>
            <h2 class="section-title">
              <span class="subtitle">Find Us</span>
              Visit Our Bakery
            </h2>
            <div class="address-block">
              <p class="address-text">128 Baker Street, London</p>
              <p class="section-desc">Open Daily: 7am - 4pm</p>
            </div>
            <div class="contact-links">
              <a href="tel:+442079460000" class="contact-item">
                <i class="fas fa-phone"></i> +44 207 946 0000
              </a>
              <a href="mailto:hello@slowbake.uk" class="contact-item">
                <i class="fas fa-envelope"></i> hello@slowbake.uk
              </a>
            </div>
          </div>
        </div>

        <div class="location-map">
          <div class="map-container image-reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.432328475252!2d-0.1609117233783707!3d51.523616071816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a96064d%3A0xd96f3c545f46401!2s128%20Baker%20St%2C%20London%20NW1%206AL%2C%20UK!5e0!3m2!1sen!2sbd!4v1710100000000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No props or state needed for now
</script>

<style scoped>
.location-section {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-cream);
  position: relative;
  z-index: 10;
}

.location-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.location-icon {
  font-size: 2.5rem;
  color: var(--accent-gold);
  margin-bottom: 25px;
  display: block;
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

.address-block {
  margin-bottom: 40px;
}

.address-text {
  font-family: var(--font-heading);
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 10px;
}

.section-desc {
  font-family: var(--font-body);
  font-size: 1.1rem;
  color: var(--text-muted);
}

.contact-links {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-body);
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1rem;
  transition: var(--transition-fast);
}

.contact-item i {
  color: var(--accent-gold);
  width: 20px;
}

.contact-item:hover {
  color: var(--accent-gold);
  transform: translateX(5px);
}

.map-container {
  height: 450px;
  width: 100%;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);
  background: var(--bg-cream);
}

.map-container iframe {
  filter: grayscale(0.2) contrast(1.1);
}

@media (max-width: 992px) {
  .location-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .location-info {
    text-align: center;
  }

  .contact-links {
    align-items: center;
  }

  .section-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .address-text {
    font-size: 1.5rem;
  }

  .map-container {
    height: 350px;
  }
}
</style>
