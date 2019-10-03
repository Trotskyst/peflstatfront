import Vue from "vue";
import Router from "vue-router";
import Country from "./views/Country";
import Stat from "./views/Stat";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "",
      name: "country",
      component: Country
    },
    {
      path: "/stat",
      name: "stat",
      component: Stat,
      props: (route) => ({ country: decodeURIComponent(route.query.country), division: decodeURIComponent(route.query.division) }),
    },
  ]
});
