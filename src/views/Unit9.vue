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
      title="Unit 9 English Project"
      subtitle="Cause and Effect, Adverb Clause, & Making Excuses and Apoligizing"
    />
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>
</template>
