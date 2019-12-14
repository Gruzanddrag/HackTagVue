<template>
  <v-container fluid class="pa-0">
    <v-row
          class="header">
        <v-col
          cols="2"
          justify="center"
          align="center"
        >
        <p class="logo">URent</p>
        </v-col>
        <v-col
          class="red darken-3"
          cols="8"
        >
        <v-row
          justify="center">
          <v-col cols="4">
            <v-menu
              ref="menuStart"
              v-model="menuStart"
              :close-on-content-click="false"
              :return-value.sync="dateStart"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  dark
                  v-model="dateStart"
                  label="Начало поездки"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
                <v-date-picker v-model="dateStart" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menuStart = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menuStart.save(dateStart)">OK</v-btn>
                </v-date-picker>
            </v-menu>
          </v-col>
          <v-col cols="4">
            <v-menu
              ref="menuEnd"
              v-model="menuEnd"
              :close-on-content-click="false"
              :return-value.sync="dateEnd"
              transition="scale-transition"
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="dateEnd"
                  dark
                  label="Конец поездки"
                  readonly
                  v-on="on"
                ></v-text-field>
              </template>
                <v-date-picker v-model="dateEnd" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menuEnd = false">Cancel</v-btn>
                  <v-btn text color="primary" @click="$refs.menuEnd.save(dateEnd)">OK</v-btn>
                </v-date-picker>
            </v-menu>
          </v-col>
          <v-col 
          cols="3"
          justify="center"
          align="center">
            <v-btn class="create-trip-btn">Создать поездку</v-btn>
          </v-col>
        </v-row>
        </v-col>
        <v-col
          class="btn-section"
          cols="2"
          justify="center"
          align="center"
        >

        <v-badge
          v-for="(op, i) in options" :key="i" 
          v-model="op.bad"
          color="red darken-3"
          right
          overlap
        >
          <template v-slot:badge>
            <span>{{op.col}}</span>
          </template>
        <v-btn icon @click="goURL(op.url)">
          <v-icon large >{{op.icon}}</v-icon>
        </v-btn>
        </v-badge>
        </v-col>
    </v-row>
    <v-row 
    class="content"
    justify="center"> 
        <v-col 
        cols="3"
        justify="center"
        align="center">
        <v-menu>
          <template v-slot:activator="{ on: menu }">
            <v-text-field
              outlined
              v-model="town"
              label="Ввeдите название города"
              @input="reloadTowns()"
            ></v-text-field>
          </template>
          <v-list>
            <!-- <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="null"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title> -->
            <!-- </v-list-item> -->
          </v-list>
        </v-menu>
        </v-col>
    </v-row>
    <v-row 
    justify="center"> 
    <v-col cols="7">
      <v-list>
        <v-list-item
          v-for="(car, i) in cars"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="car.made"></v-list-item-title>
            <v-list-item-subtitle v-text="car.model"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
    </v-list>
    </v-col>
    </v-row>

  </v-container>
</template>

<script>
import myMixin from "../mixins/town-mixin"
import axios from "axios";
import { mapState } from 'vuex';
/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
export default {
  name: 'home',
  mixins: [ myMixin ],
  data: () => ({
    menu: false,
    menuStart: false,
    town: "",
    menuEnd: false,
    dateStart: new Date().toISOString().substr(0, 10),
    dateEnd: new Date().toISOString().substr(0, 10),
    options: [
      {
        name: "Профиль",
        url: "/profile",
        icon: "mdi-account",
        col: 0,
        bad: false
      },
      {
        name: "Мои машины",
        url: "/my-cars",
        icon: "mdi-car",
        col: 0,
        bad: false
      },
      {
        name: "Заявления",
        url: "/requsets",
        icon: "mdi-handshake",
        col: 1,
        bad: true
      }
    ],
    cars: []
  }),
  computed: mapState(['url']),
  mounted: function() {
      axios.get(this.url + '/api/car').then(res => {
          console.log(res.data);
          this.cars = res.data.data;
      });
  },
  watch: {
  },
  methods:{
    goURL(url) {
      this.$router.push(url)
    },
    reloadTowns() {
      let proxyUrl = 'https://cors-anywhere.herokuapp.com/',
          targetUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${this.town}&types=(cities)&language=pt_BR&key=AIzaSyBYpAd6QWUgnaGaSMv5oEG3_lnns8af_TY`
      fetch(proxyUrl + targetUrl,{
        method: "GET"
      }).then(res => {
        this.cars = res.data.data;
      })
    }
  }
}
</script>

<style lang="scss" scoped>


.header {
  position: fixed;
  width: 100%;
}

.logo {
  display: inline-block;
  margin: auto;
  color: #E53935;
  font-weight: blod;
}
.btn-section > .v-badge {
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }
} 
.red {
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);
  background: #E53935;
  border-radius:  0 0 25px 25px;
  padding: 0 20px;
}

.create-trip-btn {
  margin-bottom: -31px;
}

.content {
  margin-top:100px;
}
</style>