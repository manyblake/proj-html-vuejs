<template>
  <section>
    <div class="container">
      <div class="speakers__header">
        <h3>Speakers</h3>

        <div class="speakers__chevrons">
          <font-awesome-icon
            class="speakers__chevron"
            icon="fa-solid fa-chevron-left"
          />
          <font-awesome-icon
            class="speakers__chevron"
            icon="fa-solid fa-chevron-right"
          />
        </div>
      </div>

      <div class="speakers">
        <div v-for="(speaker, i) in speakers" :key="i">
          <SpeakerCard
            :url="speaker.url"
            :name="speaker.name"
            :title="speaker.title"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SpeakerCard from "./SpeakerCard.vue";
import speaker1 from "../assets/img/speaker-6.jpg";
import speaker2 from "../assets/img/speaker-5.jpg";
import speaker3 from "../assets/img/speaker-4.jpg";
import speaker4 from "../assets/img/speaker-3.jpg";

export default {
  components: { SpeakerCard },
  data() {
    return {
      speakers: [
        {
          url: speaker1,
          name: "Patrick Spencer",
          title: "S&P Analyzer",
        },
        {
          url: speaker2,
          name: "Janet Jones",
          title: "Newyork Post's GM",
        },
        {
          url: speaker3,
          name: "Michael Dover",
          title: "Starbuck's CEO",
        },
        {
          url: speaker4,
          name: "Angelina Holy",
          title: "Maxii's Manager",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-color: #f3f3f3;
  padding: 4rem;

  .container {
    max-width: 1200px;
    margin: 0 auto;

    .speakers__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;

      h3 {
        text-transform: uppercase;
        font-size: $text-xl;
      }

      .speakers__chevrons {
        display: flex;
        gap: 0.5rem;

        .speakers__chevron {
          padding: 0.5rem;
          background-color: $scarlet;
          color: white;
          border-radius: 0.3rem;
          display: inline-block;
          font-size: $text-xxs;
          aspect-ratio: 1/1;
          cursor: pointer;
        }
      }
    }
    .speakers {
      display: flex;
      flex-wrap: nowrap;
      gap: 2rem;
    }
  }
}
</style>
