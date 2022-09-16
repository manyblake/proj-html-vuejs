<template>
  <footer>
    <div class="footer__body">
      <div class="container">
        <section class="footer__about-us">
          <FooterAboutUs />
        </section>

        <section class="footer__recent-news">
          <FooterRecentNews />
        </section>

        <section class="footer__get-seat">
          <FooterGetSeat />
        </section>

        <section class="footer__gallery">
          <FooterGallery />
        </section>
      </div>
    </div>

    <div class="footer__info">
      <div class="container">
        <p class="footer__copyright">
          <font-awesome-icon icon="fa-regular fa-copyright" />
          Copyright GoodLayers, All Right Reserved
        </p>

        <ul class="footer__actions">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Accomodation</a>
          </li>
          <li>
            <a href="#">Call For Paper</a>
          </li>
          <li>
            <a href="#">Contacts Us</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterAboutUs from "./FooterAboutUs.vue";
import FooterRecentNews from "./FooterRecentNews.vue";
import FooterGetSeat from "./FooterGetSeat.vue";
import FooterGallery from "./FooterGallery.vue";

export default {
  components: { FooterAboutUs, FooterRecentNews, FooterGetSeat, FooterGallery },
};
</script>

<style lang="scss" scoped>
footer {
  color: $cloud;

  .footer__body {
    background-color: #212121;
  }

  .footer__body .container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 4rem 0;
  }

  .footer__info {
    background-color: #161616;
    padding: 2rem 0;
  }

  .footer__info .container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__copyright {
      color: $natural-gray;
      font-size: $text-xxs;
    }

    .footer__actions {
      display: flex;

      li a {
        font-size: $text-xxs;
        color: $natural-gray;
        line-height: 28px;
      }

      li:not(:last-of-type):after {
        content: "|";
        display: inline-block;
        padding: 0.2rem;
      }
    }
  }
}
</style>
