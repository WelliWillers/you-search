import BaseInput from './Forms/BaseInput.vue';
import BaseSelect from './Forms/BaseSelect.vue';
import Logo from './Header/Logo.vue';
import BottomBase from './Navigation/BottomBaseNavigation.vue';
import WhachVideo from './Video/WhachVideo.vue';
import CardVideo from './Video/CardVideo.vue';
import ButtonClear from './Navigation/ButtonClear.vue';

const GlobalComponents = {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseSelect.name, BaseSelect);
    Vue.component(Logo.name, Logo);
    Vue.component(BottomBase.name, BottomBase);
    Vue.component(WhachVideo.name, WhachVideo);
    Vue.component(CardVideo.name, CardVideo);
    Vue.component(ButtonClear.name, ButtonClear);
  }
}
export default GlobalComponents;