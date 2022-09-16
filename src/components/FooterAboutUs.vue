<template>
  <div class="about-us">
    <h4 class="about-us___title">About Us</h4>

    <p class="about-us___description">
      Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus.
    </p>

    <div class="about-us__socials">
      <font-awesome-icon
        class="about-us__brand"
        icon="fa-brands fa-square-twitter"
      />
      <font-awesome-icon
        class="about-us__brand"
        icon="fa-brands fa-square-instagram"
      />
      <font-awesome-icon
        class="about-us__brand"
        icon="fa-brands fa-square-facebook"
      />
      <font-awesome-icon
        class="about-us__brand"
        icon="fa-brands fa-google-plus-square"
      />
      <font-awesome-icon
        class="about-us__brand"
        icon="fa-brands fa-square-pinterest"
      />
      <font-awesome-icon class="about-us__brand" icon="fa-brands fa-flickr" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about-us {
  .about-us___title {
    font-size: $text-s;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  .about-us___description {
    line-height: 1.6;
    font-size: $text-xs;
    padding-right: 2rem;
    margin-bottom: 1rem;
  }

  .about-us__socials {
    display: flex;
    gap: 0.75rem;
    color: white;

    .about-us__brand {
      height: 1.5rem;
      aspect-ratio: 1/1;
      cursor: pointer;
    }
  }
}
</style>
