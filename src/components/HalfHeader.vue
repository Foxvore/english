<script setup>
const card = defineProps(["title", "subtitle"]);
</script>

<template>
  <div class="img-background">
    <div
      class="carousel absolute flex h-[50vh] w-full items-center justify-center z-40"
    >
      <div>
        <p
          class="text-9xl text-white text-center font-bold drop-shadow-lg tracking-widest"
        >
          {{ card.title }}
        </p>
        <p
          class="text-3xl text-white text-center font-bold drop-shadow-lg tracking-wider"
        >
          {{ card.subtitle }}
        </p>
      </div>
    </div>
    <div class="absolute h-[50vh] w-full bg-black opacity-50 z-10" />
  </div>
</template>

<style scoped>
.img-background {
  width: 100%;
  height: 50vh;
  background: url("@/assets/gif/header/Space_Idle.gif") top center;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  position: relative;
  box-shadow: 2px 0 35px 0 rgba(68, 88, 144, 0.5);
}
.carousel {
  font-family: "Bebas Neue", sans-serif !important;
}

@media (max-width: 600px) {
  .text-9xl {
    font-size: 4rem;
  }

  .text-3xl {
    font-size: 1rem;
  }
}
</style>
