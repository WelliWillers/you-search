import BaseInput from './BaseInput.vue';

const GlobalComponents = {
  install(Vue) {
    Vue.component(BaseInput.name, BaseInput);
  }
}
export default GlobalComponents;