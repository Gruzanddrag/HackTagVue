<template>
  <v-container fluid class="pa-0">
        <v-row
          style="z-index: 40"
          class="haeder-row"
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
            ref="loginForm"
            justify="center"
          >
            <v-col class="text-center" cols="12">
              <div class="text">
                <h1 class="maintext">NAME</h1>
                <h3>Войди что-бы окунуться в мир <br>недорогого эксклюзивного транспорта</h3>
              </div>
              <div class="white-grad"></div>
            </v-col>
          </v-row>
        </v-parallax>
        </v-col>
      </v-row>
      <v-row justify="center" style="margin-top:200px;">
        <v-col cols="5" class="ph" lg="5">
          <h1>Большой ассортимент автомобилей</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure minus vitae in veniam adipisci repellat, dolorem totam
             error aut explicabo suscipit nostrum dolorum repudiandae
              praesentium illo ex commodi consequuntur accusantium!
              </p>
              <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure minus vitae in veniam adipisci repellat, dolorem totam
             error aut explicabo suscipit nostrum dolorum repudiandae
              praesentium illo ex commodi consequuntur accusantium!
              </p>
        </v-col>
        <v-col cols="7" class="pa" lg="5">
          <img src="../assets/main-car.jpg" alt="" width="500px">
        </v-col>
      </v-row>

      <v-row justify="center" style="margin-top:200px;margin-bottom:200px;">
        <v-col cols="7" class="pa" lg="5">
          <img src="../assets/main-car.jpg" alt="" width="500px">
        </v-col>
        <v-col cols="5" class="ph" lg="5">
          <h1>Большой ассортимент автомобилей</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure minus vitae in veniam adipisci repellat, dolorem totam
             error aut explicabo suscipit nostrum dolorum repudiandae
              praesentium illo ex commodi consequuntur accusantium!
              </p>
              <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure minus vitae in veniam adipisci repellat, dolorem totam
             error aut explicabo suscipit nostrum dolorum repudiandae
              praesentium illo ex commodi consequuntur accusantium!
              </p>
        </v-col>
      </v-row>
      
      <v-row class="lol">
        <v-col
          cols="3"
          class="loginForm"
          :class="{'show': isFormShown}"
        >
          <v-form
            ref="loginForm"
            v-model="valid"
            lazy-validation
          >
            <h2>Вход</h2>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Ваш Email"
              required
              color="deep-orange accent-3"
            ></v-text-field>

            <v-text-field
              v-model="password"
              :counter="10"
              :type="showPass ? 'text' : 'password'"
              :rules="passRules"
              label="Ваш пароль"
              @click:append="showPass = !showPass"
              :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
              required
            ></v-text-field>

            <v-btn
              outlined
              color="blue"
              class="mr-4"
              @click="sendAuth"
            >
              ВОЙТИ
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
      <v-icon 
         class="down-arrow" 
         color='red' 
         large
         :class="{'close': arrow}"
      >mdi-chevron-down</v-icon>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState } from 'vuex';
/*eslint no-console: ["error", { allow: ["warn", "log"] }] */
export default {
  name: 'home',
  data: () => ({
    isFormShown: false,
    valid: false,
    arrow: true,
    password: '',
    passRules: [
      v => !!v || 'Необходимо указать пароль',
      v => (v && v.length <= 10) || 'В пароле должно быть мень 10 симоволов',
    ],
    email: '',
    emailRules: [
      v => !!v || 'Необходимо указать  Email',
      v => /.+@.+\..+/.test(v) || 'Некоректный email',
    ],
    showPass: false,
  }),
  computed: mapState(['url']),
  mounted: function() {
    let blur = 0;
    let app = this;
    console.log(blur)
    let img = document.querySelector(".v-parallax__image-container > img");
    window.addEventListener('scroll', function() {
        let styles = img.getAttribute('style');
      // console.log(this.scrollY);
      img.setAttribute('style', styles.split('filter')[0] + 'filter: blur(' + this.scrollY / 15 + 'px)');
      if(this.scrollY > 50){
        app.isFormShown = true;
      } else {
        app.isFormShown = false;
      }
      if(this.scrollY > 200) {
        app.arrow = true
      } else {
        app.arrow = false
      }
    });
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    isFormShown: function (newVal) {
        if(newVal){
          this.isFormShown = true;
        }
        else {
          this.isFormShown = false;
        }
    }
  },
  methods:{
    showForm() {
      console.log('SHOW');
    },
    closeForm() {
      console.log('CLOSE');
    },
    sendAuth() {
      console.log();
      if(this.$refs.loginForm.validate()){
        let formData = new FormData();
        formData.append("email", this.email);
        formData.append("password", this.password); 
        axios({
          method: 'post',
          url: this.url + '/api/auth/login', 
          data: formData,
          headers: {'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          console.log(res);
        })
      }
    }
    
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
.white-grad {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0),rgba(250, 250, 250, 0.4) 70%, rgba(250, 250, 250, 1));
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
}

.loginForm {
    opacity: 0;
    transition: opacity ease-in-out 0.6s;
    margin: auto;
    z-index: 40;
    margin-top: -130px;

    &.show {
      opacity: 1;
    }

}

.down-arrow {
  position: fixed;
  bottom: 20px;
  right: 20px;
  opacity: 1;

  &.close {
    opacity: 0;
  }
}

.loginForm > .v-form {
  padding: 20px;
  border-radius: 20px;
  background: white;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2)
}

.haeder-row {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0)
}

.haeder-row .v-btn {
  margin-right: 10px;

  &:last-of-type{
    margin-right: 0;
  }
}

.lol {
  height: 50vh;
}

.ph {
  padding: auto;
}

.pa {
  padding: auto;
}

</style>