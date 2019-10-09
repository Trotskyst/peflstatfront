<template>
  <div class="container">
    <p class="header_team_list text-center">Игроки, игравшие в последних 5 турах</p>
    <p class="text_team_list text-center">Выберите команду</p>
    <div class="teams">
      <v-btn
        small
        rounded
        :color="index==SelectedTeamIndex? 'info' : 'primary'"
        dark
        class="mt-1 ml-1"
        v-for="(team, index) in team_list"
        :key="index"
        @click="GetTeamPlayedmaxtime(index)"
      >{{ team.name }}</v-btn>
    </div>

    <OtherTable3
                  :headers="table_team_playedmaxtime.headers"
                  :items="table_team_playedmaxtime.items"
                  :table_class="table_team_playedmaxtime.class"
                />

  </div>
</template>

<script>
import { GetStatPlayersPlayedMaxTime } from "@/assets/js/turnir_players.js";
import OtherTable3 from "@/components/tables/OtherTable3";

export default {
  props: {
    team_list: Array,
    players_team_playedmaxtime: Array,
    api_url: String,
    api_end: String
  },
  components: {
    OtherTable3,
  },
  data() {
    return {
      SelectedTeamIndex: null,
      table_team_playedmaxtime: [],
    };
  },
  created() {
    this.SelectedTeamIndex = 0;
    this.table_team_playedmaxtime = GetStatPlayersPlayedMaxTime(this.players_team_playedmaxtime);
  },
  methods: {
    async GetTeamPlayedmaxtime(index) {
      this.SelectedTeamIndex = index;
      let team = this.team_list[index].name;
      const axios = require("axios");
      let url =
        this.api_url +
        "additional/team_playedmaxtime" +
        this.api_end +
        team +
        "/";
      await axios.get(url).then(response => {
        this.table_team_playedmaxtime = GetStatPlayersPlayedMaxTime(response.data);
      });
    }
  }
};
</script>


<style>
#app {
  width: 100%;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.teams {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
.header_team_list {
  font-weight: 600;
  font-size: 18px;
  width: 100%;
}
.text_team_list {
  font-weight: 600;
  font-size: 16px;
  width: 100%;
}
</style>
