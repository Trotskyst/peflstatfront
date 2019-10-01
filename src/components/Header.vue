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

    <!-- <v-toolbar height="auto" v-if="loading_top || loading_top2 || loading_top3"> -->
    <v-toolbar height="auto" v-if="loading_top">
      <v-container flex>
        <Loader v-if="loading_top" :text_info="text_info_main" />
        <!-- <Loader v-if="loading_top2" :text_info="text_info_players" />
        <Loader v-if="loading_top3" :text_info="text_info_goals" /> -->
      </v-container>
    </v-toolbar>
  </div>
</template>

<script>
import Loader from "@/components/Loader.vue";

export default {
  components: {
    Loader
  },
  props: {
    header_text: String,
    show_link_change_chemp: Number,
    loading_top: Boolean,
    loading_top2: Boolean,
    loading_top3: Boolean
  },
  data() {
    return {
      text_info_main: "Загрузка основной статистики",
      text_info_players: "Загрузка статистики ТТД",
      text_info_goals: "Загрузка статистики голов"
    };
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

</style>