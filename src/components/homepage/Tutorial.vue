<script setup></script>

<template>
  <p class="title text-4xl mb-5">Tutorial</p>
  <div class="product-grid">
    <div class="col-span-2 flex items-center">
      <div>
        <p class="mb-3 text-justify">
          Webiste memuat link video tutorial yang yang dapat kalian ikuti untuk
          membuat video motion 2D dengan menggunakan software
          <b>Adobe After Effect</b> dan <b>Adobe Animate</b>.
        </p>
        <p class="mb-3 text-justify">
          Terdapat 6 link yang dapat diakses untuk menonton video tutorial
          membuat Motion 2D mengunakan <b>Adobe After Effect</b> dan 10 link
          yang dapat diakses untuk menonton video tutorial membuat Motion 2D
          mengunakan <b>Adobe Animate</b>.
        </p>
        <div class="btn-more">
          <router-link :to="{ name: 'Tutorial' }">
            <button class="learn-more mt-5 !w-[17rem]">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Lihat selengkapnya</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center ol">
      <img
        src="@/assets/gif/homepage/tutorial.gif"
        alt="def.giv"
        class="gif w-[300px] h-[300px]"
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

.gif {
  width: 250px;
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

  .btn-more {
    display: none;
  }
}
</style>
