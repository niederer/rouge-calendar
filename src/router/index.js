import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import CalendarView from '@/components/CalendarView.vue';
import Auth from '@okta/okta-vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/implicit/callback',
      component: Auth.handleCallback(),
    },
    {
      path: '/calendar',
      name: 'CalendarView',
      component: CalendarView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(Vue.prototype.$auth.authRedirectGuard());

export default router;
