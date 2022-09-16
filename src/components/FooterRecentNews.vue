<template>
  <div class="recent-news">
    <h4 class="recent-news__title">Recent News</h4>

    <ul class="recent-news__list">
      <li v-for="(news, i) in array_news" :key="i">
        <font-awesome-icon
          class="recent-news__chevron"
          icon=" fa-solid fa-chevron-right "
        />
        <p class="recent-news__news">{{ news }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array_news: [
        "Sem Porta Mollis Parturient",
        "Nullam Lorem Mattis Purus",
        "Nibh Sem Sit Ullamcorper",
        "Donec Luctus Imperdiet",
        "Magna Pars Studiorum",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.recent-news {
  .recent-news__title {
    font-size: $text-xxs;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .recent-news__list {
    .recent-news__news {
      text-transform: uppercase;
      color: $natural-gray;
      font-size: $text-xxxs;
      cursor: pointer;
    }

    li {
      display: flex;
      align-items: center;
      gap: 1rem;

      & + li {
        margin-top: 1rem;
      }

      .recent-news__chevron {
        font-size: $text-xxxs;
      }
    }
  }
}
</style>
