<script setup>
const openYT = () => {
  window.open("https://youtu.be/Tbo-ivOuBU0?si=s-Fhq8UDX3nG3RTw");
};

const openPPT = () => {
  window.open(
    "https://docs.google.com/presentation/d/1kV0fpSiTAkEIkBXgdWfj4fS949MW5xrc/edit?usp=drive_link&ouid=101544503794689559568&rtpof=true&sd=true"
  );
};
</script>

<template>
  <p class="title text-4xl mb-5 text-center">Our Project</p>

  <div class="product-grid">
    <div>
      <div class="flex justify-center">
        <div class="card">
          <div class="card-image">
            <iframe
              class="rounded-md aspect-video w-full"
              src="https://www.youtube.com/embed/Tbo-ivOuBU0?si=-PAybRnHp-bWZQO-"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            />
          </div>
          <div class="category">
            <button
              class="button text-[#ff0000] bg-white hover:bg-[#ff0000] hover:text-white"
              @click="openYT"
            >
              <div class="flex items-center">
                <i class="fa-brands fa-youtube mr-1"></i>
                <p class="ml-1">Watch on Youtube</p>
              </div>
            </button>
          </div>
          <div class="heading">
            What is Motion 2D?
            <div class="author">
              By <span class="name">Tri'sta</span> - 27 September 2023
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="flex justify-center">
        <div class="card">
          <div class="card-image">
            <img
              src="@/assets/img/project/ppt_thumbnail.png"
              alt="PPT Thumbnail"
              class="aspect-video w-full rounded-md"
            />
          </div>
          <div class="category">
            <button
              class="button text-[var(--primary-color)] bg-white mr-1 hover:bg-[var(--primary-color)] hover:text-white"
              @click="openPPT"
            >
              PowerPoint Presentation
            </button>
          </div>
          <div class="heading">
            What is Motion 2D?
            <div class="author">
              By <span class="name">Tri'sta</span> - 27 September 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-grid {
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
}

.card {
  width: 100%;
  height: 100%;
  background: var(--secondary-color);
  padding: 0.4em;
  border-radius: 6px;
  border: 2px solid black;
}

.card-image {
  background-color: rgb(236, 236, 236);
  border-radius: 6px;
}

.category {
  text-transform: uppercase;
  color: white;
  padding: 10px 3px 6px 7px;
}

.category .button {
  font-size: 0.8em;
  font-weight: 800;
  border: none;
  border-radius: 6px;
  padding: 0.4rem 0.6rem;
  box-shadow: rgba(165, 132, 130, 0.1333333333) 0px 5px 5px 0px;
  transition: var(--tran-03);
}

.heading {
  font-weight: 600;
  font-size: 1.5em;
  color: white;
  padding: 0 7px;
}

.author {
  color: white;
  font-weight: 400;
  font-size: 11px;
  padding-top: 10px;
  padding-bottom: 3px;
}

.name {
  font-weight: 600;
}

.name:hover {
  cursor: pointer;
}

@media (max-width: 600px) {
  .heading {
    font-size: 1rem;
  }

  .category .button {
    font-size: 0.6rem;
    padding: 0.3rem 0.5rem;
  }

  .author {
    padding-top: 4px;
    font-size: 8px;
  }
}
</style>
