<script setup>
import { onMounted } from "vue";
import Header from "@/components/Header.vue";
import Definition from "@/components/homepage/Definition.vue";
import Software from "@/components/homepage/Software.vue";
import Tutorial from "@/components/homepage/Tutorial.vue";
import OurProject from "@/components/homepage/OurProject.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section id="carousel">
    <Header />
  </section>

  <section id="definition" class="px-[10vw] py-[8vh] h-auto">
    <Definition />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>

  <section id="software" class="px-[10vw] py-[8vh] h-auto">
    <Software />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>

  <section id="tutorial" class="px-[10vw] py-[8vh] h-auto">
    <Tutorial />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>

  <section id="tutorial" class="px-[10vw] py-[8vh] h-auto">
    <OurProject />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>
</template>
