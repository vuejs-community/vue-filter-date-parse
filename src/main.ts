import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { dateParse } from './filters/dateParse';

export { dateParse } from './filters/dateParse';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('dateParse', dateParse);
  },
  version
};
