import {library, config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faEnvelope, faFileLines} from '@fortawesome/free-solid-svg-icons'
import {faCircleArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faXTwitter} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faEnvelope);
library.add(faCircleArrowDown);
library.add(faGithub);
library.add(faXTwitter);
library.add(faLinkedin);
library.add(faFileLines);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})