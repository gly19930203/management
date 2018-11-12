import Vue from 'vue'
import Router from 'vue-router'
import ArrangeCourse from '../pages/ArrangeCourse'
import SelectOne from '../pages/SelectOne'
import Count from '../pages/Count'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'ArrangeCourse',component: ArrangeCourse},
    {path: '/SelectOne',name: 'SelectOne',component: SelectOne},
    {path: '/Count',name: 'Count',component: Count}
  ],
  mode:"history"
})
