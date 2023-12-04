<script setup>
import { onMounted } from "vue";
import Header from "@/components/Header.vue";
import Definition from "@/components/unit-4/pronoun-reference/Definition.vue";
import Types from "@/components/unit-4/pronoun-reference/Types.vue";

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <section id="header">
    <Header title="Unit 4 English Project" subtitle="by Tri'sta" />
  </section>

  <section id="unit-content" class="px-[5vw] py-[5vh] h-auto">
    <el-tabs>
      <el-tab-pane label="Pronoun Reference" class="p-[1vw]">
        <Definition />
        <hr class="my-[2vh]" />
        <Types />
      </el-tab-pane>
      <el-tab-pane label="Future Tense">Future Tense</el-tab-pane>
      <el-tab-pane label="Modal Auxiliaries">Modal Auxiliaries</el-tab-pane>
      <el-tab-pane label="Making Plan">Making Plan</el-tab-pane>
    </el-tabs>
  </section>

  <div class="px-[5vw]">
    <hr />
  </div>
</template>
