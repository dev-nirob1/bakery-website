export const front_routes = [
  {
    path: '/',
    component: () => import('@/zems/Front/Layout/FrontLayout.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/zems/Front/Pages/HomePage.vue'),
      },
    ],
  },
]
