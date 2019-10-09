<template>
  <div id="app">
    <v-app-bar app dense fixed>
      <v-toolbar-title>
        <v-btn text color="primary">
          <a href="http://pefl.ru" target="_blank">PEFL.RU</a>
        </v-btn>Статистика турниров
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span>
        <b>{{ header_text }}</b>
      </span>
      <v-btn text color="primary">
        <a href="/" v-if="show_link_change_chemp==1">Сменить чемпионат</a>
      </v-btn>
    </v-app-bar>

    <!-- v-if="loading_main || loading_bombarders || loading_pivots || loading_goal_and_pases" -->

    <v-toolbar height="auto" v-if="apiLoaded !== apiLoadedMaxCount">
      <v-container flex>
        <Loader v-if="loading_main" :text_info="text_info_main" />
        <Loader v-if="loading_bombarders" :text_info="text_info_additional_bombarders" />
        <Loader v-if="loading_pivots" :text_info="text_info_additional_pivots" />
        <Loader v-if="loading_goal_and_pases" :text_info="text_info_additional_goal_and_pases" />
        <Loader v-if="loading_teamlist" :text_info="text_teamlist" />
        <Loader v-if="loading_team_playedmaxtime" :text_info="text_team_playedmaxtime" />
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
import Loader from "@/components/Loader";

export default {
  components: {
    Loader
  },
  props: {
    header_text: String,
    show_link_change_chemp: Number,
    apiLoaded: Number,
    apiLoadedMaxCount: Number,
    loading_main: Boolean,
    loading_bombarders: Boolean,
    loading_pivots: Boolean,
    loading_goal_and_pases: Boolean,
    loading_teamlist: Boolean,
    loading_team_playedmaxtime: Boolean,
  },
  data() {
    return {
      text_info_main: "Загрузка основной статистики",
      text_info_additional_bombarders: "Загрузка бомбардиров",
      text_info_additional_pivots: "Загрузка голевых распасовщиков",
      text_info_additional_goal_and_pases: "Загрузка Гол + Пас",
      text_teamlist: "Загрузка списка команд",
      text_team_playedmaxtime: "Загрузка списка игроков, игравших в последних 5 турах"
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>