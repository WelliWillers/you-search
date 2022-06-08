import BaseInput from './BaseInput.vue';
import BaseSelect from './BaseSelect.vue';
import Logo from './Logo.vue';
import BottomBase from './BottomBaseNavigation.vue';
import WhachVideo from './WhachVideo.vue';
import CardVideo from './CardVideo.vue';

const GlobalComponents = {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseSelect.name, BaseSelect);
    Vue.component(Logo.name, Logo);
    Vue.component(BottomBase.name, BottomBase);
    Vue.component(WhachVideo.name, WhachVideo);
    Vue.component(CardVideo.name, CardVideo);
  }
}
export default GlobalComponents;