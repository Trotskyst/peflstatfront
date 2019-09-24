import Vue from "vue";
import Router from "vue-router";
import Country from "./views/Country.vue";
import StatMain from "./views/StatMain.vue";

// import TT from "@/components/t.vue";

Vue.use(Router);

// console.log(this.$router);
// console.log(this.$route);

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
      // component: TT,
      component: StatMain,
      // props: (route) => ({ country: decodeURIComponent(route.query.country)})
      props: (route) => ({ country: decodeURIComponent(route.query.country), division: decodeURIComponent(route.query.division) }),
      // beforeEnter(to, from, next) {
      //   console.log(to);
      //   console.log(from);
      //   console.log(next);
      //   // console.log(route);
      //   // console.log(route.query.country);
      //   // console.log(route.query.division);
      // }
    },
  ]
});
