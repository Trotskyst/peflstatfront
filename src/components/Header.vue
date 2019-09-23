<template>
  <div id="app">
    <v-app-bar app dense fixed>
      <v-toolbar-title>
        <v-btn text color="primary"><a href="http://pefl.ru" target="_blank">PEFL.RU</a></v-btn> Статистика турниров
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span><b>{{ header_text }}</b></span>
      <v-btn text color="primary"><a href="/" v-if="show_link_change_chemp==1">Сменить чемпионат</a></v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  props: {
    header_text: String,
    show_link_change_chemp: Number
  }
};

</script>

<style scoped>

a {
    text-decoration: none;
}
</style>