<template>
  <div class="subscribe__box" :class="`subscribe-box--${text.toLowerCase()}`">
    <p>{{ number }}</p>
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  props: {
    number: Number,
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.subscribe__box {
  padding: 1rem 2rem;

  border-radius: 0.2rem;
  text-align: center;
  color: white;
  text-transform: uppercase;

  p:first-of-type {
    font-size: $text-xxl;
  }

  p:last-of-type {
    font-size: $text-xxs;
  }
}
.subscribe-box--days {
  background-color: rgba(#000000, 0.8);
}

.subscribe-box--hours {
  background-color: rgba(#000000, 0.7);
}

.subscribe-box--mins {
  background-color: rgba(#000000, 0.6);
}

.subscribe-box--secs {
  background-color: rgba(#000000, 0.5);
}
</style>
