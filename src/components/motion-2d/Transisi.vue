<script setup>
import Cut from "@/assets/gif/transisi/Cut.gif";
import Fade from "@/assets/gif/transisi/Fade.gif";
import Slide from "@/assets/gif/transisi/Slide.gif";
import Zoom from "@/assets/gif/transisi/Zoom.gif";
import Rotate from "@/assets/gif/transisi/Rotate.gif";
import Flip from "@/assets/gif/transisi/Flip.gif";
import Dissolve from "@/assets/gif/transisi/Dissolve.gif";
import Masking from "@/assets/gif/transisi/Masking.gif";
import Particle from "@/assets/gif/transisi/Particle.gif";

const transisi = [
  {
    example: Cut,
    name: "Cut",
    desc: "Ini adalah jenis transisi yang paling sederhana. Saat satu adegan atau gambar tiba-tiba digantikan oleh adegan atau gambar berikutnya tanpa efek khusus.",
  },
  {
    example: Fade,
    name: "Fade",
    desc: "Aset yang satu muncul perlahan-lahan sementara aset lainnya menghilang perlahan-lahan. Ini menciptakan efek transisi yang lembut.",
  },
  {
    example: Slide,
    name: "Slide",
    desc: "Dalam gerakan slide, aset bergerak secara horizontal atau vertikal untuk memberikan perpindahan antara elemen yang satu dengan yang lainnya.",
  },
  {
    example: Zoom,
    name: "Zoom",
    desc: "Pada gerakan zoom, kamera atau pandangan pemirsa bergerak mendekat atau menjauh dari objek, menciptakan efek perubahan skala.",
  },
  {
    example: Rotate,
    name: "Rotate",
    desc: "Aset dapat berputar untuk mengubah transisi dari satu elemen ke elemen lainnya. Ini sering digunakan untuk memberikan efek perubahan sudut pandang.",
  },
  {
    example: Flip,
    name: "Flip",
    desc: "Dalam gerakan flip, aset dapat diputar secara horizontal atau vertikal untuk menciptakan efek cermin atau pembalikan.",
  },
  {
    example: Dissolve,
    name: "Dissolve",
    desc: "Pada transisi dissolve, aset yang satu mulai memudar secara perlahan-lahan sementara aset yang lain muncul. Ini menciptakan efek transisi yang lembut.",
  },
  {
    example: Masking,
    name: "Masking",
    desc: "Dalam masking, elemen tertentu digunakan sebagai masker untuk mengungkap elemen di belakangnya secara perlahan-lahan. Ini sering digunakan untuk mengubah bentuk elemen.",
  },
  {
    example: Particle,
    name: "Particle Effects",
    desc: "Gerakan transisi dapat melibatkan efek partikel seperti percikan, debu, atau bintang yang muncul atau menghilang untuk menghubungkan dua elemen.",
  },
];
</script>

<template>
  <p class="title text-4xl mb-5 text-center">
    Jenis-jenis Transformasi Transisi
  </p>

  <div class="product-grid">
    <el-card v-for="item in transisi" :key="item" class="transition-card">
      <div
        class="w-full h-full rounded-md mb-3 flex justify-center items-center"
      >
        <img :src="item.example" alt="transisi_example" class="rounded-md" />
      </div>
      <p class="title text-2xl text-center">{{ item.name }}</p>
      <p class="text-justify p-3">{{ item.desc }}</p>
    </el-card>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.transition-card:hover {
  scale: 1.02;
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }

  .transition-card:hover {
    scale: 1;
  }
}
</style>
