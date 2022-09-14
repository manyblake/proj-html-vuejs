<template>
  <section class="container">
    <div v-for="(card, i) in cards" :key="i" class="card">
      <InfoCard :text="card.text" :title="card.title" :symbol="card.symbol" />
    </div>
  </section>
</template>

<script>
import InfoCard from "./InfoCard.vue";

export default {
  components: { InfoCard },
  data() {
    return {
      cards: [
        {
          title: "Who We Are",
          text: "Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.",
          symbol: "fa-solid fa-trophy",
        },
        {
          title: "What We Do",
          text: "Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.",
          symbol: "fa-solid fa-bolt-lightning",
        },
        {
          title: "Why Us?",
          text: "Donec id elit non mi porta gravida at eget me tus. Sed posuere consectetur estat lobo rtis. Cum sociis natoque.",
          symbol: "fa-solid fa-question",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  padding: 2rem;
}
</style>
