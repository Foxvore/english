<script setup>
import { onMounted } from "vue";
import HalfHeader from "@/components/HalfHeader.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section id="header">
    <HalfHeader
      title="Unit 13 English Project"
      subtitle="Making Inferences, Basic Prepositions, & Asking For and Giving Direction"
    />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>
</template>
