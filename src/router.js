import Vue from "vue";
import Router from "vue-router";
import Country from "./views/Country.vue";
import StatMain from "./views/StatMain.vue";

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
      // path: "/stat/:country/:division",
      name: "statmain",
      component: StatMain,
      props: (route) => ({ country: decodeURIComponent(route.query.country), division: encodeURIComponent(route.query.division) })
    },
  ]
});
