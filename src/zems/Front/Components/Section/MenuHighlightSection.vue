<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper/modules'
import MenuCard from '@/zems/Front/Components/Widget/MenuCard.vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const menuItems = [
  {
    id: 1,
    title: 'Classic Croissant',
    price: '$4.50',
    image:
      'https://images.pexels.com/photos/9313170/pexels-photo-9313170.jpeg?_gl=1*1306k1y*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NzEwMDA1NzckbzQ3JGcxJHQxNzcxMDAwNTk5JGozOCRsMCRoMA..',
    alt: 'Butter Croissant',
  },
  {
    id: 2,
    title: 'Country Sourdough',
    price: '$9.00',
    image:
      'https://images.unsplash.com/photo-1681218079567-35aef7c8e7e4?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sourdough Loaf',
  },
  {
    id: 3,
    title: 'Seasonal Danish',
    price: '$5.25',
    image:
      'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=800',
    alt: 'Fruit Danish',
  },
  {
    id: 5,
    title: 'Classic Croissant',
    price: '$4.50',
    image:
      'https://images.pexels.com/photos/9313170/pexels-photo-9313170.jpeg?_gl=1*1306k1y*_ga*OTAzOTgwMTguMTczNzAwNTI1OA..*_ga_8JE65Q40S6*czE3NzEwMDA1NzckbzQ3JGcxJHQxNzcxMDAwNTk5JGozOCRsMCRoMA..',
    alt: 'Butter Croissant',
  },
  {
    id: 4,
    title: 'French Baguette',
    price: '$3.75',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    alt: 'Baguette',
  },
  {
    id: 6,
    title: 'Country Sourdough',
    price: '$9.00',
    image:
      'https://images.unsplash.com/photo-1756244389018-ebf8169a0ed3?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Sourdough Loaf',
  },
  {
    id: 7,
    title: 'Seasonal Danish',
    price: '$5.25',
    image:
      'https://images.unsplash.com/photo-1612203985729-70726954388c?auto=format&fit=crop&q=80&w=800',
    alt: 'Fruit Danish',
  },
  {
    id: 8,
    title: 'French Baguette',
    price: '$3.75',
    image:
      'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    alt: 'Baguette',
  },
]

const swiperModules = [Navigation, Autoplay]
</script>

<template>
  <section class="menu-highlight">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          <span class="subtitle">Daily Selection</span>
          Fresh from the Oven
        </h2>
        <p class="section-desc">Baked every morning at 4am. When they're gone, they're gone.</p>
      </div>

      <div class="carousel-container">
        <swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="30"
          :loop="true"
          :speed="800"
          :grab-cursor="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :navigation="{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '1024': { slidesPerView: 3 },
            '1280': { slidesPerView: 4 },
          }"
          class="menu-swiper"
        >
          <swiper-slide v-for="item in menuItems" :key="item.id">
            <MenuCard v-bind="item" />
          </swiper-slide>
        </swiper>

        <!-- Custom Navigation -->
        <button class="nav-btn swiper-button-prev-custom" aria-label="Previous slide">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>
        <button class="nav-btn swiper-button-next-custom" aria-label="Next slide">
          <svg viewBox="0 0 24 24" width="24" height="24">
            <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>
      </div>

      <div class="footer-cta">
        <router-link to="/menu" class="btn-outline">View Full Menu</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.menu-highlight {
  padding: var(--spacing-xl) 0;
  background-color: var(--bg-white);
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
  position: relative;
  z-index: 10;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 3.5rem;
  line-height: 1.1;
  color: var(--text-primary);
  margin-bottom: 20px;
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
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.carousel-container {
  position: relative;
  padding: 0 50px;
}

.menu-swiper {
  padding: 20px 0;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-fast);
  z-index: 20;
}

.nav-btn:hover {
  background: var(--text-primary);
  color: #fff;
  border-color: var(--text-primary);
}

.swiper-button-prev-custom {
  left: -0.5rem;
}

.swiper-button-next-custom {
  right: -0.5rem;
}

.footer-cta {
  text-align: center;
  margin-top: 3rem;
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
  transition: var(--transition-fast);
}

.btn-outline:hover {
  background: var(--text-primary);
  color: #fff;
  border-color: var(--text-primary);
}

.container {
  max-width: 1400px; /* Slightly wider for carousel */
  margin: 0 auto;
  padding: 0 var(--spacing-sm);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .carousel-container {
    padding: 0;
  }

  .nav-btn {
    display: none; /* Hide custom nav on mobile, use swiper touch */
  }

  .menu-highlight {
    padding: var(--spacing-lg) 0;
  }
}
</style>
