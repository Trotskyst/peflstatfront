import Vue from "vue";
import Router from "vue-router";
import Country from "./views/Country.vue";
import StatMain from "./views/StatMain.vue";

Vue.use(Router);

console.log(route);
console.log(route.query);
console.log(route.query.country);
console.log(route.query.division);

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
      path: "/stat/",
      // path: "/stat/:country/:division",
      name: "statmain",
      component: StatMain,
      // props: (route) => ({ country: decodeURIComponent(route.query.country)})
      props: (route) => ({ country: decodeURIComponent(route.query.country), division: decodeURIComponent(route.query.division) })
    },
  ]
});
