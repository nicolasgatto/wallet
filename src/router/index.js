import { createRouter, createWebHistory } from 'vue-router'
import StartView from '../views/StartView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ForgotPassView from '../views/ForgotPassView.vue'
import HomeView from '../views/HomeView.vue'
import TransactionView from '../views/TransactionView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
  {
    path: '/',
    name: 'start',
    component: StartView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/forgotpass',
    name: 'forgotpass',
    component: ForgotPassView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home/transaction',
    name: 'transaction',
    component: TransactionView
  },
  {
    path: '/home/settings',
    name: 'settings',
    component: SettingsView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
