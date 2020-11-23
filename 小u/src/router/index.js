import Vue from 'vue'
import Router from 'vue-router'

import index from "../components/index"
import home from "../components/home"
import cart from "../components/cart"
import mine from "../components/mine"
import cartdd from "../components/cartdd"
import sort from "../components/sort"
import list from "../components/list"
import denglu from "../components/denglu"
import zhuce from "../components/zhuce"
import xiangqing from "../components/xiangqing"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/index",
      component: index,
      children: [
        {
          path: "/home",
          component: home
        },
        {
          path: "/cart",
          component: cart,
        },
        {
          path: "/mine",
          component: mine
        },
        {
          path: "",
          redirect: "/home"
        },
        {
          path: "/cartdd",
          component:cartdd
        },
        {
          path:"/sort",
          component:sort
        },
      ]
    },
    {
      path:"/list",
      component:list
    },
    {
      path:"/denglu",
      component:denglu
    },
    {
      path:"/zhuce",
      component:zhuce
    },
    {
      path:"/xiangqing",
      component:xiangqing
    },
    {
      path: "*",
      redirect: "/index"
    }
  ]
})
