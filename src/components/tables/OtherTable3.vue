<template>
  <div class="container">
    <template>
      <v-card class="pl-2 pr-2">
        <v-data-table
          dense
          :headers="headers"
          :items="items"
          :footer-props="{itemsPerPageOptions : [10, 20, 30, 50, 100]}"
          :items-per-page="100"
          :class="table_class"
        >
          <template v-slot:body="props">
            <tr v-for="item_index in props.items" :key="item_index.index">
              <td
                v-for="(header, index) in headers"
                class="table_row"
                :class="{'text-center': index !== 1 }"
                :key="header.value"
              >{{ item_index[header.value]}}</td>
            </tr>
          </template>
        </v-data-table>
      </v-card>
    </template>
  </div>
</template>

  </div>
</template>

<script>
export default {
  props: {
    headers: {},
    items: {},
    table_class: String
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<style>

.table_StatPlayersPlayedMaxTime > div > table > tr > td  {
  padding-left: 2px;
  padding-right: 2px;
  font-family: Roboto, sans-serif;
  font-size: 10px;
  height: 14px !important;
  border: 1px solid rgb(54, 84, 125) !important;
}

.table_StatPlayersPlayedMaxTime > div > table > thead > tr > th {
  background: #303f9f;
  padding-left: 0px !important;
  padding-right: 0px !important;
  font-family: Roboto, sans-serif;
  font-size: 10px;
  border: 1px solid rgb(54, 84, 125) !important;
  color: white !important;
}
</style>
