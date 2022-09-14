<template>
  <nav>
    <ul class="nav-list">
      <li
        class="nav-list__element"
        v-for="(link, i) in navbarLinks"
        :key="link"
      >
        <a class="nav-list__link" :class="i === 0 ? 'active' : ''" href="#">
          {{ link }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarLinks: [
        "home",
        "pages",
        "program",
        "tickets",
        "speakers",
        "papers",
        "blog",
        "shortcodes",
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
nav {
  margin-left: auto;
  padding: 2rem 0;

  .nav-list {
    display: flex;
    gap: 2rem;

    .nav-list__element {
      .nav-list__link {
        text-transform: uppercase;
        font-size: $text-xxs;
        font-weight: 700;
        padding: 0.5rem 0;
        display: block;
        color: $gray;

        &.active {
          color: $scarlet;
          position: relative;

          &::after {
            display: block;
            content: "";
            height: 3px;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -0.25rem;
            background-color: $scarlet;
          }
        }
      }
    }
  }
}
</style>
