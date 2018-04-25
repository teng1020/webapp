import Vue from 'vue'

//滴滴库组件
import Cube from 'cube-ui'
Vue.use(Cube)


import renderComs from '../rendercoms/renderComs.vue';
import Container from './container/Container.vue';
//自定义组件库
import div from './layout/div.vue';
import panel from './panel/panel.vue';
import header from './header/header.vue';
import cell from './cell/cell.vue';
import grid from './grid/grid.vue';

Vue.component('yl-renderComs',renderComs)
Vue.component('yl-Container',Container)
Vue.component('yl-div',div)
Vue.component('yl-panel',panel)
Vue.component('yl-header',header)
Vue.component('yl-cell',cell)
Vue.component('yl-grid',grid)