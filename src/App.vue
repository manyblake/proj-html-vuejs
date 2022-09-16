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
    <SectionSocials />
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
import SectionSocials from "./components/SectionSocials.vue";
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
    SectionSocials,
    SectionSponsors,
    MainFooter,
  },
};
</script>

<style>
@import "@/assets/style/reset.scss";

@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://use.typekit.net/poo7ndk.css");
</style>
