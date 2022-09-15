<template>
  <section class="location">
    <div class="location__wrapper">
      <div class="location__map">
        <picture v-for="(map, i) in maps" :key="i">
          <img :src="map" />
        </picture>

        <div class="location__visual">
          <p>Map</p>
          <p>Satellite</p>
        </div>

        <div class="location__zoom">
          <p><font-awesome-icon icon="fa-solid fa-person" /></p>
          <p><font-awesome-icon icon="fa-solid fa-plus" /></p>
          <p><font-awesome-icon icon="fa-solid fa-minus" /></p>
        </div>

        <div class="location__footer">
          <p>
            Map data <font-awesome-icon icon="fa-regular fa-copyright" />2020
            Google
          </p>

          <p class="location__scale">200 m</p>
          <p>Terms of Use</p>
          <p>Report a map error</p>
        </div>

        <picture class="location__google">
          <img :src="google" />
        </picture>

        <picture class="location__marker">
          <img :src="marker" />
        </picture>
      </div>
    </div>

    <div class="location__body">
      <h3 class="location__title">Location</h3>
      <h4 class="location__subtitle">GD Building, Grand Conference Room</h4>
      <p>
        <font-awesome-icon icon="fa-solid fa-location-arrow" />11 GD Building,
        River Mall, New york, USA 8879
      </p>
      <a href="#">Check For Accommodations Here</a>

      <div class="location__contacts">
        <p><font-awesome-icon icon="fa-solid fa-phone" />+1-112-222-3344</p>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-envelope"
          />Contact@TheKeynoteTheme.com
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import marker from "../assets/img/default_marker.png";
import google from "../assets/img/google4.png";
import map1 from "../assets/img/vt (23).png";
import map2 from "../assets/img/vt (17).png";
import map3 from "../assets/img/vt (11).png";
import map4 from "../assets/img/vt (1).png";
import map5 from "../assets/img/vt (5).png";
import map6 from "../assets/img/vt (4).png";
import map7 from "../assets/img/vt (9).png";
import map8 from "../assets/img/vt (20).png";
import map9 from "../assets/img/vt (24).png";
import map10 from "../assets/img/vt (19).png";
import map11 from "../assets/img/vt (13).png";
import map12 from "../assets/img/vt (12).png";
import map13 from "../assets/img/vt (2).png";
import map14 from "../assets/img/vt.png";
import map15 from "../assets/img/vt (3).png";
import map16 from "../assets/img/vt (15).png";
import map17 from "../assets/img/vt (18).png";
import map18 from "../assets/img/vt (25).png";
import map19 from "../assets/img/vt (22).png";
import map20 from "../assets/img/vt (16).png";
import map21 from "../assets/img/vt (8).png";
import map22 from "../assets/img/vt (10).png";
import map23 from "../assets/img/vt (6).png";
import map24 from "../assets/img/vt (7).png";
import map25 from "../assets/img/vt (14).png";
import map26 from "../assets/img/vt (21).png";
import map27 from "../assets/img/vt (26).png";

export default {
  data() {
    return {
      marker: marker,
      google: google,
      maps: [
        map1,
        map2,
        map3,
        map4,
        map5,
        map6,
        map7,
        map8,
        map9,
        map10,
        map11,
        map12,
        map13,
        map14,
        map15,
        map16,
        map17,
        map18,
        map19,
        map20,
        map21,
        map22,
        map23,
        map24,
        map25,
        map26,
        map27,
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.location {
  .location__wrapper {
    max-height: 360px;
    overflow: hidden;
    margin-bottom: 0.5rem;
  }

  .location__map {
    transform: scale(125%);
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    position: relative;

    picture {
      img {
        height: 100%;
      }
    }
    .location__visual {
      position: absolute;
      display: flex;
      left: 11%;
      top: 11%;

      p {
        padding: 0.3rem 0.6rem;
        color: $gray;
        font-size: $text_xs;
        background-color: white;
        cursor: pointer;

        &:last-of-type {
          border-left: 1px solid $cloud;
        }

        &:first-of-type {
          color: $masala;
        }
      }
    }

    .location__zoom {
      position: absolute;
      display: flex;
      flex-direction: column;
      right: 11%;
      bottom: 34%;
      align-items: center;

      p {
        padding: 0.3rem 0.6rem;
        color: $gray;
        font-size: $text_xs;
        background-color: white;
        cursor: pointer;
        aspect-ratio: 1/1;
        width: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &:last-of-type {
          border-top: 1px solid $cloud;
        }

        &:first-of-type {
          color: gold;
          transform: translateY(-30px);
        }
      }
    }

    .location__marker {
      position: absolute;
      top: 50%;
      right: 50%;
      height: 40px;
      aspect-ratio: 1/1;
      display: inline-block;
      transform: translate(-25%, -300%);
      height: 1.5rem;
    }

    .location__google {
      position: absolute;
      bottom: 31%;
      left: 11%;
    }

    .location__footer {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 1px;
      right: 11%;
      bottom: 31%;

      .location__scale {
        display: flex;
        align-items: center;

        &::after {
          display: block;
          background-color: white;
          color: $masala;
          content: "";
          border-left: 1px solid currentColor;
          border-bottom: 1px solid currentColor;
          border-right: 1px solid currentColor;
          width: 30px;
          height: 0.2rem;
          margin-left: 3px;
        }
      }

      p {
        font-size: $text-xxxs;
        padding: 2px;
        background-color: white;
        color: $masala;
        cursor: pointer;
      }
    }
  }

  .location__body {
    background-image: url(../assets/img/location-bg.jpg);
    background-size: 90%;
    background-position: center;
    background-repeat: repeat;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    .location__title {
      font-size: $text-l;
      text-transform: uppercase;
      margin-bottom: 1.5rem;
    }

    .location__subtitle {
      font-size: $text-normal;
      text-transform: uppercase;
      margin: 0.5rem;
    }

    p {
      font-size: $text-xxs;
      display: flex;
      align-items: center;
      gap: 1rem;
      color: $cloud;
    }

    a {
      font-size: $text-xxs;
      color: $scarlet;
      margin: 1rem 0 2rem;
    }

    .location__contacts {
      display: flex;
      justify-content: center;
      gap: 2rem;
      position: relative;

      &::before {
        display: inline-block;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: -0.5rem;
        height: 3px;
        background-color: $cloud;
      }

      p {
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
        color: $cloud;
      }
    }
  }
}
</style>
