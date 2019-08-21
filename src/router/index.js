import Vue from 'vue'
import Router from 'vue-router'
import Register from '../view/register'
import Login from '../view/login'
import Home from '../view/home'
import Cart from '../view/cart'
import Message from '../view/message'
import Collection from '../view/collection'
import Category from '../view/category'
import GoodsList from '../view/goodsList'
import GoodsDetail from '../view/goodsDetail'
import OrderList from '../view/orderList'
import OrderDetail from '../view/orderDetail'
import Logistics from '../view/logistics'
import OrderConfirm from '../view/orderConfirm'
import Payment from '../view/payment'
import PaySuccess from '../view/paySuccess'
import Comment from '../view/comment'
import Evaluate from '../view/evaluate'
import User from '../view/user'
import Setting from '../view/setting'
import BaseInfo from '../view/baseInfo'
import ModifyPwd from '../view/modifyPwd'
import Address from '../view/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
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
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/collection',
      name: 'collection',
      component: Collection
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/goodsList',
      name: 'goodsList',
      component: GoodsList
    },
    {
      path: '/goodsDetail',
      name: 'goodsDetail',
      component: GoodsDetail
    },
    {
      path: '/orderList',
      name: 'orderList',
      component: OrderList
    },
    {
      path: '/orderDetail',
      name: 'orderDetail',
      component: OrderDetail
    },
    {
      path: '/logistics',
      name: 'logistics',
      component: Logistics
    },
    {
      path: '/orderConfirm',
      name: 'orderConfirm',
      component: OrderConfirm
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/paySuccess',
      name: 'paySuccess',
      component: PaySuccess
    },
    {
      path: '/comment',
      name: 'comment',
      component: Comment
    },
    {
      path: '/evaluate',
      name: 'evaluate',
      component: Evaluate
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },
    {
      path: '/baseInfo',
      name: 'baseInfo',
      component: BaseInfo
    },
    {
      path: '/modifyPwd',
      name: 'modifyPwd',
      component: ModifyPwd
    },
    {
      path: '/address',
      name: 'address',
      component: Address
    }
  ]
})
