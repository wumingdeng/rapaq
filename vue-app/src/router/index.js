import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import Share from '@/view/qshare/sharePage'
import Goods from '@/view/Goods'
import Maker from '@/view/Maker'
import Blog from '@/view/blog'
import Partner from '@/view/partner'

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
    	path: '/partner:id',
    	name: "partner",
    	component: Partner
    }
  ]
})
