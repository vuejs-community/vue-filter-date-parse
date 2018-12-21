import { VueConstructor } from 'vue';
import { version } from '../package.json';
import { dateParseFilter } from './filters/dateParse';

export { dateParseFilter } from './filters/dateParse';

export default {
  install(Vue: VueConstructor): void {
    Vue.filter('dateParse', dateParseFilter);
  },
  version
};
