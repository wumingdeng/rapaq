import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Share from '@/view/qshare/sharePage'
import Goods from '@/view/Goods'
import Maker from '@/view/Maker'
import Blog from '@/view/blog'
import Activity from '@/view/qshare/activity/activity'
import ActivityShow from '@/view/qshare/activity/activityShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/share',
    	name: "Share",
    	component: Share
    },
    {
    	path: '/goods',
    	name: "Goods",
    	component: Goods
    },
    {
    	path: '/maker',
    	name: "Maker",
    	component: Maker
    },
    {
        path: '/blog:id',
        name: "blog",
        component: Blog
    },
    {
        path: '/activity',
        name: "Activity",
        component: Activity
    },
    {
    	path: '/activityShow',
    	name: "ActivityShow",
    	component: ActivityShow
    }
  ]
})
