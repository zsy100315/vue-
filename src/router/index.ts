import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        meta: {
          title: '首页'
        },
        component: () => import('views/Home.vue')
      },
      {
        path: '/echarts',
        meta:{
          title:'图表'
        },
        children: [
          {
            path: '/echarts/map',
            name: 'Map',
            meta: {
              title: '地图'
            },
            component: () => import('views/echarts/map.vue')
          },
          {
            path: '/echarts/viewMap',
            name: 'ViewMap',
            meta: {
              title: '视图映射'
            },
            component: () => import('views/echarts/viewMap.vue')
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from) => {
  document.title =  to.meta.title as string || 'vue-admin';
});

export default router;
