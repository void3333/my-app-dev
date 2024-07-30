import './assets/base.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'

// Importar ícones
import {
    faArrowRightArrowLeft,
    faHouse,
    faUserSecret,
    faCog,
    faInfoCircle,
    faArrowLeft,
    faArrowRight,
    faImages
} from '@fortawesome/free-solid-svg-icons'

// Adiciona os ícones à biblioteca
library.add(
    faArrowRightArrowLeft,
    faHouse,
    faUserSecret,
    faCog,
    faInfoCircle,
    faArrowLeft,
    faArrowRight,
    faImages
)

const app = createApp(App)

// Registra o componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

// Usa o roteador na aplicação
app.use(router)

// Monta a aplicação no elemento com ID 'app'
app.mount('#app')
