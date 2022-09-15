<template>
  <section class="program">
    <div class="container">
      <div class="program__header">
        <h4 class="program__title">Program</h4>

        <div class="program__subtitle">
          <p>This conference run through all 4 days from 23 - 26 May 2016.</p>
          <p>We also provide free lunch and coffee break each day.</p>
        </div>

        <a class="program__link" href="#">View Full Program</a>
      </div>

      <ul class="program__days">
        <li class="program__day" v-for="(day, i) in 6" :key="i">
          <template v-if="i < 5">
            <h5>Day {{ i + 1 }}</h5>

            <p>{{ i > 0 ? `2${i + 2} May 2030` : "23 May 2016" }}</p>
          </template>
        </li>
      </ul>

      <div class="program__body">
        <div class="program__info">
          <p class="program__time">
            <font-awesome-icon icon="fa-regular fa-clock" />09:00 - 10-30
          </p>
          <p class="program__place">
            <font-awesome-icon icon="fa-solid fa-location-arrow" />Room A
          </p>
          <p class="program__speaker">
            <font-awesome-icon icon="fa-solid fa-user" /><span
              >Laurence Francis</span
            >
          </p>
        </div>
        <div class="program__text">
          <h5>Welcoming and Introduction</h5>

          <p>
            Vestibulum id ligula porta felis euismod semper. Nullam quis risus
            eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non
            metus auctor fringilla. Aenean lacinia bibendum nulla sed
            consectetur....
          </p>

          <picture>
            <img :src="speaker8" />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import speaker8 from "../assets/img/speaker-8-150x150.jpg";
export default {
  data() {
    return {
      speaker8: speaker8,
    };
  },
};
</script>

<style lang="scss" scoped>
.program {
  padding: 4rem;
  .container {
    max-width: 1000px;
    margin: 0 auto;

    .program__header {
      display: flex;
      gap: 2rem;
      margin-bottom: 2.5rem;

      .program__title {
        text-transform: uppercase;
        font-size: $text-xl;
      }
      .program__subtitle {
        color: $natural_gray;
        font-size: $text-xxs;
      }
      .program__link {
        margin-left: auto;
        color: $scarlet;
        font-size: $text-xxs;
      }
    }

    .program__days {
      display: flex;

      background-color: $scarlet;
      color: white;

      .program__day {
        padding: 0.5rem 1rem;
        border: 1px solid $thunderbird;
        flex-grow: 1;
        flex-basis: 0;

        h5 {
          font-size: $text-s;
          text-transform: uppercase;
        }
        p {
          font-size: $text-xxs;
        }
        &:first-of-type {
          background-color: $thunderbird;
        }
      }
    }

    .program__body {
      display: flex;
      background-color: #f3f3f3;
      padding: 3rem;

      .program__info {
        flex-basis: 40%;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .program__time,
        .program__place,
        .program__speaker {
          display: flex;
          align-items: center;
          gap: 1rem;
          font-size: $text-xxs;
          color: $natural_gray;
          text-transform: uppercase;

          span {
            color: $scarlet;
          }
        }
      }

      .program__text {
        h5 {
          color: $masala;
          text-transform: uppercase;
          font-size: $text-normal;
        }

        p {
          font-size: $text-xxs;
          color: $natural_gray;
          padding: 1.5rem 0;
          line-height: 2;
        }

        picture {
          aspect-ratio: 1/1;
          width: 2.5rem;
          display: block;

          img {
            border-radius: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
