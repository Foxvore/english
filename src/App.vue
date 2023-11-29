<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Outfit", sans-serif;
  overflow-x: hidden;
}

/*===== CSS Variable =====*/
:root {
  --primary-color: #6528f7;
  --secondary-color: #a076f9;
  --tertiary-color: #d7bbf5;
  --quaternary-color: #ede4ff;

  --tran-02: all 0.2s ease;
  --tran-03: all 0.3s ease;
  --tran-04: all 0.4s ease;
  --tran-05: all 0.5s ease;
}

/*===== Custom Scrollbar =====*/
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-thumb {
  background-image: linear-gradient(
    var(--primary-color),
    var(--secondary-color),
    var(--tertiary-color),
    var(--quaternary-color)
  );
  border-radius: 10px;
}

.title {
  font-family: "Bebas Neue", sans-serif !important;
}

.hidden {
  display: none;
}
</style>
