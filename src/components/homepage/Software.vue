<script setup>
import AfterEffect from "@/assets/img/software-requirement/ae.png";
import Animiate from "@/assets/img/software-requirement/an.png";

const software = [
  {
    logo: AfterEffect,
    name: "Adobe After Effect",
    inc: "Adobe Inc.",
    function: "Untuk memberikan gerakan kepada aset 2D",
    link: "https://www.adobe.com/id_en/products/aftereffects.html",
    cpu: "Intel or AMD Quad-Core Processor (8-Core or above for Multi-Frame Rendering recommended).",
    os: "Microsoft Windows 10 (64-bit) V20H2 or later.",
    ram: "16 GB of RAM (32 GB recommended).",
    hdd: "15GB of available hard-disk space; additional free space required during installation (cannot install on removable flash storage devices). Additional disk space for disk cache (64GB+ recommended).",
    monitor: "1920 x 1080 (1920x1080 or greater display resolution).",
    gpu: "2 GB of GPU VRAM (4GB or more of GPU VRAM recommended). Note: For systems with NVIDIA GPUs, Windows 11 requires NVIDIA driver version 472.12 or later.",
    internet:
      "Internet connection and registration are necessary for required software activation, validation of subscriptions, and access toonline services.",
  },
  {
    logo: Animiate,
    name: "Adobe Animate",
    inc: "Adobe Inc.",
    function: "Untuk memberikan gerakan kepada aset 2D",
    link: "https://www.adobe.com/id_en/products/animate.html",
    cpu: "Intel Pentium 4 or Intel Centrino, Intel Xeon, or Intel Core Duo (or compatible) processor (2GHz or faster processor).",
    os: "Windows 10 version V20H2, V21H1.",
    ram: "8 GB of RAM (16 GB recommended).",
    hdd: "4 GB of available hard-disk space for installation; more free space required during installation (cannot install on removable flash storage devices).",
    monitor: "1024x900 display (1280x1024 recommended).",
    gpu: "OpenGL version 3.3 or higher (DirectX 12 with feature level 12_0 recommended).",
    internet:
      "Internet connection and registration are necessary for required software activation, validation of subscriptions, and access to online services.",
  },
];

const openWeb = (link) => {
  window.open(link);
};
</script>

<template>
  <div class="flex justify-center">
    <p class="title text-4xl mb-10">Software</p>
  </div>

  <div class="product-grid">
    <el-card v-for="item in software" :key="item" class="el-card h-full m-3">
      <div class="flex justify-center">
        <div>
          <div class="mb-5 text-center">
            <p class="title text-3xl">{{ item.name }}</p>
            <p class="text-gray-400 text-sm">{{ item.inc }}</p>
          </div>
          <div class="mb-5 flex justify-center">
            <img
              :src="item.logo"
              alt="Adobe Illustrator"
              class="icon w-[300px]"
            />
          </div>
          <div class="text-center">
            <p class="text-gray-500 text-sm mb-1">
              Kegunaan : {{ item.function }}
            </p>
            <p class="link text-gray-500 text-xs" @click="openWeb(item.link)">
              <b>Klik disini untuk mengunjungi website {{ item.name }}</b>
            </p>
          </div>
        </div>
      </div>
    </el-card>
  </div>

  <div class="flex justify-center py-1 mt-5 btn-more">
    <router-link :to="{ name: 'Software' }">
      <button class="learn-more mt-5 !w-[17rem]">
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">Lihat selengkapnya</span>
      </button>
    </router-link>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}

.el-card:hover {
  scale: 1.03;
}

.icon {
  width: 25rem;
}

.link {
  cursor: pointer;
}

.link:hover {
  color: var(--secondary-color);
}

@media (max-width: 600px) {
  .icon {
    width: 10rem;
  }

  .text-sm {
    font-size: 0.7rem;
  }

  .el-card:hover {
    scale: 1;
  }

  .btn-more {
    display: none;
  }
}
</style>
