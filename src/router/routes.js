
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue')},
      { path: 'Registro', component: () => import('pages/PaginaRegistro.vue')},
      { path: 'Login', component: () => import('pages/PaginaLogin.vue')},
      { path: 'Listado', component: () => import('pages/PaginaListado.vue')}
    ]
  },

  


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
