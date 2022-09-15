<template>
  <div class="card">
    <picture>
      <img :src="url" />
    </picture>

    <p>{{ date }} / {{ comments }} comments</p>

    <h4>{{ title }}</h4>

    <p>{{ text }}</p>

    <a href="link">Read More</a>
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    comments: Number,
    date: String,
    title: String,
    text: String,
    link: { type: String, default: "#" },
  },
};
</script>

<style lang="scss" scoped>
.card {
  img {
    aspect-ratio: 2/1;
    object-fit: cover;
    margin-bottom: 1.5rem;
  }

  h4 {
    text-transform: uppercase;
    font-size: $text_normal;
  }

  p {
    color: $natural_gray;
    font-size: $text_xs;
    line-height: 1.6;

    &:last-of-type {
      padding: 1.5rem 0;
    }

    &:first-of-type {
      font-style: italic;
      margin-bottom: 0.5rem;
    }
  }
  a {
    color: $scarlet;
    font-size: $text_s;
  }
}
</style>
