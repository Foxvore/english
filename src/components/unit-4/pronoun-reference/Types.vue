<script setup>
const personal = [
  {
    use_as: "Subject",
    pronoun: "I, You, They, We, He, She, & It",
  },
  {
    use_as: "Object",
    pronoun: "Me, You, Them, Us, Him, Her, & It",
  },
  {
    use_as: "Possessive Adjective",
    pronoun: "My, Your, Their, Our, His, Her, & Its",
  },
  {
    use_as: "Possessive Noun",
    pronoun: "Mine, Yours, Ours, His, & Hers",
  },
  {
    use_as: "Reflective Pronoun",
    pronoun:
      "Myself, Yourself, Themselves, Ourselves, Himself, Herself, & Itself",
  },
];

const other = [
  {
    type: "Demonstrative Pronoun",
    pronoun: "This, These, That, & Those",
  },
  {
    type: "Relative Pronouns",
    pronoun: "Who/Whom, Which, That, Whose, Where, & When",
  },
  {
    type: "Quantitative Pronoun",
    pronoun: "One, Some, Few, Several, Many, Another, & Others",
  },
];
</script>

<template>
  <p class="title text-4xl my-5">Types of Pronoun Reference</p>

  <el-table :data="personal" style="width: 100%" class="mb-3">
    <el-table-column label="Personal Pronoun">
      <el-table-column prop="use_as" label="Use As" />
      <el-table-column prop="pronoun" label="Pronoun" />
    </el-table-column>
  </el-table>

  <el-table :data="other" style="width: 100%" class="mb-3">
    <el-table-column label="Other Types">
      <el-table-column prop="type" label="Type" />
      <el-table-column prop="pronoun" label="Pronoun" />
    </el-table-column>
  </el-table>
</template>

<style scoped>
@media (max-width: 600px) {
  .title {
    text-align: center !important;
  }
}
</style>
