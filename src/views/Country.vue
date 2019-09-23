<template>
  <div id="app">
    <Header :header_text=header_text :show_link_change_chemp=header_show_link_change_chemp />

    <div class="container">
      <h1>Чемпионат</h1>
      <Loader v-if="chemp_loading == true" />
      <div class="countries" v-if="chemp_loading == false">
        <v-btn
          small
          rounded
          color="primary"
          dark
          class="mt-1 ml-1"
          :class="{'active':country.name==SelectedCountry}"
          v-for="(country, index) in countries"
          :key="index"
          @click="CountryClicked(country.name)"
        >{{ country.name }}</v-btn>
      </div>

      <h2 class="mt-1" v-if="chemp_selected == true && div_downloaded == true">Дивизион</h2>

      <div class="countries" v-if="chemp_selected == true && div_downloaded == true">
        <v-btn
          small
          rounded
          color="primary"
          dark
          class="mt-1 ml-1"
          :class="{'active':division.name==SelectedDivision}"
          v-for="(division, index) in divisions"
          :key="index"
        >
          <a
            :href="division.link_stat"
            class="white--text"
            style="text-decoration: none;"
          >{{ division.name }}</a>
        </v-btn>
      </div>

      <Loader v-if="chemp_selected == true && div_downloaded == false" />
    </div>
  </div>
</template>

<script>
// import LeftMenu from "@/components/LeftMenu.vue";
// import CountryList from "@/components/CountryList.vue";
import Loader from "@/components/Loader.vue";
import Header from "@/components/Header.vue";

export default {
  name: "country",
  components: {
    // LeftMenu,
    // CountryList,
    Loader,
    Header
  },
  data() {
    return {
      SelectedCountry: null,
      SelectedDivision: null,
      divisions: [],
      chemp_loading: false,
      chemp_selected: false,
      div_downloaded: false,
      countries: null,
      api_url: "https://peflstatback.herokuapp.com/api/v1/",
      header_text: "",
      header_show_link_change_chemp: 0
    };
  },
  methods: {
    CountryClicked(country) {
      this.chemp_selected = true;
      this.SelectedCountry = country;
      this.GetDivisionsByCountry(this.SelectedCountry);
    },
    async GetDivisionsByCountry(country) {
      const axios = require("axios");
      let url = this.api_url + "country/" + country + "/";
      await axios.get(url).then(response => {
        this.divisions = response.data;

        for (var i = 0; i < this.divisions.length; i++) {
          this.divisions[i].link_stat =
            "stat/" + decodeURIComponent(country) + "/" + decodeURIComponent(this.divisions[i].name);
          console.log(this.divisions[i].link_stat);
        }

        this.SelectedCountry = country;
        this.div_downloaded = true;
      });
    },

    async GetCountries() {
      const axios = require("axios");
      var url = this.api_url + "countries/";
      await axios.get(url).then(response => {
        this.countries = response.data;
        if (this.SelectedCountry)
          this.GetDivisionsByCountry(this.SelectedCountry);
      });
      this.chemp_loading = false;
    }
  },
  created() {
    this.chemp_loading = true;
    this.GetCountries();
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

.countries {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
