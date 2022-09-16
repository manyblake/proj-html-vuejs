<template>
  <div class="card">
    <div class="card__header">
      <font-awesome-icon :icon="symbol" class="card__icon" />
      <h4 class="card__title">{{ title }}</h4>
    </div>

    <p class="card__text">{{ text }}</p>
    <a class="card__link" href="#">Learn More</a>
  </div>
</template>

<script>
export default {
  props: {
    symbol: String,
    title: String,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 0 2rem;

  .card__header {
    display: flex;
    align-items: center;
    transform: translateX(-3rem);

    .card__icon {
      font-size: 2rem;
      aspect-ratio: 1/1;
      margin-right: 1rem;
      color: $gray;
    }
    .card__title {
      text-transform: uppercase;
    }
  }

  .card__text {
    color: $gray;
    font-size: $text-xxs;
    line-height: 1.6;
    padding: 1rem 0;
  }

  .card__link {
    color: $scarlet;
    font-size: $text-xxs;
    font-family: droid-serif, serif;
    font-style: italic;
  }
}
</style>
