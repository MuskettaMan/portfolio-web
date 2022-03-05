import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faTimeline } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faEnvelope, faCircleArrowDown, faGithub, faLinkedin, faCalendar, faTimeline, faCode, faBolt, faUser)

const app = createApp(App)
app.use(router);
app.component('fa-icon', FontAwesomeIcon);
app.mount('#app');
