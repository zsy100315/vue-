import { RouteRecordRaw } from 'vue-router';
import Layout from '@/layout/index.vue';

export const basicRouter: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('views/Home.vue')
      },
      {
        path: 'echarts',
        name: 'Echarts',
        component: () => import('views/Home.vue'),
        children: [
          {
            path: 'echarts/map',
            name: 'Map',
            component: () => import('views/echarts/map.vue')
          },
          {
            path: 'echarts/view',
            name: 'Map',
            component: () => import('@/views/echarts/viewMap.vue')
          }
        ]
      }
    ]
  }
];