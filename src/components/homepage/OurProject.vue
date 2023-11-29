<script setup></script>

<template>
  <div class="product-grid">
    <div class="flex items-center ol">
      <div class="flex justify-start items-center">
        <div class="card" style="">
          <img
            src="@/assets/img/project/vid_thumbnail.png"
            alt=""
            class="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
    <div class="flex items-center">
      <div>
        <p class="title text-4xl mb-5">Our Project</p>
        <p class="mb-3 text-justify">
          <b>"What is Motion 2D?"</b> merupakan sebuah video Motion 2D karya
          kelompok 3 yaitu
          <b class="text-[var(--primary-color)]">Tri'sta.</b> Video ini berisi
          tentang penjelasan, fungsi, dan contoh penggunaan dari Motion 2D.
        </p>
        <div class="btn-more">
          <router-link :to="{ name: 'Our Project' }">
            <button class="learn-more mt-5 !w-[14rem]">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Tonton video</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.card {
  width: 100%;
  height: auto;
  background: var(--quaternary-color);
  border: 1px solid var(--cardBorder);
  padding: 7px;
  margin-right: 50px;
  box-shadow: 8px 8px 0 var(--secondary-color);
  transition: box-shadow 0.5s, transform 0.5s;
  border-radius: 8px;
  display: inline-block;
}

.card:hover {
  transform: translate(-2px, -4px);
  box-shadow: 16px 16px 0 var(--tertiary-color);
}

@media (max-width: 600px) {
  .title {
    text-align: center !important;
  }

  .product-grid {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .card {
    margin-right: 0;
    margin-top: 15px;
  }

  .ol {
    order: 99999;
  }

  .btn-more {
    display: none;
  }

  .card:hover {
    transform: none;
    box-shadow: 8px 8px 0 var(--secondary-color);
  }
}
</style>
