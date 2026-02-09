<template>
  <footer>
    <div class="container">
      <h3>Lumina.</h3>
      <div class="footer-links">
        <a href="#">Instagram</a>
        <a href="#">Contact</a>
      </div>
      <p>&copy; 2026 Lumina Artisan Bakery. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: #202020;
  color: #fff;
  padding: var(--spacing-lg) 0;
  text-align: center;
}

footer h3 {
  color: #fff;
  font-family: var(--font-logo);
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.footer-links {
  margin: 30px 0;
}

.footer-links a {
  color: #fff;
  margin: 0 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: var(--transition-fast);
}

.footer-links a:hover {
  color: var(--accent-gold);
}

footer p {
  opacity: 0.6;
  font-size: 0.9rem;
  letter-spacing: 1px;
}

/* Container utility in case it's not global yet */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>
