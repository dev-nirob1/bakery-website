<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileActive = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileActive.value = !isMobileActive.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav :class="['lumina-nav', { scrolled: isScrolled, 'mobile-active': isMobileActive }]">
    <router-link to="/" class="logo">Lumina.</router-link>

    <div class="hamburger" @click="toggleMobileMenu">
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul class="nav-links">
      <li><router-link to="/" @click="isMobileActive = false">Home</router-link></li>
      <li><router-link to="/about" @click="isMobileActive = false">Our Story</router-link></li>
      <li><router-link to="/menu" @click="isMobileActive = false">The Menu</router-link></li>
      <li><router-link to="/visit" @click="isMobileActive = false">Visit</router-link></li>
      <a href="#order" class="mobile-order-btn btn-outline" @click="isMobileActive = false"
        >Order Online</a
      >
    </ul>

    <a href="#order" class="btn-outline desktop-only">Order Online</a>
  </nav>
</template>

<style scoped>
.lumina-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  transition:
    padding 0.4s ease,
    background 0.4s ease;
  box-sizing: border-box;
}

.lumina-nav.scrolled {
  padding: 15px 50px;
  background: rgba(245, 245, 240, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border-subtle);
}

.logo {
  font-family: var(--font-logo);
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.4s ease;
  z-index: 1001;
}

.lumina-nav.scrolled .logo,
.lumina-nav.mobile-active .logo {
  color: var(--text-primary);
}

/* Hamburger */
.hamburger {
  display: none;
  cursor: pointer;
  z-index: 1001;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background: #fff;
  margin: 5px 0;
  transition: 0.4s;
}

.lumina-nav.scrolled .hamburger span,
.lumina-nav.mobile-active .hamburger span {
  background: var(--text-primary);
}

/* Mobile Icon Animation */
.mobile-active .hamburger span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}
.mobile-active .hamburger span:nth-child(2) {
  opacity: 0;
}
.mobile-active .hamburger span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 40px;
  align-items: center;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  position: relative;
  transition: color 0.4s ease;
}

.lumina-nav.scrolled .nav-links a {
  color: var(--text-primary);
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background: #fff;
  transition: 0.3s var(--ease-out);
}

.nav-links a:hover::after {
  width: 100%;
}

.lumina-nav.scrolled .nav-links a::after {
  background: var(--text-primary);
}

/* Buttons */
.btn-outline {
  display: inline-block;
  padding: 14px 32px;
  border: 1px solid #fff;
  background: transparent;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 0.8rem;
  transition: var(--transition-fast);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.btn-outline:hover {
  background: #fff;
  color: var(--text-primary);
}

.lumina-nav.scrolled .btn-outline {
  border-color: var(--text-primary);
  color: var(--text-primary);
}

.lumina-nav.scrolled .btn-outline:hover {
  background: var(--text-primary);
  color: var(--bg-cream);
}

.mobile-order-btn {
  display: none;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  .lumina-nav {
    padding: 20px;
  }

  .lumina-nav.scrolled {
    padding: 20px;
  }

  .desktop-only {
    display: none;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    background: var(--bg-cream);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: 0.4s ease;
    z-index: 1000;
    gap: 30px;
  }

  .mobile-active .nav-links {
    transform: translateX(0);
  }

  .nav-links a {
    color: var(--text-primary);
    font-size: 1.5rem;
  }

  .nav-links a::after {
    background: var(--text-primary);
  }

  .mobile-order-btn {
    display: inline-block;
    margin-top: 30px;
    padding: 15px 40px;
    border: 1px solid var(--text-primary);
    color: var(--text-primary);
    text-transform: uppercase;
    letter-spacing: 2px;
    text-decoration: none;
  }
}
</style>
