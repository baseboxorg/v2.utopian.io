// imports.

export default [
  {
    path: '/',
    component: () => import('src/layouts/blankpage'),
    children: [
      {path: '', name: 'home', component: () => import('src/pages/index/index'), meta: {weight: 10}}
    ]
  },
  {
    path: '/',
    component: () => import('src/layouts/main'),
    children: [
      {
        path: 'project/create',
        name: 'project.create',
        component: () => import('src/pages/create-project/create-project'),
        meta: {weight: 50}
      },
      {
        path: 'project/:name',
        name: 'project',
        component: () => import('src/pages/project/project'),
        children: [
          {path: 'details', name: 'project.details', component: () => import('src/pages/project/details/details')},
          {path: 'contributions', name: 'project.contributions', component: () => import('src/pages/project/contributions/contributions')},
          {path: 'tasks', name: 'project.tasks', component: () => import('src/pages/project/tasks/tasks')}
        ]
      },
      {
        path: 'contributions',
        name: 'contributions',
        component: () => import('src/pages/contributions/contributions'),
        meta: {weight: 10}
      },
      {
        path: 'posts',
        name: 'posts',
        component: () => import('src/pages/contributions/contributions'),
        meta: {weight: 10, order: 'trending'}
      },
      {
        path: 'posts/:category',
        name: 'posts-category',
        component: () => import('src/pages/contributions/contributions'),
        meta: {weight: 10, order: 'new'}
      },
      {
        path: 'trending/:category',
        name: 'posts.trending',
        component: () => import('src/pages/contributions/contributions'),
        meta: {weight: 10, order: 'trending'}
      },
      {
        path: 'new/:category',
        name: 'posts.new',
        component: () => import('src/pages/contributions/contributions'),
        meta: {weight: 10, order: 'new'}
      },
      {
        path: ':category/:author/:permlink',
        name: 'post',
        component: () => import('src/pages/post/post'),
        meta: {weight: 10, centered: true}
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('src/pages/create/create'),
        meta: {weight: 10}
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('src/pages/settings/settings'),
        meta: {weight: 50}
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('src/layouts/guest'),
    children: [
      {path: 'login', name: 'auth.login', component: () => import('src/pages/auth/login'), meta: {weight: 10}},
      {path: 'logout', name: 'auth.logout', component: () => import('src/pages/auth/logout'), meta: {weight: 10}},
      {path: 'callback', name: 'auth.callback', component: () => import('src/pages/auth/callback'), meta: {weight: 10}},
      {path: 'github', name: 'auth.github', component: () => import('src/pages/auth/github'), meta: {weight: 10}}
    ]
  },
  { // Always leave this as last one
    path: '*',
    component: () => import('src/pages/404/404')
  }
]
