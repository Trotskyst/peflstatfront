<template>
  <div id="app">
    <v-simple-table class="w100procent">
      <template>
        <tbody>
          <tr>
            <td class="w50procent">
              <OtherTable :table="table_left" />
            </td>
            <td class="w50procent">
              <OtherTable :table="table_right" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import OtherTable from "@/components/tables/OtherTable.vue";

export default {
  components: {
    OtherTable
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
