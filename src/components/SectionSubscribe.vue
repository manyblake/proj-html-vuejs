<template>
  <section class="subscribe">
    <div class="container">
      <div class="subscribe__time" v-for="(box, i) in countdownBoxes" :key="i">
        <CountdownBox :number="box.number" :text="box.text" />
      </div>
    </div>

    <p class="subscribe__text">Subscribe for Updates</p>

    <div class="subscribe__email">
      <input type="text" placeholder="Please fill your email" />
      <input type="submit" value="Subscribe" />
    </div>
  </section>
</template>

<script>
import CountdownBox from "./CountdownBox.vue";

export default {
  components: { CountdownBox },

  data() {
    return {
      countdownBoxes: [
        { number: 3399, text: "Days" },
        { number: 17, text: "Hours" },
        { number: 28, text: "Mins" },
        { number: 17, text: "Secs" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  padding: 5.5rem 0;
  background-image: url("../assets/img/coutdown-bg1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }
  .subscribe__text {
    font-size: $text-s;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: 600;
  }

  .subscribe__email {
    display: flex;
    gap: 0.5rem;

    input {
      line-height: 3;
      padding: 0 1rem;
      border: none;
      border-radius: none;
      font-size: $text-xxs;

      &[type="text"] {
        padding-right: 6rem;
      }

      &[type="submit"] {
        background-color: $scarlet;
        color: white;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: 600;
      }
    }
  }
}
</style>
