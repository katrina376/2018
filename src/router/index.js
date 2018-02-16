import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/Main'
import Agenda from '../pages/Agenda'
import Sponsor from '../pages/Sponsor'
import Staff from '../pages/Staff'
import Location from '../pages/Location'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      meta: { index: 0 }
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda,
      meta: { index: 1 }
    },
    {
      path: '/agenda/:activityId',
      name: 'AgendaActivity',
      component: Agenda,
      meta: { index: 1, page: false },
      props: true
    },
    {
      path: '/agenda/sub/:subId',
      name: 'AgendaSub',
      component: Agenda,
      meta: { index: 1, page: false }
    },
    {
      path: '/sponsor',
      name: 'Sponsor',
      component: Sponsor,
      meta: { index: 2 }
    },
    {
      path: '/person-Sponsor',
      name: 'person-Sponsor',
      component: Sponsor,
      meta: { index: 2 }
    },
    {
      path: '/staff',
      name: 'Staff',
      component: Staff,
      meta: { index: 3 }
    },
    {
      path: '/location',
      name: 'Location',
      component: Location,
      meta: { index: 4 }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (to.name === 'person-Sponsor') {
      return { x: 0, y: 105 }
    } else if (from.meta.page === false || to.meta.page === false) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
