<template>
  <div class="container">
    <v-simple-table>
      <template v-slot:top>
        <h4>{{table.table_name}}</h4>
      </template>
      <template>
        <thead>
          <tr class="header">
            <th
              class="white--text"
              v-for="(value, index) in table.header"
              :key="index"
            >{{value.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(items, index) in table.table" :key="index">
            <td :class="item.class" v-for="(item, index) in items" :key="index">{{item.value}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>

export default {
  props: {
    table: {},
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<style scoped>

.header {
  background: #303f9f;
}

.table_cell_not_result {
  background: #eff1fa;
}

.v-data-table td,
.v-data-table th {
  padding-left: 2px;
  padding-right: 2px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  height: 14px !important;
  border: 1px solid rgb(54, 84, 125) !important;
}

.v-data-table td {
  color: #000000 !important;
}

.v-data-table th,
.table_cell {
  text-align: center !important;
}

tr.header:hover {
  background: #303f9f !important;
  color: white !important;
}

</style>
