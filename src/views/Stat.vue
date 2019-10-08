<template>
  <div id="app">
    <Header
      :header_text="header_text"
      :show_link_change_chemp="header_show_link_change_chemp"
      :loading_main="loading_main"
      :loading_additional_bombarders="loading_additional_bombarders"
      :loading_additional_pivots="loading_additional_pivots"
      :loading_additional_goal_and_pases="loading_additional_goal_and_pases"
      :apiLoadedMaxCount="apiLoadedMaxCount"
    />

    <TeamsStat v-if="apiLoaded === apiLoadedMaxCount" :api_url="api_url" :stat="stat" />

    <PlayersStat
      v-if="apiLoaded === apiLoadedMaxCount"
      :api_url="api_url"
      :stat="stat"
      :players_bombarder="players_bombarder"
      :players_pivots="players_pivots"
      :players_goal_and_pases="players_goal_and_pases"
    />
  </div>
</template>

<script>
import Header from "@/components/Header";
import TeamsStat from "@/components/TeamsStat";
import PlayersStat from "@/components/PlayersStat";

// import TT from "@/components/t.vue";

export default {
  name: "statmain",
  components: {
    Header,
    TeamsStat,
    PlayersStat
    // TT,
  },
  data() {
    return {
      stat: null,
      stat_players: null,
      stat_goals: null,
      apiLoaded: 0,
      apiLoadedMaxCount: 4,
      // api_url: "https://peflstatback.herokuapp.com/api/v1/",
      api_url: "http://127.0.0.1:8000/api/v1/",
      api_end:
        "/17/" +
        this.$route.query.country +
        "/" +
        this.$route.query.division +
        "/",

      header_text:
        decodeURIComponent(this.$route.query.country) +
        ". " +
        decodeURIComponent(this.$route.query.division),

      country: decodeURIComponent(this.$route.query.country),
      division: decodeURIComponent(this.$route.query.division),

      header_show_link_change_chemp: 1,

      loading_main: true,
      loading_additional_bombarders: true,
      loading_additional_pivots: true,
      loading_additional_goal_and_pases: true,
      // loading_goals: true,
      team_list: [],
      players_bombarder: [],
      players_pivots: [],
      players_goal_and_pases: []
      // players_list_pass: [],
      // players_list_goal_or_pass: []
    };
  },
  methods: {
    // async GetTeamList() {
    //   const axios = require("axios");
    //   let url = this.api_url + "additional/teamlist" + this.api_end;
    //   await axios.get(url).then(response => {
    //     this.team_list = response.data;
    //     this.apiLoaded++;
    //   });
    // },
    async GetPlayersBombarder() {
      const axios = require("axios");
      let url = this.api_url + "additional/players_bombarders" + this.api_end;
      await axios
        .get(url)
        .then(response => {
          this.players_bombarder = response.data;
          this.apiLoaded++;
        })
        .finally(() => (this.loading_additional_bombarders = false));
    },
    async GetPlayersPivots() {
      const axios = require("axios");
      let url = this.api_url + "additional/players_pivots" + this.api_end;
      await axios
        .get(url)
        .then(response => {
          this.players_pivots = response.data;
          this.apiLoaded++;
        })
        .finally(() => (this.loading_additional_pivots = false));
    },
    async GetPlayersGoalAndPases() {
      const axios = require("axios");
      let url =
        this.api_url + "additional/players_goal_and_pases" + this.api_end;
      await axios
        .get(url)
        .then(response => {
          this.players_goal_and_pases = response.data;
          this.apiLoaded++;
        })
        .finally(() => (this.loading_additional_goal_and_pases = false));
    },
    // async GetPlayersPass() {
    //   const axios = require("axios");
    //   let url = this.api_url + "additional/players_list_pass" + this.api_end;
    //   await axios.get(url).then(response => {
    //     this.players_list_pass = response.data;
    //     this.apiAdditionalLoaded++;
    //   });
    // },
    // async GetPlayersListGoalAndPass() {
    //   const axios = require("axios");
    //   let url =
    //     this.api_url + "additional/players_list_goal_and_pass" + this.api_end;
    //   await axios.get(url).then(response => {
    //     this.players_list_goal_or_pass = response.data;
    //     this.apiAdditionalLoaded++;
    //   });
    // },
    async GetStatMain() {
      const axios = require("axios");
      let url = this.api_url + "main" + this.api_end;
      await axios
        .get(url)
        .then(response => {
          this.stat = response.data;
          this.apiLoaded++;
        })
        .finally(() => (this.loading_main = false));
    }

    // async GetStatPlayers() {
    //   const axios = require("axios");
    //   let url = this.api_url + "players" + this.api_end;
    //   await axios
    //     .get(url)
    //     .then(response => {
    //       this.stat_players = response.data;
    //       this.apiLoaded++;
    //     })
    //     .finally(() => (this.loading_players = false));
    // },

    // async GetStatGoals() {
    //   const axios = require("axios");
    //   let url = this.api_url + "goals" + this.api_end;
    //   await axios
    //     .get(url)
    //     .then(response => {
    //       this.stat_goals = response.data;
    //       this.apiLoaded++;
    //     })
    //     .finally(() => (this.loading_goals = false));
    // }
  },
  created() {
    // this.GetTeamList();
    this.GetPlayersBombarder();
    this.GetPlayersPivots();
    this.GetPlayersGoalAndPases();
    // this.GetPlayersListGoalAndPass();
    this.GetStatMain();
    // this.GetStatPlayers();
    // this.GetStatGoals();
  }
  // computed: {
  //   loading_players: function() {
  //     if (this.apiLoaded == 1) {
  //       return true;
  //     } else {
  //       return false;
  //     }
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

.center,
.w100procent {
  width: 100%;
}
.w50procent {
  width: 50%;
}
</style>
