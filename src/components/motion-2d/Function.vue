<script setup></script>

<template>
  <div class="text-center">
    <p class="title text-4xl mb-5">Fungsi dan Contoh Penggunaan Motion 2D</p>
    <p class="mb-5">
      Motion 2D memiliki banyak kegunaan yang penting dalam ilmu komputer dan
      berbagai aplikasi teknologi. Beberapa kegunaan utamanya adalah :
    </p>
  </div>

  <div class="product-grid">
    <div>
      <el-card class="function-card mx-2">
        <iframe
          class="rounded-md aspect-video w-full mb-3"
          src="https://www.youtube.com/embed/D1LM0L0l_kE?si=fRVEQFueJEDZJYRw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <div class="text-center">
          <p class="title text-2xl">Iklan</p>
          <p class="text-sm text-gray-500">src : Oreo Asia</p>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="function-card mx-2">
        <iframe
          class="rounded-md aspect-video w-full mb-3"
          src="https://www.youtube.com/embed/LFrsB3Gkiok?si=QxSdZH0iInn85-qw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <div class="text-center">
          <p class="title text-2xl">Game</p>
          <p class="text-sm text-gray-500">src : ShergiokYT</p>
        </div>
      </el-card>
    </div>
    <div>
      <el-card class="function-card mx-2">
        <iframe
          class="rounded-md aspect-video w-full mb-3"
          src="https://www.youtube.com/embed/G3TOTat8wbQ?si=zxwI9rAQHpXJ4dPy"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
        <div class="text-center">
          <p class="title text-2xl">Film/Video</p>
          <p class="text-sm text-gray-500">src : Toon Television</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}

.function-card:hover {
  scale: 1.02;
}

@media (max-width: 600px) {
  .function-card:hover {
    scale: 1;
  }
}
</style>
