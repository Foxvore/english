<script setup></script>

<template>
  <p class="title text-4xl mb-3">What is Motion 2D?</p>
  <div class="product-grid">
    <div class="col-span-2 flex items-center">
      <div>
        <p class="mb-3 text-justify">
          Motion 2D merupakan cabang ilmu desain grafis yang dapat menggabungkan
          teks, warna, grafik, dan gerakan untuk memberikan kehidupan dan
          merekam mereka menjadi sebuah pesan yang ingin di sampaikan kepada
          penontonnya.
        </p>
        <p class="mb-3 text-justify">
          Motion 2D mengacu pada pergerakan objek atau elemen dalam dua dimensi.
          Ini melibatkan penggunaan animasi untuk menciptakan ilusi pergerakan
          dan dinamika. Motion 2D digunakan dalam iklan, animasi karakter dalam
          permainan, dan efek visual dalam film atau video dan masih banyak
          lagi.
        </p>
        <div class="btn-more">
          <router-link :to="{ name: 'Motion 2D' }">
            <button class="learn-more mt-5 !w-[21rem]">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Baca materi selengkapnya</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center ol">
      <img
        src="@/assets/gif/homepage/definition.gif"
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
