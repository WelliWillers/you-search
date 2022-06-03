import BaseInput from './BaseInput.vue';
import Logo from './Logo.vue';
import BottomBase from './BottomBase.vue';

const GlobalComponents = {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(Logo.name, Logo);
    Vue.component(BottomBase.name, BottomBase);
  }
}
export default GlobalComponents;