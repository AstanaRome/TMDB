import Vue from "vue";
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Carousel3d from 'vue-carousel-3d';




Vue.use(Vuetify);
Vue.use(Carousel3d);


export default new Vuetify({
    icons: {
        iconfont: 'md' || 'fa'
    }
});


