import {library, config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faAngleRight, faArrowRight, faEnvelope, faFileLines, faHandshake, faRocket, faMasksTheater, faPeopleGroup, faPalette, faSquareBinary, faGraduationCap, faClock} from '@fortawesome/free-solid-svg-icons'
import {faCircleArrowDown} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faXTwitter, faBluesky, faItchIo} from '@fortawesome/free-brands-svg-icons'
import {faLinkedin} from '@fortawesome/free-brands-svg-icons'

config.autoAddCss = false

library.add(faEnvelope);
library.add(faCircleArrowDown);
library.add(faHandshake);
library.add(faRocket);
library.add(faMasksTheater);
library.add(faPeopleGroup);
library.add(faPalette);
library.add(faSquareBinary);
library.add(faGraduationCap);
library.add(faClock);
library.add(faGithub);
library.add(faXTwitter);
library.add(faLinkedin);
library.add(faBluesky);
library.add(faFileLines);
library.add(faAngleRight);
library.add(faItchIo);

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})