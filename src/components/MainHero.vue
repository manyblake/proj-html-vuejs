<template>
  <section class="hero">
    <h1><span>Conference On</span>Social Networks</h1>

    <h2 class="hero__subtitle">
      <span class="hero__info-date"> 23-26 May 2019</span>
      <span class="hero__info-city">Sans Francisco</span>
      <span class="hero__info-speakers">8 Speakers</span>
    </h2>

    <a class="button" href="#">Register Online</a>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero {
  padding: 5.5rem 0;
  background-image: url("../assets/img/slider-1-bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    color: white;
    font-size: $text-xxxl;
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    padding: 1.5rem;

    span {
      font-weight: 300;
      display: inline-block;
      font-size: $text-xxl;
    }
  }

  .hero__subtitle {
    text-transform: uppercase;
    color: white;
    font-size: $text-xs;
    position: relative;
    display: inline-block;
    margin-bottom: 2rem;

    &::before {
      display: inline-block;
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: -0.5rem;
      height: 3px;
      background-color: white;
    }

    .hero__info-date:after,
    .hero__info-city:after {
      display: inline-block;
      content: "/";
      margin: 0 1rem;
    }
  }

  .button {
    background-color: $scarlet;
    color: white;
    padding: 1rem;
    display: inline-block;
    text-transform: uppercase;
    border-radius: 0.25rem;
    font-size: $text-xxs;
    font-weight: 700;
  }
}
</style>
