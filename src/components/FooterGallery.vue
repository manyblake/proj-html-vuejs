<template>
  <div class="gallery">
    <h4 class="gallery__title">Gallery From Last Year</h4>

    <ul class="gallery__photos-list">
      <li v-for="(photo, i) in gallery" :key="i">
        <img :src="photo" />
      </li>
    </ul>
  </div>
</template>

<script>
import photo1 from "../assets/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (1).jpg";
import photo2 from "../assets/img/photodune-8523683-speaker-at-business-convention-and-present.jpg";
import photo3 from "../assets/img/photodune-6745579-modern-creative-man-relaxing-on-workspace-.jpg";
import photo4 from "../assets/img/photodune-8522811-speaker-at-business-conference-and-present (1).jpg";
import photo5 from "../assets/img/photodune-8797753-multiethnic-people-with-startup-business-t (1).jpg";
import photo6 from "../assets/img/card04-150x150.jpg";
import photo7 from "../assets/img/photodune-6745606-man-wristwatch-calendar-key-and-glasses-on.jpg";
import photo8 from "../assets/img/photodune-6745585-modern-creative-workspace-m-150x150.jpg";
import photo9 from "../assets/img/6426608875_186070f8ca_o-150x150.jpg";
import photo10 from "../assets/img/card01-150x150.jpg";
import photo11 from "../assets/img/13349065283_64d09b067c_o-150x150.jpg";
import photo12 from "../assets/img/photodune-8795110-overhead-of-essentials-denim-clothes-m-150.jpg";

export default {
  data() {
    return {
      gallery: [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
        photo9,
        photo10,
        photo11,
        photo12,
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.gallery__title {
  font-size: $text-s;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.gallery__photos-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
}
</style>
