<template>
  <div class="card">
    <font-awesome-icon style="color: #47bdee" icon="fa-brands fa-twitter" />
    <div class="card socials__feed">
      <p v-html="tweet"></p>
      <p>{{ date }}</p>
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

<style lang="scss" scoped>
.card {
  display: flex;
  align-items: top;
  gap: 1rem;
  margin-bottom: 0.5rem;

  .fa-twitter {
    aspect-ratio: 1/1;
    height: 20px;
  }

  .socials__feed {
    color: $natural-gray;
    font-size: $text-xxs;
    line-height: 1.6;
    display: flex;
    flex-direction: column;
  }
}
</style>
