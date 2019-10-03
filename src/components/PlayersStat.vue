<template>
  <div id="app"></div>
</template>

<script>
import { UniqueObjectsOfTeamAndPlayer } from "@/assets/js/functions.js";

import { GetBombarders } from "@/assets/js/turnir_players.js";

import OtherTable from "@/components/tables/OtherTable";
import TwoColumnsTables from "@/components/tables/TwoColumnsTables";

// import TT from "@/components/t.vue";

export default {
  name: "statmain",
  components: {
    OtherTable,
    TwoColumnsTables
    // TT,
  },
  props: {
    api_url: String,
    stat: Array,
    stat_players: Array,
    stat_goals: Array
  },
  data() {
    return {
      team_list: [],
      turnir_table_header: [],

      table_bombarders: []
    };
  },
  created() {
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

    let players_list_goal = UniqueObjectsOfTeamAndPlayer(players_list_goal_tmp); //список забивших гол
    let players_list_pass = UniqueObjectsOfTeamAndPlayer(players_list_pass_tmp);

    this.table_bombarders = GetBombarders(this.stat_goals, players_list_goal); //Бомбардиры
  }
};
</script>


<style scoped>
#app {
  width: 100%;
}

.container {
  display: flex;
  align-items: flex-start;
  padding-top: 1em;
}
</style>
