<template>
  <div class="card">
    <div class="card__header">
      <h4 class="card__title">{{ ticket.title }}</h4>
      <h5 class="card__subtitle">{{ ticket.price }}</h5>

      <p class="card__label" :class="ticket.featured === true ? 'active' : ''">
        Featured!
      </p>
    </div>

    <ul class="card__benefits">
      <li v-for="(benefit, i) in ticket.benefits" :key="i">
        {{ benefit }}
      </li>
    </ul>

    <a class="card__button" :href="ticket.url">Book Now</a>
  </div>
</template>

<script>
export default {
  props: { ticket: Object },
};
</script>

<style lang="scss" scoped>
.card {
  text-align: center;
  .card__header {
    background-color: #f3f3f3;
    padding: 1rem;
    position: relative;
    overflow: hidden;

    .card__title {
      text-transform: uppercase;
      font-size: $text-normal;
      margin-bottom: 0.5rem;
    }

    .card__subtitle {
      text-transform: uppercase;
      font-size: $text-xs;
      color: $scarlet;
    }

    .card__label {
      display: none;
      position: absolute;
      padding: 0.5rem 3rem;
      color: white;
      background-color: $scarlet;
      right: 0;
      top: 0;
      font-size: $text-xxs;
      transform: rotate(45deg) translate(30%, -100%);

      &.active {
        display: block;
      }
    }
  }

  .card__benefits {
    background-color: white;
    padding: 2rem;

    li {
      color: $natural-gray;
      font-style: italic;
      font-size: $text-xs;

      & + li {
        margin-top: 1rem;
      }
    }
  }

  .card__button {
    display: block;
    background-color: $scarlet;
    color: white;
    text-transform: uppercase;
    font-size: $text-xxs;
    font-weight: 600;
    padding: 1rem 0;
  }
}
</style>
