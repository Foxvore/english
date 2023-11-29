<script setup>
import { onMounted } from "vue";

onMounted(() => {
  scroll();
});

const scroll = () => {
  document.addEventListener("scroll", () => {
    const header = document.querySelector("#header");
    if (window.scrollY > 100) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }

    const top = document.querySelector(".back-to-top");
    if (window.scrollY > 100) {
      top.classList.add("active");
    } else {
      top.classList.remove("active");
    }
  });
};

const toggle_mobile = () => {
  document.documentElement.scrollTop = 0;
  const navbar = document.querySelector("#navbar");
  navbar.classList.toggle("navbar-mobile");

  const icon = document.querySelector(".mobile-nav-toggle");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-x");
};

const mobile_mode = () => {
  const w = window.innerWidth;
  if (w < 600) {
    const navbar = document.querySelector("#navbar");
    navbar.classList.toggle("navbar-mobile");

    const icon = document.querySelector(".mobile-nav-toggle");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-x");
  }
};
</script>

<template>
  <header id="header" class="fixed w-full">
    <div class="flex items-center justify-between px-[4vw] py-[1vh]">
      <h1 class="logo tracking-wider font-bold text-5xl">Tri'sta</h1>

      <nav id="navbar" class="navbar">
        <ul class="text-lg">
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link class="tracking-wider" :to="{ name: 'Homepage' }">
                Homepage
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link class="tracking-wider" :to="{ name: 'Motion 2D' }">
                What is Motion 2D?
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link class="tracking-wider" :to="{ name: 'Software' }">
                Software
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link class="tracking-wider" :to="{ name: 'Tutorial' }">
                Tutorial
              </router-link>
            </button>
          </li>
          <li>
            <button class="btn-router" @click="mobile_mode">
              <router-link class="tracking-wider" :to="{ name: 'Our Project' }">
                Our Project
              </router-link>
            </button>
          </li>
        </ul>

        <i class="fa-solid fa-bars mobile-nav-toggle" @click="toggle_mobile" />
      </nav>
      <!-- .navbar -->
    </div>
  </header>
  <!-- End Header -->

  <div id="back-to-top" class="back-to-top">
    <a href="#" class="text-[var(--quaternary-color)] font-bold text-3xl">
      <i class="fa-solid fa-circle-chevron-up"></i>
    </a>
  </div>
</template>

<style scoped>
/* header */
#header {
  font-family: "Bebas Neue", sans-serif !important;
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
}

#header .logo {
  color: #fff;
  margin: 0;
  padding: 0;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
}

#header.header-scrolled,
#header.header-inner-pages {
  background: rgba(0, 0, 0, 0.6);
  padding: 15px 0;
  backdrop-filter: blur(5px);
}

/* Desktop Navigation */
.navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
  margin: 0 5px;
}

.navbar > ul > li {
  white-space: nowrap;
  padding: 10px 12px;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0 2px;
  white-space: nowrap;
  transition: 0.3s;
  letter-spacing: 0.4px;
  position: relative;
}

.navbar > ul > li > .btn-router a.active {
  color: var(--tertiary-color);
}

.navbar > ul > li > .btn-router:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: var(--primary-color);
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover:before,
.navbar li:hover > .btn-router:before,
.navbar .active:before {
  visibility: visible;
  transform: scaleX(1);
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover > a {
  color: #fff;
}

/* Mobile Navigation */
.mobile-nav-toggle {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}

.navbar-mobile {
  position: fixed;
  overflow-y: hidden !important;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(160, 118, 249, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 30px;
  right: 20px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile > ul > li {
  padding: 0;
  display: flex;
  justify-content: center;
}

.navbar-mobile a:hover:before,
.navbar-mobile li:hover > a:before,
.navbar-mobile .active:before {
  visibility: hidden;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: #000;
}

.back-to-top {
  visibility: hidden;
  opacity: 0;
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 100;
  background: var(--primary-color);
  width: 40px;
  height: 40px;
  border-radius: 50px;
  transition: var(--tran-03);
  display: flex;
  align-items: center;
  justify-content: center;
}

.back-to-top:hover {
  background: var(--secondary-color);
  scale: 1.1;
}

.back-to-top.active {
  visibility: visible;
  opacity: 1;
}

@media (max-width: 600px) {
  .text-5xl {
    font-size: 2rem;
  }
}
</style>
