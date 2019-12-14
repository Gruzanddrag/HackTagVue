<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">

h1, h3 {
  font-family: PoiretOne-Regular;
}

p {
  font-family: Roboto, sans-serif;
}


@font-face {
  font-family: "PoiretOne-Regular";
  src: url("./assets/PoiretOne-Regular.ttf"),
  url("./assets/PoiretOne-Regular.ttf") format("truetype");
  font-family: "Righteous-Regular";
  src: url("./assets/Righteous-Regular.ttf"),
  url("./assets/Righteous-Regular.ttf") format("truetype");
}
</style>
