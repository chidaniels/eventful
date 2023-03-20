import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Bucket from '../views/Bucket.vue'
import AddItems from '../views/AddItems.vue'
import Update from '../views/Update.vue'
import EditDelete from '../views/EditDelete.vue'
import CreateAccount from '../views/CreateAccount'





const routes = [
  {
    name:'Login',
    component:Login,
    path:'/'
  },
  {
    name:'Bucket',
    component:Bucket,
    path:'/bucket'
  },
  {
    name:'AddItems',
    component:AddItems,
    path:'/additems'
  },
  {
    name:'Update',
    component:Update,
    path:'/update'
  },
  {
    name:'EditDelete',
    component:EditDelete,
    path:'/editdelete'
  },
  {
    name:'CreateAccount',
    component:CreateAccount,
    path:'/createaccount'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
