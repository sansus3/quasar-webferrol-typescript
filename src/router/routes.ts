import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayoutFronted.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/IndexPage.vue') },
      { path: 'sign-in', name: 'SignIn', meta: { authRoute: true }, component: () => import('pages/SignIn.vue') },
      { path: 'work-experience', name: 'WorkExperience', component: () => import('pages/WorkExperience.vue') }
    ],
  },
  //Backend
  {
    path: '/admin',
    component: () => import('layouts/MainLayoutBackend.vue'),
    children: [
      { path: '', name: 'HomeAdmin', meta: { protectedRoute: true }, component: () => import('pages/backend/IndexPage.vue') },
      { path: 'work-experience', name: 'WorkExperienceAdmin', meta: { protectedRoute: true }, component: () => import('pages/backend/WorkExperience.vue') },
      { path: 'new-experience', name: 'NewExperience', meta: { protectedRoute: true }, component: () => import('pages/backend/NewExperience.vue') },
      { path: 'edit-experience/:idDoc', name: 'EditExperience', meta: { protectedRoute: true }, component: () => import('pages/backend/EditExperience.vue') },
      { path: 'user-profile', name: 'UserProfile', meta: { protectedRoute: true }, component: () => import('pages/backend/UserProfile.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
