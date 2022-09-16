<template>
  <section class="news">
    <div class="container">
      <div class="news__header">
        <h3 class="news__title">Recent News</h3>
        <a class="news__all-news" href="#">Read All News</a>
      </div>
      <ul class="news__list">
        <li v-for="(card, i) in cards" :key="i">
          <NewsCard
            :url="card.url"
            :comments="card.comments"
            :date="card.date"
            :title="card.title"
            :text="card.text"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import NewsCard from "./NewsCard.vue";
import img1 from "../assets/img/photodune-7770665-two-white-coffee-mug-with-diy-decoration-o (2).jpg";
import img2 from "../assets/img/photodune-8797753-multiethnic-people-with-startup-business-t (2).jpg";
import img3 from "../assets/img/photodune-8522811-speaker-at-business-conference-and-present (2).jpg";

export default {
  components: { NewsCard },
  data() {
    return {
      cards: [
        {
          url: img1,
          comments: 0,
          date: "03 Dec 2013",
          title: "Sedial eiusmod tempor",
          text: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere....",
        },
        {
          url: img2,
          comments: 2,
          date: "03 Dec 2013",
          title: "Donec luctus imperdiet",
          text: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere....",
        },
        {
          url: img3,
          comments: 2,
          date: "03 Dec 2013",
          title: "Magna pars studiorum",
          text: "Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Idque Caesaris facere voluntate liceret: sese habere....",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.news {
  padding: 4rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;

    .news__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2.5rem;

      h3 {
        text-transform: uppercase;
        font-size: $text-l;
      }

      a {
        color: $scarlet;
        font-size: $text-xxs;
      }
    }
    .news__list {
      display: flex;
      gap: 2rem;
    }
  }
}
</style>
