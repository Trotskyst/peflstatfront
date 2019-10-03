<template>
  <div id="app">
    <Header
      :header_text="header_text"
      :show_link_change_chemp="header_show_link_change_chemp"
      :loading_main="loading_main"
      :loading_players="loading_players"
      :loading_goals="loading_goals"
    />

    <TeamsStat v-if="loading_main === false" :api_url="api_url" :stat="stat" />

    <PlayersStat
      v-if="apiLoaded === 2"
      :api_url="api_url"
      :stat="stat"
      :stat_players="stat_players"
      :stat_goals="stat_goals"
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
      api_url: "https://peflstatback.herokuapp.com",
      // api_url: 'http://127.0.0.1:8000',

      header_text:
        decodeURIComponent(this.$route.query.country) +
        ". " +
        decodeURIComponent(this.$route.query.division),

      country: decodeURIComponent(this.$route.query.country),
      division: decodeURIComponent(this.$route.query.division),

      header_show_link_change_chemp: 1,

      loading_main: true,
      loading_players: true,
      loading_goals: true
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
        .finally(() => (this.loading_main = false));
    },

    async GetStatPlayers() {
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
          this.apiLoaded++;
        })
        .finally(() => (this.loading_players = false));
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
          this.apiLoaded++;
        })
        .finally(() => (this.loading_goals = false));
    }
  },
  created() {
    this.GetStatMain();
    this.GetStatPlayers();
    this.GetStatGoals();
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

.center,
.w100procent {
  width: 100%;
}
.w50procent {
  width: 50%;
}
</style>
