<template>
  <section class="sponsors">
    <div class="container">
      <h3 class="sponsors__title">Sponsors</h3>
      <h4 class="sponsors__subtitle">
        Maecenas faucibus mollis interdum. Nullam id dolor id nibh ultricies
        vehiculaut id elit.
      </h4>

      <ul class="sponsors__banner">
        <li v-for="(banner_img, i) in banner_imgs" :key="i">
          <img :src="banner_img" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import banner_img1 from "../assets/img/banner-1.jpg";
import banner_img2 from "../assets/img/banner-2.jpg";
import banner_img3 from "../assets/img/banner-3.jpg";
import banner_img4 from "../assets/img/banner-4.jpg";
import banner_img5 from "../assets/img/banner-5.jpg";
import banner_img6 from "../assets/img/banner-6.jpg";

export default {
  data() {
    return {
      banner_imgs: [
        banner_img1,
        banner_img2,
        banner_img3,
        banner_img4,
        banner_img5,

        banner_img6,
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sponsors {
  background-color: #f3f3f3;
  padding: 4rem 0;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    .sponsors__title {
      font-size: $text-xl;
      text-transform: uppercase;
      margin-bottom: 1rem;
    }

    .sponsors__subtitle {
      font-size: $text-xxs;
      font-weight: 400;
      max-width: 300px;
      color: $natural-gray;
      margin-bottom: 2.5rem;
      text-align: center;
      letter-spacing: normal;
    }
    .sponsors__banner {
      display: flex;
      gap: 2rem;

      li img {
        cursor: pointer;
      }
    }
  }
}
</style>
