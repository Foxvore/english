<script setup>
const tutorial_ae = [
  {
    title: "Berkenalan dengan Adobe After Effect",
    channel: "Kok Bisa?",
    embed_link: "https://www.youtube.com/embed/QcZpWKaqzu4?si=UDvDaDfCqQ_WhJnE",
    share_link: "https://youtu.be/QcZpWKaqzu4?si=UDvDaDfCqQ_WhJnE",
    date: "23 November 2022",
    desc: "Mengenali software untuk membuat motion 2D yaitu Adobe After Effect",
  },
  {
    title:
      "Bikin Gambarmu Hidup! Bagian 1: Tutorial Transform di Adobe After Effects",
    channel: "Kok Bisa?",
    embed_link: "https://www.youtube.com/embed/Vk_HOJez870?si=b7xpZtnFwLAvA0AK",
    share_link: "https://youtu.be/Vk_HOJez870?si=b7xpZtnFwLAvA0AK",
    date: "2 Desember 2022",
    desc: "Memberikan gerakan dengan fitur Transform",
  },
  {
    title:
      "Bikin Gambarmu Hidup! Bagian 2, Tutorial Puppet & Path di Adobe After Effects",
    channel: "Kok Bisa?",
    embed_link: "https://www.youtube.com/embed/xUKNbX00_Q8?si=WU8OEuAGOMp9UkbP",
    share_link: "https://youtu.be/xUKNbX00_Q8?si=WU8OEuAGOMp9UkbP",
    date: "7 Desember 2022",
    desc: "Menggunakan fitur Puppet & Path",
  },
  {
    title:
      "Bikin Gambarmu hidup! Bagian 3, tutorial fungsi script di Adobe After Effects",
    channel: "Kok Bisa?",
    embed_link: "https://www.youtube.com/embed/IuWgX1RaiMg?si=FSCbY9az7ODNYrui",
    share_link: "https://youtu.be/IuWgX1RaiMg?si=FSCbY9az7ODNYrui",
    date: "7 Desember 2022",
    desc: "Fungsi fitur Script di Adobe After Effect",
  },
  {
    title: "Tips & Trik di Adobe After Effect",
    channel: "Kok Bisa?",
    embed_link: "https://www.youtube.com/embed/4On-9EIx1e8?si=VDa9RAV5CsEj0YEa",
    share_link: "https://youtu.be/4On-9EIx1e8?si=VDa9RAV5CsEj0YEa",
    date: "9 Desember 2022",
    desc: "Tips & Trik yang dapat kalian ikuti saat menggunakan Adobe After Effect",
  },
  {
    title: "Cara render di Adobe After Effect",
    channel: "Kok Bisa?",
    embed_link: "https://www.youtube.com/embed/HVB-ZYO8qSk?si=VHFyxdZSc24nAxY_",
    share_link: "https://youtu.be/HVB-ZYO8qSk?si=VHFyxdZSc24nAxY_",
    date: "9 Desember 2022",
    desc: "Cara render project yang telah kalian buat di Adobe After Effect",
  },
];

const openYt = (link) => {
  window.open(link);
};
</script>

<template>
  <div class="title text-4xl text-center mb-5">
    Adobe After Effect tutorial by Kok Bisa? (IDN)
  </div>

  <div class="overflow-auto whitespace-nowrap">
    <el-card
      v-for="item in tutorial_ae"
      :key="item"
      class="el-card h-full mx-2 my-2 inline-block"
    >
      <div class="flex justify-center">
        <iframe
          class="rounded-md aspect-video w-full"
          :src="item.embed_link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </div>
      <div
        class="btn-yt p-5 mt-2 h-10 w-full bg-[#cf5959] flex justify-center items-center rounded-md"
        @click="openYt(item.share_link)"
      >
        <i class="fa-brands fa-youtube text-white mr-1 text-lg"></i>
        <p class="ml-1 text-white">Watch on Youtube</p>
      </div>
      <div class="mt-4 whitespace-normal">
        <div class="mb-1">
          <p class="text-gray-400 text-xs">Title</p>
          <p class="font-bold text-base">
            {{ item.title }}
          </p>
        </div>
        <div class="mb-1">
          <p class="text-gray-400 text-xs">Channel</p>
          <p class="font-bold text-base">
            {{ item.channel }}
          </p>
        </div>
        <div class="mb-1">
          <p class="text-gray-400 text-xs">Upload Date</p>
          <p class="font-bold text-base">
            {{ item.date }}
          </p>
        </div>
        <div>
          <p class="text-gray-400 text-xs">Description</p>
          <p class="font-bold text-base">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<style scoped>
.el-card {
  width: 23vw;
  height: 32rem;
}

.el-card:hover {
  scale: 1.015;
}

.btn-yt {
  transition: var(--tran-03);
}

.btn-yt:hover {
  scale: 1.015;
  cursor: pointer;
}

::-webkit-scrollbar {
  height: 5px !important;
}

::-webkit-scrollbar-thumb {
  background-image: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color),
    var(--tertiary-color),
    var(--quaternary-color)
  );
  border-radius: 10px;
}

@media (max-width: 600px) {
  .text-4xl {
    font-size: 1.8rem;
  }

  .el-card {
    width: 70vw;
    height: 30rem;
  }

  i.text-lg {
    font-size: 1rem;
  }

  .text-xs {
    font-size: 0.65rem;
  }

  .text-base {
    font-size: 0.85rem;
  }

  .el-card:hover {
    scale: 1;
  }
}
</style>
