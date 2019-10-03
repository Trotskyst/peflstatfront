<template>
  <div id="app">
    <Header
      :header_text="header_text"
      :show_link_change_chemp="header_show_link_change_chemp"
      :loading_top="loading_top"
      :loading_top2="loading_top2"
      :loading_top3="loading_top3"
    />

    <TeamsStat v-if="loading_top === false" :api_url="api_url" :stat="stat" />
  </div>
</template>

<script>
import { UniqueObjectsOfTeamAndPlayer } from "@/assets/js/functions.js";

import { GetBombarders } from "@/assets/js/turnir_players.js";

import Header from "@/components/Header.vue";
import TeamsStat from "@/components/TeamsStat.vue";

// import TT from "@/components/t.vue";

export default {
  name: "statmain",
  components: {
    Header,
    TeamsStat
    // TT,
  },
  data() {
    return {
      stat: null,
      stat_players: null,
      stat_goals: null,
      apiLoaded: 0,
      api_url: "https://peflstatback.herokuapp.com",
      // api_url: 'http://127.0.0.1:8000',

      header_text:
        decodeURIComponent(this.$route.query.country) +
        ". " +
        decodeURIComponent(this.$route.query.division),

      country: decodeURIComponent(this.$route.query.country),
      division: decodeURIComponent(this.$route.query.division),

      header_show_link_change_chemp: 1,

      loading_top: true,
      loading_top2: true,
      loading_top3: true,
      table_bombarders: []
    };
  },
  methods: {
    async GetStatMain() {
      const axios = require("axios");
      let url =
        this.api_url +
        "/api/v1/stat/main/17/" +
        this.country +
        "/" +
        this.division +
        "/";
      await axios
        .get(url)
        .then(response => {
          this.stat = response.data;
        })
        .finally(() => (this.loading_top = false));
    },

    async GetStatTTD() {
      const axios = require("axios");
      let url =
        this.api_url +
        "/api/v1/stat/players/17/" +
        this.country +
        "/" +
        this.division +
        "/";
      await axios
        .get(url)
        .then(response => {
          this.stat_players = response.data;
          // console.log(this.stat_players);
          this.onApiTTDAndGoalsIsLoaded();
        })
        .finally(() => (this.loading_top2 = false));
    },

    async GetStatGoals() {
      const axios = require("axios");
      let url =
        this.api_url +
        "/api/v1/stat/goals/17/" +
        this.country +
        "/" +
        this.division +
        "/";
      await axios
        .get(url)
        .then(response => {
          this.stat_goals = response.data;
          this.onApiTTDAndGoalsIsLoaded();
        })
        .finally(() => (this.loading_top3 = false));
    },

    onApiTTDAndGoalsIsLoaded() {
      this.apiLoaded++;

      if (this.apiLoaded === 2) {
        // перечень игроков
        let players_list_goal_tmp = [];
        let players_list_pass_tmp = [];
        for (let i = 0; i < this.stat_goals.length; i++) {
          players_list_goal_tmp.push({
            team: this.stat_goals[i]["team"],
            player: this.stat_goals[i]["player_goal"]
          });
          players_list_pass_tmp.push({
            team: this.stat_goals[i]["team"],
            player: this.stat_goals[i]["player_pass"]
          });
        }

        let players_list_goal = UniqueObjectsOfTeamAndPlayer(
          players_list_goal_tmp
        ); //список забивших гол
        let players_list_pass = UniqueObjectsOfTeamAndPlayer(
          players_list_pass_tmp
        );

        this.table_bombarders = GetBombarders(
          this.stat_goals,
          players_list_goal
        ); //Бомбардиры
      }
    }
  },
  created() {
    // this.loading_top = true;
    // console.log(this.country);
    // console.log(this.division);
    // console.log(this.$route.query.country);
    // console.log(decodeURIComponent(this.$route.query.country));
    this.GetStatMain();
    this.GetStatTTD();
    this.GetStatGoals();
  }
};
</script>


<style lang="scss" scoped>
$left_menu_width: 200px;

#app {
  width: 100%;
}
.container {
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
}

.left {
  min-width: $left_menu_width;
}

.center,
.w100procent {
  width: 100%;
}
.w50procent {
  width: 50%;
}
</style>
