export const front_routes = [
  {
    path: '/',
    name: 'Home',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/zems/Front/Pages/HomePage.vue'),
      },
    ],
  },
]
