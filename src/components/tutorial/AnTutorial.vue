<script setup>
const tutorial_an = [
  {
    title:
      "Adobe Animate 2021: Planning & Generating Ideas [#0] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/6PNaj2s2LoY?si=-o1gFrIWO-QmRzez",
    share_link: "https://youtu.be/6PNaj2s2LoY?si=4eM36NXiBbV3Tv5j",
    date: "7 Desember 2020",
    desc: "Membuat perencanaan dan menyusun ide",
  },
  {
    title: "Adobe Animate 2021: The Absolute Basics [#1] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/E-doxha22QI?si=MXw4nkaDS2Zuw7XO",
    share_link: "https://youtu.be/E-doxha22QI?si=MXw4nkaDS2Zuw7XO",
    date: "10 Desember 2020",
    desc: "Belajar basic Adobe Animate",
  },
  {
    title:
      "Adobe Animate 2021: Frame by Frame Animation [#2] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/Ub4jHJRleUc?si=C_F-3SPrc5BNkpdU",
    share_link: "https://youtu.be/Ub4jHJRleUc?si=C_F-3SPrc5BNkpdU",
    date: "14 Desember 2020",
    desc: "Memberikan animasi ke setiap frame",
  },
  {
    title: "Adobe Animate 2021: Symbols and Tweens [#3] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/UlYlcygiJUs?si=zmJTykbBpf-Vyvxs",
    share_link: "https://youtu.be/UlYlcygiJUs?si=zmJTykbBpf-Vyvxs",
    date: "17 Desember 2020",
    desc: "Belajar Symbols dan Tweens untuk animasi",
  },
  {
    title:
      "Adobe Animate 2021: Colour, Gradients and Effects [#4] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/cLYMek__i5I?si=qsbGLHtQp1HVGW4M",
    share_link: "https://youtu.be/cLYMek__i5I?si=qsbGLHtQp1HVGW4M",
    date: "21 Desember 2020",
    desc: "Belajar Warna, gradasi, dan efek animasi",
  },
  {
    title: "Adobe Animate 2021: Shape Morphing [#5] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/X7aUCjVpu34?si=Vm_Z9QFcghbr5HOg",
    share_link: "https://youtu.be/X7aUCjVpu34?si=Vm_Z9QFcghbr5HOg",
    date: "24 Desember 2020",
    desc: "Menganimasikan perubahan bentuk",
  },
  {
    title: "Adobe Animate 2021: Shape Rigging [#6] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/AXtKYTXbJUc?si=DURb4Bdwo0HvbaEe",
    share_link: "https://youtu.be/AXtKYTXbJUc?si=DURb4Bdwo0HvbaEe",
    date: "28 Desember 2020",
    desc: "Membuat kerangka untuk aset",
  },
  {
    title: "Adobe Animate 2021: Working With Sound [#7] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/yXM6naQ-m3g?si=DeljDUhVx94Y_XKc",
    share_link: "https://youtu.be/yXM6naQ-m3g?si=DeljDUhVx94Y_XKc",
    date: "31 Desember 2020",
    desc: "Memberikan suara pada animasi",
  },
  {
    title:
      "Adobe Animate 2021: Cameras and Parallaxing [#8] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/e_71HEz0Wio?si=aqQ2TVizFylgpaL1",
    share_link: "https://youtu.be/e_71HEz0Wio?si=aqQ2TVizFylgpaL1",
    date: "1 Januari 2021",
    desc: "Menggerakan kamera & efek paralax",
  },
  {
    title:
      "Adobe Animate 2021: Exporting/Publishing Options [#9 FINALE] | Beginners Tutorial",
    channel: "TipTut",
    embed_link: "https://www.youtube.com/embed/yTPaeIaQtw8?si=lIf98BIQdmeIgQdm",
    share_link: "https://youtu.be/yTPaeIaQtw8?si=lIf98BIQdmeIgQdm",
    date: "1 Januari 2021",
    desc: "Mengexport dan mempublish project",
  },
];

const openYt = (link) => {
  window.open(link);
};
</script>

<template>
  <div class="title text-4xl text-center mb-5">
    Adobe Animate tutorial by TipTut (ENG)
  </div>

  <div class="overflow-auto whitespace-nowrap">
    <el-card
      v-for="item in tutorial_an"
      :key="item"
      class="el-card mx-2 my-2 inline-block"
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
        class="btn-yt p-5 mt-2 h-10 w-full bg-[#00005d] flex justify-center items-center rounded-md"
        @click="openYt(item.link)"
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
