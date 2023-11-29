<script setup></script>

<template>
  <p class="title text-4xl mb-5">Penjelasan mengenai Motion 2D</p>
  <div class="product-grid">
    <div class="col-span-2 flex items-center">
      <div>
        <p class="mb-3 text-justify">
          Motion 2D merupakan cabang ilmu desain grafis yang dapat menggabungkan
          teks, warna, grafik, dan gerakan untuk memberikan kehidupan dan
          merekam mereka menjadi sebuah pesan yang ingin disampaikan kepada
          penontonnya. Buku <b>Eksploring Motion Graphic</b> yang ditulis oleh
          <b>Gallagher & Paldy</b> mengatakan bahwa setiap desain memiliki
          susunan visual yang digunakan untuk mengarahkan audiens pada suatu
          pesan dan membantu mereka untuk memahami informasi terpenting yang
          ingin disampaikan desain tersebut.
        </p>
        <p class="mb-3 text-justify">
          Motion 2D mengacu pada pergerakan objek atau elemen dalam dua dimensi.
          Ini melibatkan penggunaan animasi untuk menciptakan ilusi pergerakan
          dan dinamika. Motion 2D lebih berfokus pada pergerakan dan animasi
          dari elemen-elemen 2D tersebut. Motion 2D digunakan untuk menciptakan
          efek visual bergerak, seperti motion 2D dalam iklan, animasi karakter
          dalam permainan, efek visual dalam film atau video dan masih banyak
          lagi.
        </p>
        <p class="mb-3 text-justify">
          Motion 2D melibatkan penggunaan animasi atau pergerakan untuk
          memberikan elemen visual 2D kehidupan. Ini melibatkan perubahan
          posisi, rotasi, skala, dan animasi lainnya.
        </p>
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
