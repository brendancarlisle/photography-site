import { Platform } from 'quasar'

let routes = []

const desktopRoutes = [
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/IndexPage.vue') }
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/AboutPage.vue') }
    ]
  },

  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/ContactPage.vue') }
    ]
  },

  {
    path: '/gallery',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/GalleryPage.vue') },
      {path: ':galleryName', component: () => import('src/pages/Desktop/GalleryDisplayPage.vue')}
    ]
  },

  {
    path: '/investment',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/InvestmentPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Desktop/ErrorNotFound.vue')
  }
]

const mobileRoutes = [
  {
    path: '/',
    component: () => import('layouts/MobileLayout.vue'),
    children: [
      { path: '/home', component: () => import('src/pages/Mobile/IndexPage.vue') }
    ]
  },

  {
    path: '/about',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/AboutPage.vue') }
    ]
  },

  {
    path: '/contact',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/ContactPage.vue') }
    ]
  },

  {
    path: '/gallery',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/GalleryPage.vue') }
    ]
  },

  {
    path: '/investment',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Desktop/InvestmentPage.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Desktop/ErrorNotFound.vue')
  }
]

if (Platform.is.desktop) {
  routes = desktopRoutes
} else {
  routes = mobileRoutes
}

export default routes
