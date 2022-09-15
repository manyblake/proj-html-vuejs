<template>
  <section class="tickets">
    <div class="container">
      <h3 class="tickets__title">Tickets</h3>
      <ul class="tickets__list">
        <li v-for="(ticket, i) in tickets" :key="i">
          <TicketCard :ticket="ticket" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import TicketCard from "./TicketCard.vue";

export default {
  components: { TicketCard },
  data() {
    return {
      tickets: [
        {
          title: "One Day Pass",
          price: "Free",
          benefits: [
            "One Day Access",
            "Coffee Break",
            "Lunch (International Buffet)",
            "Documents Sheets",
            "50USD Voucher Fox Next Event",
          ],
          featured: false,
          url: "#",
        },
        {
          title: "Four Day Pass",
          price: "750.00 USD",
          benefits: [
            "Four Day Access",
            "Coffee Break",
            "Lunch (International Buffet)",
            "Documents Sheets",
            "100USD Voucher Fox Next Event",
          ],
          featured: true,
          url: "#",
        },
        {
          title: "Two Day Pass",
          price: "580.00 USD",
          benefits: [
            "Two Day Access",
            "Coffee Break",
            "Lunch (International Buffet)",
            "Documents Sheets",
            "70USD Voucher Fox Next Event",
          ],
          featured: false,
          url: "#",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.tickets {
  padding: 4rem;
  background-image: url("../assets/img/ticket-bg.jpg");
  background-repeat: repeat;
  background-position: center;
  background-size: contain;

  .container {
    max-width: 1200px;
    margin: 0 auto;

    .tickets__title {
      font-size: $text-xl;
      text-transform: uppercase;
      color: white;
      margin-bottom: 2rem;
    }

    .tickets__list {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
    }

    h3 {
      text-align: center;
      text-transform: uppercase;
    }
  }
}
</style>
