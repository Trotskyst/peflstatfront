<template>
  <div id="app">
    <TurnirTable
      :table_name="turnir_table_name_all"
      :table="turnir_table_all"
      :headers="turnir_table_header"
      :row_count="row_count_all"
    />

    <TurnirTable
      :table_name="turnir_table_name_home"
      :table="turnir_table_home"
      :headers="turnir_table_header"
      :row_count="row_count_home"
    />

    <TurnirTable
      :table_name="turnir_table_name_guest"
      :table="turnir_table_guest"
      :headers="turnir_table_header"
      :row_count="row_count_guest"
    />

    <Shahmatka :table="table_shahmatka" />

    <OtherTable :table="table_general" />
    <OtherTable :table="table_commands_recors" />
    <OtherTable :table="table_ball_possession" />

    <TwoColumnsTables :table_left="table_corner_play" :table_right="table_freekick_play" />
    <TwoColumnsTables :table_left="table_ball_kick_them" :table_right="table_ball_kick_their" />
    <TwoColumnsTables
      :table_left="table_ball_kick_target_them"
      :table_right="table_ball_kick_target_their"
    />
    <TwoColumnsTables
      :table_left="table_ball_kick_target_procent_them"
      :table_right="table_ball_kick_target_procent_their"
    />
    <TwoColumnsTables
      :table_left="table_efficiency_kick_them"
      :table_right="table_efficiency_kick_their"
    />
    <TwoColumnsTables :table_left="table_game_viewers_max" :table_right="table_game_viewers_min" />

  </div>
</template>

<script>
import { UniqueObjectsOfTeamAndPlayer } from "@/assets/js/functions.js";

import { GetTurnirTable } from "@/assets/js/turnir_table.js";
import { GetShahmatka } from "@/assets/js/turnir_table.js";
import { GetGeneralInformation } from "@/assets/js/turnir_table.js";
import { GetCommandsRecords } from "@/assets/js/turnir_table.js";
import { GetCornerPlay } from "@/assets/js/turnir_table.js";
import { GetFreekickPlay } from "@/assets/js/turnir_table.js";
import { GetBallPossession } from "@/assets/js/turnir_table.js";
import { GetBallKickThem } from "@/assets/js/turnir_table.js";
import { GetBallKickTheir } from "@/assets/js/turnir_table.js";
import { GetBallKickTargetThem } from "@/assets/js/turnir_table.js";
import { GetBallKickTargetTheir } from "@/assets/js/turnir_table.js";
import { GetBallKickTargetProcentThem } from "@/assets/js/turnir_table.js";
import { GetBallKickTargetProcentTheir } from "@/assets/js/turnir_table.js";
import { GetGameViewers } from "@/assets/js/turnir_table.js";
import { GetEfficiencyKick } from "@/assets/js/turnir_table.js";

import TurnirTable from "@/components/tables/TurnirTable.vue";
import Shahmatka from "@/components/tables/Shahmatka.vue";
import OtherTable from "@/components/tables/OtherTable.vue";
import TwoColumnsTables from "@/components/tables/TwoColumnsTables.vue";

// import TT from "@/components/t.vue";

export default {
  name: "statmain",
  components: {
    TurnirTable,
    Shahmatka,
    OtherTable,
    TwoColumnsTables
    // TT,
  },
  props: {
    api_url: String,
    stat: Array
  },
  data() {
    return {
      team_list: [],
      turnir_table_header: [],

      turnir_table_all: [],
      turnir_table_home: [],
      turnir_table_guest: [],

      turnir_table_name_all: null,
      turnir_table_name_home: null,
      turnir_table_name_guest: null,

      row_count_all: null,
      row_count_home: null,
      row_count_guest: null,

      table_shahmatka: [],
      table_general: [],
      table_times: [],
      table_commands_recors: [],
      table_corner_play: [],
      table_freekick_play: [],
      table_ball_possession: [],
      table_ball_kick_them: [],
      table_ball_kick_their: [],
      table_ball_kick_target_them: [],
      table_ball_kick_target_their: [],
      table_ball_kick_target_procent_them: [],
      table_ball_kick_target_procent_their: [],
      table_game_viewers_max: [],
      table_game_viewers_min: [],
      table_efficiency_kick_them: [],
      table_efficiency_kick_their: []
    };
  },
  created() {
    let team_list_tmp = [];
    let team_score = [];
    for (let i = 0; i < this.stat.length; i++) {
      team_list_tmp.push(this.stat[i]["team_home"]);
      team_list_tmp.push(this.stat[i]["team_guest"]);

      team_score.push({
        team_home: this.stat[i]["team_home"],
        team_guest: this.stat[i]["team_guest"],
        goals_home: this.stat[i]["goals_home"],
        goals_guest: this.stat[i]["goals_guest"],
        game_link: this.stat[i]["game_link"]
      });
    }
    this.team_list = new Set(team_list_tmp);

    let table = GetTurnirTable(team_score, "all");
    this.turnir_table_all = table["turnir_table"];
    this.turnir_table_name_all = table["turnir_table_name"];
    this.row_count_all = table["row_count"];

    table = GetTurnirTable(team_score, "home");
    this.turnir_table_home = table["turnir_table"];
    this.turnir_table_name_home = table["turnir_table_name"];
    this.row_count_home = table["row_count"];

    table = GetTurnirTable(team_score, "guest");
    this.turnir_table_guest = table["turnir_table"];
    this.turnir_table_name_guest = table["turnir_table_name"];
    this.row_count_guest = table["row_count"];

    this.turnir_table_header = table["turnir_table_header"];

    this.table_shahmatka = GetShahmatka(team_score, this.turnir_table_all); //Шахматка
    this.table_general = GetGeneralInformation(this.stat); //Общая статистика
    this.table_commands_recors = GetCommandsRecords(this.team_list, this.stat); //Команды-рекордсмены
    this.table_corner_play = GetCornerPlay(this.team_list, this.stat); //Статистика розыгрышей угловых
    this.table_freekick_play = GetFreekickPlay(this.team_list, this.stat); //Статистика розыгрышей штрафных
    this.table_ball_possession = GetBallPossession(this.team_list, this.stat); //Владение мячом
    this.table_ball_kick_them = GetBallKickThem(this.team_list, this.stat); //Нанесено ударов ими
    this.table_ball_kick_their = GetBallKickTheir(this.team_list, this.stat); //Нанесено ударов соперниками
    this.table_ball_kick_target_them = GetBallKickTargetThem(
      this.team_list,
      this.stat
    ); //Нанесено ударов в створ ими
    this.table_ball_kick_target_their = GetBallKickTargetTheir(
      this.team_list,
      this.stat
    ); //Нанесено ударов в створ соперниками
    this.table_ball_kick_target_procent_them = GetBallKickTargetProcentThem(
      this.team_list,
      this.stat
    ); //Точность у них
    this.table_ball_kick_target_procent_their = GetBallKickTargetProcentTheir(
      this.team_list,
      this.stat
    ); //Точность у соперников
    this.table_game_viewers_max = GetGameViewers(
      this.team_list,
      this.stat,
      "max"
    ); //Посещаемые матчи
    this.table_game_viewers_min = GetGameViewers(
      this.team_list,
      this.stat,
      "min"
    ); //Непосещаемые матчи
    this.table_efficiency_kick_them = GetEfficiencyKick(
      this.team_list,
      this.stat,
      "them"
    ); //Эффективность ударов у них
    this.table_efficiency_kick_their = GetEfficiencyKick(
      this.team_list,
      this.stat,
      "their"
    ); //Эффективность ударов у соперников
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
