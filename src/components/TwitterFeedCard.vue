<template>
  <div class="tweet">
    <font-awesome-icon style="color: #47bdee" icon="fa-brands fa-twitter" />
    <div class="tweet__text">
      <p v-html="tweet"></p>
      <p class="tweet__date">{{ date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tweet: String,
    date: String,
  },
};
</script>

<style lang="scss">
.tweet {
  display: flex;
  align-items: top;
  gap: 1rem;
  margin-bottom: 0.5rem;

  .fa-twitter {
    aspect-ratio: 1/1;
    height: 20px;
  }

  .tweet__text {
    color: $natural-gray;
    font-size: $text-xxs;
    line-height: 1.6;
    display: flex;
    flex-direction: column;

    .tweet__date {
      margin-top: 0.85rem;
      font-style: italic;
    }
  }

  a {
    color: $scarlet;
  }
}
</style>
