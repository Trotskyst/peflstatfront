<template>
  <div id="app">
    <v-app id="inspire">
      <v-data-table :headers="headers" :items="desserts" :search="search" show-group-by>
        <template v-slot:item.action="{ item }">
          <v-icon small class="mr-2" color="blue" @click="edit(item)">edit</v-icon>
          <v-icon small color="red" @click="delete(item.id)">delete</v-icon>
        </template>

         <template v-slot:headers="props">
        <!-- <thead> -->
          <tr>
            <th class="red--text" v-for="item in props.headers">{{item.text}}</th>
           </tr>
        <!-- </thead>  -->
      </template>

      </v-data-table>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
        { text: "Action", value: "action" }
      ],
      desserts: [
        {
          id: 1,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        },
        {
          id: 2,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }
      ]
    };
  },
  methods: {
    edit(id) {},
    delete(id) {}
  }
};
</script>

<style scoped>
/* Original styles from Vuetify CSS  */

/*
table.v-table tbody td:first-child, table.v-table tbody td:not(:first-child), table.v-table tbody th:first-child, table.v-table tbody th:not(:first-child), table.v-table thead td:first-child, table.v-table thead td:not(:first-child), table.v-table thead th:first-child, table.v-table thead th:not(:first-child) {
  padding: 0 24px
}
*/

table.v-table tbody td:first-child,
table.v-table tbody td:not(:first-child),
table.v-table tbody th:first-child,
table.v-table tbody th:not(:first-child),
table.v-table thead td:first-child,
table.v-table thead td:not(:first-child),
table.v-table thead th:first-child,
table.v-table thead th:not(:first-child) {
  padding: 0 10px;
}
</style>