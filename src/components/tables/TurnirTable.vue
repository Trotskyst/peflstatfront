<template>
  <div class="container">
    <v-data-table
      dense
      :headers="headers"
      :items="table"
      :items-per-page="row_count"
      hide-default-footer
      hide-default-header
    >
      <template v-slot:top>
        <h4>{{table_name}}</h4>
      </template>

      <template #header>
        <thead>
          <tr class="header">
            <th class="white--text text-center" v-for="item in headers">{{item.text}}</th>
          </tr>
        </thead>
      </template>

      <template #item="{ item }">
        <tr :class="item.number < 4 ? 'medal' : 'nomedal'">
          <td class="table_cell">{{ item.number }}</td>
          <td>{{ item.team }}</td>
          <td class="table_cell">{{ item.games }}</td>
          <td class="table_cell">{{ item.wins }}</td>
          <td class="table_cell">{{ item.draws }}</td>
          <td class="table_cell">{{ item.loses }}</td>
          <td class="table_cell">{{ item.goals_score }}</td>
          <td class="table_cell">{{ item.goals_miss }}</td>
          <td class="table_cell">{{ item.difference }}</td>
          <td class="table_cell">{{ item.score }}</td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: {
    table: Array,
    headers: Array,
    table_name: String,
    row_count: Number
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<style scoped>
.v-data-table {
  background: #03a9f4;
  width: 100%;
}

.v-data-table td,
.v-data-table th {
  padding-left: 2px;
  padding-right: 2px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  border: 1px solid rgb(54, 84, 125) !important;
  height: 14px !important;
}
.v-data-table th, .table_cell {
  text-align: center !important;
}

.header {
  background: #303f9f;
}

.medal {
  background: #eff1fa;
}

.nomedal {
  background: #ffffff;
}

.container {
  width: 600px;
}
</style>
