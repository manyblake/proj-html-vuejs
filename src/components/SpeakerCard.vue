<template>
  <div class="card">
    <figure>
      <img class="card__img" :src="`${url}`" />
      <div class="card__img-overlay">
        <div class="card__socials">
          <font-awesome-icon icon="fa-brands fa-twitter" />
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </div>
      </div>
    </figure>

    <h4>{{ name }}</h4>

    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    name: String,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.card {
  flex-basis: calc((100% - 6rem) / 4);
  text-align: center;

  h4 {
    font-size: $text-s;
    text-transform: uppercase;
    color: $masala;
    margin: 1.5rem 0 0.75rem;
  }

  p {
    font-size: $text-xxs;
    color: $natural-gray;
    font-style: italic;
    font-family: droid-serif, serif;
  }

  figure {
    position: relative;

    img {
      border-radius: 0.3rem;
    }

    &:hover .card__img-overlay {
      opacity: 0.5;
      transition: opacity 0.3s linear;
    }
  }

  .card__img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: red;
    opacity: 0;
    border-radius: 0.3rem;

    .card__socials {
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      position: absolute;
      gap: 1rem;
      color: white;
      font-size: $text-normal;
    }
  }
}
</style>
