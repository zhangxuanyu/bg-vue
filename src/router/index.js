import {createRouter, createWebHashHistory} from "vue-router";



const routes = [
  {
    path: '/',  //path  链接路径
    name: 'index',  // 路由名称
    component: () => import("@/pages/index.vue"), //映射组件
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
});


export default router
