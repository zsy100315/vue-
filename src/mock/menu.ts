const data = [
  {
    id: 1,
    pid: 0,
    name: '功能1',
    path: '/',
    redirect: '/element/icon',
    component: 'BasicLayout',
    icon: 'AppleOutlined',
    key: 'layout',
    children: [
      {
        id: 2,
        pid: 1,
        name: '首页',
        path: '/element',
        redirect: '/element/icon',
        component: 'RouteView',
        icon: 'ChromeOutlined',
        key: 'element',
        children: [
          {
            id: 10,
            pid: 2,
            name: '图标组件',
            path: '/element/icon',
            redirect: '',
            component: '/element/icon',
            icon: '',
            key: 'el_icon',
            keepAlive: true
          },
          {
            id: 11,
            pid: 2,
            name: '表格组件',
            path: '/element/table',
            redirect: '',
            component: '/element/table',
            icon: '',
            key: 'el_table'
          },
          {
            id: 12,
            pid: 2,
            name: '详情',
            path: '/element/detail',
            redirect: '',
            component: '/element/detail',
            icon: '',
            key: 'detail',
            hidden: true
          }
        ]
      },
      {
        id: 3,
        pid: 1,
        name: '地图',
        path: '/team',
        redirect: '/team/optionc',
        component: 'RouteView',
        icon: 'WechatOutlined',
        key: 'team',
        children: [
          {
            id: 12,
            pid: 3,
            name: '加入维护',
            path: '/team/join',
            redirect: '',
            component: '/team/join',
            icon: '',
            key: 'join'
          },
          {
            id: 13,
            pid: 3,
            name: '赞助支持',
            path: '/team/sponsor',
            redirect: '',
            component: '/team/sponsor',
            icon: '',
            key: 'sponsor'
          }
        ]
      }
    ]
  },
  {
    id: 4,
    pid: 0,
    name: '功能2',
    path: '/second',
    redirect: '/update/issue',
    component: 'BasicLayout',
    icon: 'AppleOutlined',
    key: 'lan',
    children: []
  }
];

export default [
  {
    url: '/getMenu',
    methods: 'post',
    response: () => {
      return {
        message: 'success',
        status: 200,
        data
      };
    }
  }
];
