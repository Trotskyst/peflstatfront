<template>
  <div id="app">
    <v-simple-table class="w100procent">
      <template>
        <tbody>
          <tr>
            <td class="w50procent">
              <v-layout justify-top>
                <OtherTable2
                  :headers="table_left.headers"
                  :items="table_left.items"
                  :table_name="table_left.table_name"
                />
              </v-layout>
            </td>
            <td class="w50procent">
              <OtherTable2
                :headers="table_right.headers"
                :items="table_right.items"
                :table_name="table_right.table_name"
              />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import OtherTable2 from "@/components/tables/OtherTable2.vue";

export default {
  components: {
    OtherTable2
  },
  props: {
    table_left: Object,
    table_right: Object
  }
};
</script>

<style scoped>
.w100procent {
  width: 100%;
}
.w50procent {
  width: 50%;
}
</style>
