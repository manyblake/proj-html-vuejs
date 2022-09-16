<template>
  <header class="container">
    <picture>
      <img src="../assets/img/logo.png" />
    </picture>

    <MainNavbar />

    <a class="header__search" href="#">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </a>
  </header>
</template>

<script>
import MainNavbar from "./MainNavbar.vue";

export default {
  components: { MainNavbar },
};
</script>

<style lang="scss" scoped>
header.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;

  .header__search {
    display: flex;
    align-items: center;
    color: $gray;

    &:before {
      display: block;
      content: "";
      height: $text-xxs;
      width: 2px;
      background-color: $gray;
      margin: 2rem;
    }
  }
}
</style>
