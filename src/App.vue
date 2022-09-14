<template>
  <div id="app">
    <MainHeader />
    <MainHero />
    <SectionInfo />
    <SectionSubscribe />
    <SectionSpeakers />
    <SectionProgram />
    <SectionLocation />
    <SectionRecentNews />
    <SectionTickets />
    <SectionPresentation />
    <SectionSponsors />
    <MainFooter />
  </div>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import MainHero from "./components/MainHero.vue";
import SectionInfo from "./components/SectionInfo.vue";
import SectionSubscribe from "./components/SectionSubscribe.vue";
import SectionSpeakers from "./components/SectionSpeakers.vue";
import SectionProgram from "./components/SectionProgram.vue";
import SectionLocation from "./components/SectionLocation.vue";
import SectionRecentNews from "./components/SectionRecentNews.vue";
import SectionTickets from "./components/SectionTickets.vue";
import SectionPresentation from "./components/SectionPresentation.vue";
import SectionSponsors from "./components/SectionSponsors.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",

  components: {
    MainHeader,
    MainHero,
    SectionInfo,
    SectionSubscribe,
    SectionSpeakers,
    SectionProgram,
    SectionLocation,
    SectionRecentNews,
    SectionTickets,
    SectionPresentation,
    SectionSponsors,
    MainFooter,
  },
};
</script>

<style></style>
