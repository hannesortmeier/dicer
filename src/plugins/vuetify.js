import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        background: "#fdbe01"
      },
      dark: {
        background: "#fdbe01"
      }
    },
  },
})

export default new Vuetify({
});
