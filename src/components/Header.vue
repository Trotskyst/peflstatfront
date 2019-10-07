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

    <v-toolbar height="auto" v-if="loading_main || loading_additional_bombarders || loading_additional_pivots">
      <v-container flex>
        <Loader v-if="loading_main" :text_info="text_info_main" />
        <Loader v-if="loading_additional_bombarders" :text_info="text_info_additional_bombarders" />
        <Loader v-if="loading_additional_pivots" :text_info="text_info_additional_pivots" />
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
    loading_main: Boolean,
    loading_additional_bombarders: Boolean,
    loading_additional_pivots: Boolean,
    // loading_goals: Boolean
  },
  data() {
    return {
      text_info_main: "Загрузка основной статистики",
      text_info_additional_bombarders: "Загрузка бомбардиров",
      text_info_additional_pivots: "Загрузка голевых распасовщиков"
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>