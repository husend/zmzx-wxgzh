import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Category from '../pages/Category/Category'
import ShoppingCart from '../pages/ShoppingCart/ShoppingCart'
import Profile from '../pages/Profile/Profile'
import HeadSearch from '../pages/HeadSearch/HeadSearch'
import List from '../pages/List/List'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        showFooter: true
      },
      children: [
        {
          path: 'list',
          name: 'List',
          component: List,
          meta: {
            showFooter: true
          }
        }
      ]
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/search',
      name: 'HeadSearch',
      component: HeadSearch
    }
  ]
})
