<template>
  <div id="app">
    <!-- Бомбардиры, распасовщики -->
    - <TwoColumnsTables2 :table_left="table_bombarders" :table_right="table_pivots" />
    <OtherTable2
                  :headers="table_goal_and_pases.headers"
                  :items="table_goal_and_pases.items"
                  :table_name="table_goal_and_pases.table_name"
                />
    <TeamList :team_list="team_list" :players_team_playedmaxtime="players_team_playedmaxtime" :api_url="api_url" :api_end="api_end" />
  </div>
</template>

<script>
import { UniqueObjectsOfTeamAndPlayer } from "@/assets/js/functions.js";

import { GetBombarders } from "@/assets/js/turnir_players.js";
import { GetPivots } from "@/assets/js/turnir_players.js";
import { GetGoalAndPases } from "@/assets/js/turnir_players.js";

import OtherTable from "@/components/tables/OtherTable";
import OtherTable2 from "@/components/tables/OtherTable2";
import TwoColumnsTables from "@/components/tables/TwoColumnsTables";
import TwoColumnsTables2 from "@/components/tables/TwoColumnsTables2";
import TeamList from "@/components/TeamList";

// import TT from "@/components/t.vue";

export default {
  name: "statmain",
  components: {
    OtherTable,
    OtherTable2,
    TwoColumnsTables,
    TwoColumnsTables2,
    TeamList
    // TT,
  },
  props: {
    api_url: String,
    api_end: String,
    team_list: Array,
    players_bombarder: Array,
    players_pivots: Array,
    players_goal_and_pases: Array,
    players_team_playedmaxtime: Array,
    count_rows_default: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      count_table_pivots: this.count_rows_default,
      table_bombarders: [],
      table_pivots: [],
      table_goal_and_pases: [],
      show_more_bombarders: {
        type: Boolean,
        default: false
      }
    };
  },
  created() {
    this.table_bombarders = GetBombarders(this.players_bombarder); //Бомбардиры
    this.table_pivots = GetPivots(this.players_pivots); //Голевые распасовщики
    this.table_goal_and_pases = GetGoalAndPases(this.players_goal_and_pases); //Гол+Пас
  }
  // this.table_pivots = GetPivots(
  //   this.stat_players,
  //   this.stat_goals,
  //   this.players_list_pass,
  //   this.count_table_pivots
  // ); //Распасовщики

  // this.table_goals_and_pass = GetGoalAndPass(
  //   this.stat_players,
  //   this.stat_goals,
  //   this.players_list_goal_or_pass,
  //   this.count_table_pivots
  // ); //Гол + Пас
  // },
  // computed: {
  //   table_bombarders_slice: function() {
  //     return {
  //       header: this.table_bombarders["header"],
  //       table: this.table_bombarders["table"].slice(
  //         0,
  //         this.count_table_bombarders
  //       ),
  //       table_name: this.table_bombarders["table_name"]
  //     };
  //   }
  // }
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
