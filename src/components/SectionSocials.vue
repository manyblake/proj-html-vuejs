<template>
  <div class="container">
    <section class="socials">
      <div class="socials__presentation">
        <h3>Presentation</h3>

        <div class="socials__video">
          <iframe
            src="https://player.vimeo.com/video/84467622?h=0d19bc51bf"
            width="640"
            height="360"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <div class="socials__twitter-feeds">
        <h3>Twitter Feed</h3>

        <ul class="socials__feeds-list">
          <li class="socials__feed" v-for="(feed, i) in feeds" :key="i">
            <TwitterFeedCard :tweet="feed.tweet" :date="feed.date" />
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import TwitterFeedCard from "./TwitterFeedCard.vue";
export default {
  components: { TwitterFeedCard },

  data() {
    return {
      feeds: [
        {
          tweet:
            "Stand out and be vibrant with some of the best bright and bold templates on <a href='#'>@Envanto</a> Elements. And add a splash of c...<a href='#'>https://t.co/jFrsnzEjK7</a>",
          date: "3 days ago",
        },
        {
          tweet:
            "Stand out and be vibrant with some of the best bright and bold templates on <a>@Envanto</a> Elements. And add a splash of c...<a href='#'>https://t.co/jFrsnzEjK7</a>",
          date: "9 days ago",
        },
        {
          tweet:
            "Stand out and be vibrant with some of the best bright and bold templates on <a>@Envanto</a> Elements. And add a splash of c...<a href='#'>https://t.co/jFrsnzEjK7</a>",
          date: "11 days ago",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;

  .socials {
    display: flex;
    padding: 4rem 0;

    h3 {
      text-transform: uppercase;
      font-size: $text-l;
    }

    .socials__presentation {
      flex-basis: 0;
      flex-grow: 1;

      .socials__video {
        max-width: 90%;
      }
    }

    .socials__twitter-feeds {
      flex-basis: 0;
      flex-grow: 1;

      h3 {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>
