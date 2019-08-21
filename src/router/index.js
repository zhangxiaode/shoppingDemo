import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/view/register'
import Login from '@/view/login'
import ModifyPwd from '@/view/modifyPwd'
import Page from '@/view/page'
import Home from '@/view/page/home'
import Cart from '@/view/page/cart'
import Message from '@/view/page/message'
import Collection from '@/view/page/collection'
import Category from '@/view/page/category'
import GoodsList from '@/view/page/goodsList'
import GoodsDetail from '@/view/page/goodsDetail'
import OrderList from '@/view/page/orderList'
import OrderDetail from '@/view/page/orderDetail'
import Logistics from '@/view/page/logistics'
import OrderConfirm from '@/view/page/orderConfirm'
import Payment from '@/view/page/payment'
import PaySuccess from '@/view/page/paySuccess'
import Comment from '@/view/page/comment'
import Evaluate from '@/view/page/evaluate'
import User from '@/view/page/user'
import Setting from '@/view/page/user/setting'
import BaseInfo from '@/view/page/user/baseInfo'
import Address from '@/view/page/user/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/page/home'
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/modifyPwd',
      name: 'modifyPwd',
      component: ModifyPwd
    },
    {
      path: '/page',
      name: 'page',
      component: Page,
      redirect: '/page/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'cart',
          name: 'cart',
          component: Cart
        },
        {
          path: 'message',
          name: 'message',
          component: Message
        },
        {
          path: 'collection',
          name: 'collection',
          component: Collection
        },
        {
          path: 'category',
          name: 'category',
          component: Category
        },
        {
          path: 'goodsList',
          name: 'goodsList',
          component: GoodsList
        },
        {
          path: 'goodsDetail',
          name: 'goodsDetail',
          component: GoodsDetail
        },
        {
          path: 'orderList',
          name: 'orderList',
          component: OrderList
        },
        {
          path: 'orderDetail',
          name: 'orderDetail',
          component: OrderDetail
        },
        {
          path: 'logistics',
          name: 'logistics',
          component: Logistics
        },
        {
          path: 'orderConfirm',
          name: 'orderConfirm',
          component: OrderConfirm
        },
        {
          path: 'payment',
          name: 'payment',
          component: Payment
        },
        {
          path: 'paySuccess',
          name: 'paySuccess',
          component: PaySuccess
        },
        {
          path: 'comment',
          name: 'comment',
          component: Comment
        },
        {
          path: 'evaluate',
          name: 'evaluate',
          component: Evaluate
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          redirect: '/page/user/setting',
          children: [
            {
              path: 'setting',
              name: 'setting',
              component: Setting
            },
            {
              path: 'baseInfo',
              name: 'baseInfo',
              component: BaseInfo
            },
            {
              path: 'address',
              name: 'address',
              component: Address
            }
          ]
        }
      ]
    }
  ]
})
