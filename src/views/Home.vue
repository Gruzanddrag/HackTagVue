<template>
  <v-container fluid class="pa-0" style="width: calc(24px + 100%);">
        <v-row
          style="z-index: 40"
          class="haeder-row"
          >
            <v-col class="text-center" cols="12">
              <v-btn text color='white' class="red--text">Главная </v-btn>
              <v-btn text color='white'>О нас</v-btn>
              <v-btn text class="blue--text" 
              @click="$vuetify.goTo('form', {
                    duration: 1500,
                    offset: 0,
                    easing: 'easeInOutCubic',
                  })"
              >
                Войти в профиль
              </v-btn>
              <v-btn text color='white'>Помощь</v-btn>
            </v-col>
        </v-row>
      <v-row>
        <v-col
          cols="12"
          class="pa-0 main"
        >
        <v-parallax
        height="700"
          src="../assets/main-car.jpg"
        >
          <v-row
            align="center"
            ref="loginForm"
            justify="center"
          >
            <v-col class="text-center" cols="12">
              <div class="text">
                <h1 class="maintext">URent</h1>
                <h3>«Зарегистрируйтесь, что-бы окунуться в мир <br>недорогого эксклюзивного транспорта».</h3>
              </div>
              <div class="white-grad"></div>
            </v-col>
          </v-row>
        </v-parallax>
        </v-col>
      </v-row>
      <v-row justify="center" style="margin-top:100px; font-size: 30px; border-bottom:2px solid black;" class="scrollAnimated r"><h1>Почему именно наш сервис?</h1></v-row>
      <v-row justify="center" class="scrollAnimated r" style="margin-top:100px;">
        <v-col cols="5" class="ph" lg="5">
          <h1>Большой ассортимент автомобилей</h1>
          <p>
            Вы можете найти сотни моделей различных авто на любой вкус.
            Хотите прокатиться на Мерседесе или быть может Тесле?
            Обычный каршэринг с трудом подберет что-то отдаленно похожее.
            Арендуйте то, чего нет нигде. Нужен большой грузовик для
             перевозки мебели? А может быть полноприводный джип для 
             поездки по бездорожью? У нас есть что предложить
              </p>
        </v-col>
        <v-col cols="7" class="pa" lg="5">
          <img src="../assets/pic1.jpg" alt="" width="500px" class="ph_b">
        </v-col>
      </v-row>

      <v-row justify="center" class="scrollAnimated l"  style="margin-top:200px;margin-bottom:200px;">
        <v-col cols="7" class="pa" lg="5">
          <img src="../assets/pic2.png" alt="" width="500px" class="ph_b">
        </v-col>
        <v-col cols="5" class="ph" lg="5">
          <h1>Бесплатная отмена</h1>
          <p>
            Непредвиденные обстоятельства не обходят никого из нас,
            поэтому если вы по какой-то причине не желаете продолжать
            свою бронь, то вы можете с лёгкостью и совершенно беслпатно
            отменить её в течении 24 часов с момента букинга.
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" class="scrollAnimated r"  style="margin-top:200px;margin-bottom:200px;">
        <v-col cols="5" class="ph" lg="5">
          <h1>Пассивный заработок в нашем сервисе</h1>
          <p>
           Наш сервис URent позволяет пользователям сдавать свои авто
           в аренду, обеспечив себе хороший пассивный доход. Для этого вам необходимо
           пройти по <a href="">ссылке</a> и заполнить анкету, в которой необходимо указать:
           <ul>
             <ol>Номер гос. знака</ol>
             <ol>Марку и модель машины</ol>
             <ol>Год изготовления</ol>
             <ol>Где находится ваша машина</ol>
             <ol>Фотографии автомобиля</ol>
             <ol>Стандарты качества и безопасности</ol>
             <ol>Прочие технические подробности</ol>
           </ul>
              </p>
              <p>
            После этого ваш автомобиль будет рассмотрен модератором и,
            в случае соответствия указанных данных политике сайта, выставлен 
            на площадке для аренды!
              </p>
        </v-col>
        <v-col cols="7" class="pa" lg="5">
          <img src="../assets/pic3.jpg" alt="" width="500px" class="ph_b">
        </v-col>
      </v-row>

      <v-row justify="center" class="scrollAnimated l"  style="margin-top:200px;margin-bottom:200px;">
        <v-col cols="7" class="pa" lg="5">
          <img src="../assets/pic4.jpg" alt="" width="500px" class="ph_b">
        </v-col>
        <v-col cols="5" class="ph" lg="5">
          <h1>Неприлично дешевые предложения</h1>
          <p>
            Обычный автомобиль-универсал в стандартных каршэринговых
           компаниях вроде Яндекса, BelkaCar и других обойдётся вам в ~6000 р. за сутки. 
           Только на URent вы сможете забронировать автомобиль от 1800р.
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
            v-scroll:#target="'login'"
            ref="loginForm"
            v-model="valid"
            lazy-validation
          >
            <h2 >Вход</h2>
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
              class="mr-4 loginBtn"
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
      <div class="footer"></div>
  </v-container>
</template>

<script>
import axios from "axios";
import { mapState, mapMutations } from 'vuex';
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
      let form = document.querySelector('.loginForm');
      if(form.getBoundingClientRect().top <= this.window.innerHeight / 1.5){
        form.classList.add('show');
        app.arrow = true
      }else {
        app.arrow = false
      }
      let animated = document.querySelectorAll('.scrollAnimated');
      animated.forEach(el => {
        if(el.getBoundingClientRect().top <= this.window.innerHeight / 1.5){
          el.classList.add('show');
        }
      })
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
            if(res.data.status) {
              this.SET_TOKEN(res.data.access_token);
              this.SET_USER(res.data.user);
            }
        })
      }
    },
    ...mapMutations(['SET_TOKEN', 'SET_USER'])
  }
}
</script>
<style lang="scss" scoped>

.maintext {
  // background: linear-gradient(45deg, rgb(255, 0, 0), #9900ff 60%, #9900ff);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  
  letter-spacing: 15px;
  font-size: 150px;
  font-family: Aquatico-Regular;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  width: calc(24px + 100%);
  color:rgba(0, 0, 0, 0.65)
}

.text {
  position: relative;
  z-index: 40;

  & > h3 {
    color: #fdfdfd;
    text-shadow: 0px -1px 2px rgba(0, 0, 0, 1);
    display: inline-block;
    margin: auto;
    font-size: 25px;
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
    transition: opacity ease-in-out 1s;
    margin: auto;
    z-index: 40;
    margin-top: -130px;

    &.show {
      opacity: 1;
    }

}

.loginBtn {
  margin-top: 20px;
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
  width: calc(24px + 100%);
  background: rgba(0, 0, 0, 0.75);
}

.haeder-row .v-btn {
  margin-right: 10px;

  &:last-of-type{
    margin-right: 0;
  }
}

.scrollAnimated {
  opacity: 0;
  transition: all ease-in-out 1s;

  &.r{
    margin-left: -30px;
    &.show {
      transform: translatex(30px);
      opacity: 1;
    }
  }

  &.l{
    margin-left: 30px;
    &.show {
      transform: translatex(-30px);
      opacity: 1;
    }
  }
}

.footer {
  position: absolute;
  height: 70px;
  bottom: 0;
  width: 100%;
  background: #E53935;
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

.ph_b {
  border-radius: 9px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
}
</style>