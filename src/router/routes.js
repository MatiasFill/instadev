const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'signin', component: () => import('pages/Signin/Index.vue'), alias: ''},
      { path: 'main', component: () => import('pages/MainPage/Index.vue')},
      { path: 'my-area', component: () => import('pages/MyArea/Index.vue')},
      { path: 'profile', component: () => import('src/pages/Profile/Index.vue')},
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes