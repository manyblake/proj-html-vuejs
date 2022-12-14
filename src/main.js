import Vue from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquarePinterest } from "@fortawesome/free-brands-svg-icons";
import { faFlickr } from "@fortawesome/free-brands-svg-icons";
import { faGooglePlusSquare } from "@fortawesome/free-brands-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faMagnifyingGlass,
  faTrophy,
  faBoltLightning,
  faQuestion,
  faChevronLeft,
  faChevronRight,
  faClock,
  faLocationArrow,
  faUser,
  faPlus,
  faMinus,
  faPerson,
  faCopyright,
  faPhone,
  faEnvelope,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquarePinterest,
  faGooglePlusSquare,
  faFlickr,
  faBullhorn
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
