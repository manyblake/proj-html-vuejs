<template>
  <div class="card">
    <figure>
      <img :src="news.url" />

      <span class="card__sticky-label" v-if="news.sticky">
        <font-awesome-icon icon="fa-solid fa-bullhorn" />
        Sticky Post
      </span>
    </figure>

    <p>{{ news.date }} / {{ news.comments }} comments</p>

    <h4>{{ news.title }}</h4>

    <p>{{ news.text }}</p>

    <a href="link">Read More</a>
  </div>
</template>

<script>
export default {
  props: {
    news: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  figure {
    position: relative;
    margin-bottom: 1.5rem;
    aspect-ratio: 2/1;
    font-size: 0;

    &::after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: none;
      content: "";
      background-color: rgba(#000000, 0.5);
    }

    &:hover {
      &::after {
        display: block;
      }
    }

    .card__sticky-label {
      display: flex;
      text-transform: uppercase;
      padding: 0.5rem;
      font-size: $text-xxxs;
      color: white;
      background-color: $mine-shaft;
      align-items: center;
      position: absolute;
      gap: 0.5rem;
      right: 0;
      bottom: 0;
      z-index: 2;
    }

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  h4 {
    text-transform: uppercase;
    font-size: $text-normal;
  }

  p {
    color: $natural-gray;
    font-size: $text-xs;
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
    font-size: $text-s;
    font-family: droid-serif, serif;
    font-style: italic;
  }
}
</style>
