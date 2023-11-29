<script setup>
import { onMounted } from "vue";
import HalfHeader from "@/components/HalfHeader.vue";
import AeTutorial from "@/components/tutorial/AeTutorial.vue";
import AnTutorial from "@/components/tutorial/AnTutorial.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section id="header">
    <HalfHeader title="Tutorial" subtitle="for Making Motion 2D" />
  </section>

  <section id="our-team" class="px-[10vw] py-[5vh] h-auto">
    <AeTutorial />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>

  <section id="our-team" class="px-[10vw] py-[5vh] h-auto">
    <AnTutorial />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>
</template>
