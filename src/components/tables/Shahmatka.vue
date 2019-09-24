<template>
  <div class="container">
    <v-simple-table>
      <template v-slot:top>
        <h4>{{table.table_name}}</h4>
      </template>
      <template>
        <thead>
          <tr class="header">
            <th class="white--text" v-for="(value, index) in table.header" :key="index">{{value}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in table.shahmatka" :key="index">
            <td
              :class="[index > 1 && value !== 'X' ? 'table_cell_result' :'table_cell_not_result', {'cell_x': value === 'X' || index === 0}]"
              class="table_cell"
              v-for="(value, index) in item"
              :key="index"
            >{{value}}</td>
              <!-- <component
                :is="value !== 'X' && index > 1 ? 'a':'span'"
                :href="'http://ya.ru' || ''"
                target="_blank"
              >{{value}}</component>-->
              
            
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    table: {}
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
.v-data-table {
  /* background: #03a9f4; */
  width: 600px;
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
.table_cell_result,
.cell_x {
  text-align: center !important;
  white-space: pre-line;
  line-height: 1;
}
</style>
