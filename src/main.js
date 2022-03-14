import { createApp } from 'vue';
import App from './App.vue';
import router from "@/router";
import { createMetaManager } from "vue-meta";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faCircleArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faTimeline } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import store from './store'

library.add(faEnvelope, faCircleArrowDown, faGithub, faLinkedin, faCalendar, faTimeline, faCode, faBolt, faUser, faXmark, faFilePdf, faLink)

const app = createApp(App).use(store)
app.use(router);
app.use(createMetaManager())
app.component('fa-icon', FontAwesomeIcon);
app.mount('#app');
