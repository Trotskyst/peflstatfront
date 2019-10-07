<template>
  <div class="container">
    <p class="header_team_list text-center">Список игроков, игравших в последних 5 турах</p>
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
      >{{ team }} {{ index }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    team_list: Set
  },
  data() {
    return {
      SelectedTeamIndex: null
    };
  },
  created() {
    this.SelectedTeamIndex = 0;
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
