<script setup>
import pic_irham from "@/assets/img/our-team/irham.jpg";
import pic_jonathan from "@/assets/img/our-team/jonathan.jpg";
import pic_azzahra from "@/assets/img/our-team/azzahra.jpg";
import pic_puti from "@/assets/img/our-team/puti.jpg";
import pic_miftah from "@/assets/img/our-team/miftah.jpg";
import pic_arjuna from "@/assets/img/our-team/arjuna.jpg";
import pic_tiyaz from "@/assets/img/our-team/tiyaz.jpg";
import pic_wisnu from "@/assets/img/our-team/wisnu.jpg";

const team_data = [
  {
    name: "Irham Maulana J.",
    nim: "J0403231066",
    role: "Creative Designer",
    job: "Website Developer",
    picture: pic_irham,
  },
  {
    name: "Jonathan",
    nim: "J0403231132",
    role: "Account Executive",
    job: "2D Assets Creator",
    picture: pic_jonathan,
  },
  {
    name: "Azzahra Nabila C.",
    nim: "J0403231006",
    role: "Copy Writer",
    job: "Content and Storyboard Creator",
    picture: pic_azzahra,
  },
  {
    name: "Puti Aisyah L.",
    nim: "J0403231031",
    role: "Copy Writer",
    job: "Content and Storyboard Creator",
    picture: pic_puti,
  },
  {
    name: "Miftakhul Ushbah N.",
    nim: "J0403231093",
    role: "Art Director",
    job: "2D Animator",
    picture: pic_miftah,
  },
  {
    name: "Arjuna Olanda P.",
    nim: "J0403231040",
    role: "Art Director",
    job: "2D Animator",
    picture: pic_arjuna,
  },
  {
    name: "Shofwan Imtiyaz",
    nim: "J0403231138",
    role: "Art Director",
    job: "PPT Creator",
    picture: pic_tiyaz,
  },
  {
    name: "Fachrizal Wisnu P.",
    nim: "J0403231025",
    role: "Art Director",
    job: "PPT Creator",
    picture: pic_wisnu,
  },
];
</script>

<template>
  <p class="title text-4xl mb-8 text-center">Our Team</p>

  <div id="our-team" class="flex justify-center">
    <div class="product-grid">
      <div class="card" v-for="item in team_data" :key="item">
        <button class="mail"></button>
        <div class="profile-pic">
          <img :src="item.picture" alt="" />
        </div>
        <div class="bottom">
          <div class="content">
            <span class="name">{{ item.name }}</span>
            <span class="about-me">NIM : {{ item.nim }} </span>
            <span class="about-me">{{ item.job }}</span>
          </div>
          <div class="bottom-bottom">
            <div class="social-links-container text-xl">
              <!-- <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-github"></i> -->
            </div>
            <button class="button">{{ item.role }}</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.card {
  width: 280px;
  height: 280px;
  background: black;
  border-radius: 32px;
  padding: 3px;
  position: relative;
  box-shadow: #604b4a30 0px 70px 30px -50px;
  transition: all 0.5s ease-in-out;
}

.card .profile-pic {
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 29px;
  z-index: 1;
  border: 0px solid var(--primary-color);
  overflow: hidden;
  transition: all 0.5s ease-in-out 0.2s, z-index 0.5s ease-in-out 0.2s;
}

.card .profile-pic img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100%;
  -o-object-position: 0px 0px;
  object-position: 0px 0px;
  transition: all 0.5s ease-in-out 0s;
  scale: 1.8;
}

.card .bottom {
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background: var(--secondary-color);
  border: 2px solid black;
  top: 80%;
  border-radius: 29px;
  z-index: 2;
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px inset;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
}

.card .bottom .content {
  position: absolute;
  bottom: 0;
  left: 1.5rem;
  right: 1.5rem;
  height: 160px;
}

.card .bottom .content .name {
  display: block;
  font-size: 1.2rem;
  color: white;
  font-weight: bold;
}

.card .bottom .content .about-me {
  display: block;
  font-size: 0.9rem;
  color: white;
  margin-top: 0.5rem;
}

.card .bottom .bottom-bottom {
  position: absolute;
  bottom: 0.62rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card .bottom .bottom-bottom .social-links-container {
  color: white;
  display: flex;
  gap: 1rem;
}

.card .bottom .bottom-bottom .social-links-container i {
  height: 20px;
  fill: white;
  filter: drop-shadow(0 5px 5px rgba(165, 132, 130, 0.1333333333));
}

.card .bottom .bottom-bottom .social-links-container i:hover {
  transform: scale(1.2);
  color: var(--primary-color);
}

.card .bottom .bottom-bottom .button {
  background: white;
  width: 100%;
  color: var(--primary-color);
  font-weight: 600;
  border: 2px solid black;
  border-radius: 20px;
  font-size: 0.6rem;
  padding: 0.4rem 0.6rem;
  box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
  transition: var(--tran-03);
}

.card .bottom .bottom-bottom .button:hover {
  background: var(--primary-color);
  color: white;
}

.card:hover {
  border-top-left-radius: 55px;
}

.card:hover .bottom {
  top: 20%;
  border-radius: 80px 29px 29px 29px;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
}

.card:hover .profile-pic {
  width: 100px;
  height: 100px;
  aspect-ratio: 1;
  top: 10px;
  left: 10px;
  border-radius: 50%;
  z-index: 3;
  border: 7px solid var(--primary-color);
  box-shadow: rgba(96, 75, 74, 0.1882352941) 0px 5px 5px 0px;
  transition: all 0.5s ease-in-out, z-index 0.5s ease-in-out 0.1s;
}

.card:hover .profile-pic:hover {
  transform: scale(1.2);
  border-radius: 0px;
}

.card:hover .profile-pic img {
  transition: all 0.5s ease-in-out 0.5s;
}

.card:hover .profile-pic img {
  transform: scale(2);
  transition: all 0.5s ease-in-out 0.5s;
}

@media (max-width: 600px) {
  .product-grid {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
}
</style>
