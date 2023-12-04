<script setup></script>

<template>
  <p class="title text-4xl mb-5">Definition of Pronoun Reference</p>
  <div class="product-grid">
    <div class="col-span-2 flex items-center">
      <div>
        <p class="mb-8 text-justify">
          Pronoun Reference is a word used in place of (as a substitute for)
          another word called a referent (person, thing, or idea). For Example:
          he, she, or they. Thus, a referent is the person, thing, or idea to
          which a word or phrase refers.
        </p>
        <p class="mb-3 text-justify"><b>Check this following paragraph!</b></p>
        <p class="mb-5 text-justify">
          <span class="pr">A computer</span>, like any other machine, is used
          because <span class="pr">it</span> does certain jobs better and more
          efficiently than humans. <span class="pr">It</span> can receive more
          information and process <span class="pr">it</span> faster than any
          human. The speed at which <span class="pr">a computer</span> works
          means <span class="pr">it</span> can replace weeks or even months of
          pencil-and-paper work. Therefore, computers are used when the time
          saved offsets their cost, which is one of the many reasons they are
          used so much in business industry, and research.
        </p>
        <p class="mb-3 text-justify">
          The word <span class="pr">"it"</span> on the paragraph below is refer
          to <span class="pr">"computer"</span>.
        </p>
      </div>
    </div>
    <div class="flex justify-center items-center ol">
      <img
        src="@/assets/gif/unit-4/pronoun-reference.gif"
        alt="def.giv"
        class="gif"
      />
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

span.pr {
  color: var(--primary-color);
  font-weight: 600;
}

.gif {
  width: 300px;
  height: auto;
}

@media (max-width: 600px) {
  .title {
    text-align: center !important;
  }

  .product-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .gif {
    width: 180px;
    height: auto;
  }

  .ol {
    order: -99999;
  }
}
</style>
