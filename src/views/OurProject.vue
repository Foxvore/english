<script setup>
import { onMounted } from "vue";
import HalfHeader from "@/components/HalfHeader.vue";
import Team from "@/components/our-project/Team.vue";
import Project from "@/components/our-project/Project.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section id="header">
    <HalfHeader title="Our Project" subtitle="and Tri'sta Members" />
  </section>

  <section id="our-team" class="px-[10vw] py-[8vh] h-auto">
    <Project />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>

  <section id="our-team" class="px-[10vw] py-[8vh] h-auto">
    <Team />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>
</template>
