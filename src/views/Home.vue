<template>
  <v-container fluid class="pa-0">
        <v-row
          style="z-index: 40"
          >
            <v-col class="text-center" cols="12">
              <v-btn text color='white' class="red--text">Домой</v-btn>
              <v-btn text>О нас</v-btn>
              <v-btn text>Профиль</v-btn>
              <v-btn text>Помощь</v-btn>
            </v-col>
        </v-row>
      <v-row>
        <v-col
          cols="12"
          class="pa-0 main"
        >
        <v-parallax
        height="600"
          src="../assets/main-car.jpg"
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col class="text-center" cols="12">
              <div class="text">
                <h1 class="maintext">Per2Per</h1>
                <h3>Войди что-бы окунуться в мир <br>недорогого эксклюзивного транспорта</h3>
              </div>
              <!-- <div class="white-grad"></div> -->
            </v-col>
          </v-row>
        </v-parallax>
        </v-col>
      </v-row>
      <v-row class="lol">
        <v-col
          cols="12"
        >
          awdawd
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
export default {
  name: 'home',
  data: () => ({

  }),
  mounted: function() {
    let blur = 0;
    console.log(blur)
    let img = document.querySelector(".v-parallax__image-container > img");
    window.addEventListener('scroll', function() {
        let styles = img.getAttribute('style');
      console.log(this.scrollY);
      img.setAttribute('style', styles.split('filter')[0] + 'filter: blur(' + this.scrollY / 11 + 'px)')
      // console.log(pageYOffset);
    });
  }
}
</script>
<style lang="scss" scoped>
.maintext {
  background: linear-gradient(45deg, rgb(255, 0, 0), #9900ff 60%, #9900ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0B2349;
  text-transform: uppercase;
  font-size: 100px;
}

.text {
  position: relative;
  z-index: 40;

  & > h3 {
    color: black;
    display: inline-block;
    margin: auto;
    background: white;
    border-radius: 5px;
    padding: 5px 20px;
  }
}

.v-parallax__image-container > img{
  transform: scale(2);
}

.white-grad {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 98, 255, 0), rgba(250, 250, 250, 0) 0%, rgb(250, 250, 250) 80%, rgb(250,250,250));
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.lol {
  height: 100vh;
  background: rgb(201, 201, 201);
}

</style>