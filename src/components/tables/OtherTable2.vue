<template>
  <div class="container">
    <template>
      <v-card class="pl-2 pr-2">
        <v-card-title class="table_name">{{table_name}}</v-card-title>

        <v-data-table
          dense
          :headers="headers"
          :items="items"
          hide-default-header
          :footer-props="{itemsPerPageOptions : [10, 20, 30, 50]}"
          :items-per-page="20"
        >
          <template v-slot:header="{ props: { headers } }">
            <thead>
              <tr>
                <th
                  v-for="header in headers"
                  class="header text-center"
                  :key="header.text"
                >{{ header.text}}</th>
              </tr>
            </thead>
          </template>

          <template v-slot:body="props">
            <tr v-for="item_index in props.items" :key="item_index.index">
              <td
                v-for="(header, index) in headers"
                class="table_row"
                :class="{'text-center': index===0 || index===3 || index==4 || index==5 || index==6}"
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
    table_name: String
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {}
};
</script>

<style  scoped>
.table_name {
  font-family: Roboto, sans-serif;
  font-size: 14px;
  font-weight: 800;
}

.table_row {
  padding-left: 2px;
  padding-right: 2px;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  height: 14px !important;
  border: 1px solid rgb(54, 84, 125) !important;
}

.header {
  background: #303f9f;
  padding-left: 2px !important;
  padding-right: 2px !important;
  font-family: Roboto, sans-serif;
  font-size: 13px;
  height: 14px !important;
  border: 1px solid rgb(54, 84, 125) !important;
  color: white !important;
}
</style>
