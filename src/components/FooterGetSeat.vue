<template>
  <div class="get-seat">
    <h4 class="get-seat__title">Get Your Seat!</h4>

    <p class="get-seat__description">
      Book for your seat before it's too rate. We provide variety of ticket
      options.
    </p>

    <a href="#">Check Out Tickets!</a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.get-seat__title {
  font-size: $text-xxs;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.get-seat__description {
  line-height: 1.6;
  font-size: $text-xxxs;
  padding-right: 2rem;
  margin-bottom: 2rem;
}

a {
  padding: 0.85rem;
  color: white;
  background-color: $scarlet;
  text-transform: uppercase;
  font-size: $text-xxxs;
  font-weight: 600;
}
</style>
