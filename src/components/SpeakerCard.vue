<template>
  <div class="card">
    <figure><img :src="`${url}`" /></figure>

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
  }

  p {
    font-size: $text-xxs;
    color: $natural-gray;
    font-style: italic;
  }

  img {
    border-radius: 0.3rem;
  }
}
</style>
