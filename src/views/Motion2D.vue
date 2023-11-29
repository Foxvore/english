<script setup>
import { onMounted } from "vue";
import HalfHeader from "@/components/HalfHeader.vue";
import Definition from "@/components/motion-2d/Definition.vue";
import Function from "@/components/motion-2d/Function.vue";
import Transisi from "@/components/motion-2d/Transisi.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section id="header">
    <HalfHeader title="What is Motion 2D?" subtitle="Definition & Function" />
  </section>

  <section id="definition" class="px-[10vw] py-[8vh] h-auto">
    <Definition />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>

  <section id="function" class="px-[10vw] py-[8vh] h-auto">
    <Function />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>

  <section id="transition" class="px-[10vw] py-[8vh] h-auto">
    <Transisi />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>
</template>
