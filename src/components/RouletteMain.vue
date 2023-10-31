<template>
  <div class="game_container">
    <section class="modal_overlay" v-if="showModal">
      <div class="modal_content">
        <div class="modal_drop" :data-id="winningItem.rs_id" data-aos="flip-up">
          <div class="title">You won</div>
          <img :src="winningItem.image_link" alt="" class="icon">
          <div class="value">{{winningItem.title}}</div>
          <div class="buttons">
            <div class="btn get" @click="receiveItem">Receive</div>
          </div>
        </div>
      </div>
      <button @click="closeModal" class="close-modal-button">Close</button>
    </section>
    <img src="../assets/img/roullete_arrow.svg" alt="" class="arrow">
    <div class="items_list">
      <div class="items_container" ref="items_container">
        <div v-for="(item, index) in itemsToShow" :key="index" :class="['item', item.rarityClass || item.bg_class]">
          <img :alt="item.title">
<!--          :src="getImageSource(item)"-->
        </div>
      </div>
    </div>
    <div class="buttons">
      <div class="btn openCase" @click="spinRoulette">
        Spin
      </div>
    </div>

  </div>
  <VErrorModal
      :IsOpen="IsErrorModalOpen"
      :message="error_mesage"
      v-on:CloseModalError="CloseModalError"
  ></VErrorModal>

</template>

<script>
/* eslint-disable */
import axios from 'axios';
import {gsap} from "gsap";
import aos from 'aos';
import { mapGetters, mapActions } from 'vuex';
import VErrorModal from '@/components/VErrorModal.vue';
aos.init();
export default {
  data() {
    return {
      itemsToShow: [],
      item_width: 237.47,
      containerLeft: 0,
      winningItem: null,
      showModal: false,
      spinning: false,
      IsErrorModalOpen: false,
      error_mesage: '',
    };
  },

  mounted() {
    this.loadInitialItems();
  },
  computed: {
    ...mapGetters([
      'USER','ITEMS', 'JWT'
    ]),
  },
  components:{
    VErrorModal
  },
  methods: {
    CloseModalError(){
      this.IsErrorModalOpen = false
    },
    // getImageSource(item) {
    //   if (item.img) {
    //     if (item.img.startsWith('./') || item.img.startsWith('/') || item.img.startsWith('http')) {
    //       if (item.img.startsWith('http')) {
    //         return item.img;
    //       } else {
    //         return require(`../assets/img/${item.img}`);
    //       }
    //     } else {
    //       return '';
    //     }
    //   } else if (item.image_link) {
    //     return item.image_link;
    //   } else {
    //     return '';
    //   }
    // },
    ...mapActions(['GET_ITEMS','GET_LIVE_ITEMS']),
    openModal() {
      this.showModal = true;
      document.body.classList.add('no-scroll'); // Добавляем класс для блокировки скролла
    },
    closeModal() {
      this.showModal = false;
      document.body.classList.remove('no-scroll'); // Удаляем класс для разблокировки скролла
    },
    async loadInitialItems() {
      // Проверяем, был ли контейнер уже инициализирован
        try {
          await this.GET_ITEMS();
          this.initializeItemsContainer();
          // Устанавливаем флаг, указывающий на то, что контейнер был инициализирован
        } catch (error) {
          console.error("Ошибка при загрузке предметов:", error);
          this.IsErrorModalOpen = true
          this.error_mesage = error
        }

    },
    initializeItemsContainer() {
      const width_container = this.$refs.items_container.clientWidth;
      const count_push_item = (width_container - this.item_width) / 2;
      const left_and_right_count = Math.max(10, Math.ceil(count_push_item / this.item_width));

      for (let i = 0; i < left_and_right_count * 2 + 1; i++) {
        const idwin = Math.floor(Math.random() * this.ITEMS.length);
        this.itemsToShow.push(this.ITEMS[idwin]);
      }
    },
    receiveItem(){
      this.closeModal()
    },
    async spinRoulette() {
      if (this.spinning) {
        // Если анимация уже запущена, не давайте пользователю запускать её снова
        return;
      }
      let url = 'https://api.panaceadayz.us/v1/Roulette.runFree';
      if (parseFloat(this.USER.balance) <= 0) {
        url = 'https://api.panaceadayz.us/v1/Roulette.runForMoney';
      }
      this.spinning = true;
      try {

        const response = await this.axios.post(url,{},{
          headers: {
            'X-Token': this.JWT,
            'Content-Type': 'application/json'
          }
        });
        if (response.data.status !== "success") {
          // console.error("Неожиданный ответ от сервера:", response.data.message);
          this.IsErrorModalOpen = true
          this.error_mesage = response.data.message
          this.spinning = false;
          return;
        }
        this.spinning = true;
        const winningItem = response.data.data;
        this.winningItem = winningItem;
        this.itemsToShow = [];

        // Начальные элементы для анимации
        for (let i = 0; i < 100; i++) {
          var idwin = Math.floor((Math.random() * this.ITEMS.length) + 1);
          this.itemsToShow.push(this.ITEMS[idwin - 1]);
        }

        this.itemsToShow.push(winningItem);
        // Добавим дополнительные элементы для анимации после победного элемента

        for (let i = 0; i < 100; i++) {
          var idwin = Math.floor((Math.random() * this.ITEMS.length) + 1);
          this.itemsToShow.push(this.ITEMS[idwin - 1]);
        }

        this.sound('/assets/sound/scroll.mp3', 0.2);
        const animationDuration = 6.2;
        // console.log(this.itemsToShow.length)
        var finalPosition = this.itemsToShow.length * this.item_width / 2;
        gsap.set(this.$refs.items_container, { x: 0 }); // начнем анимацию с начала
        gsap.fromTo(this.$refs.items_container, { x: finalPosition }, {
              x: 0, duration: animationDuration, ease: "power1.inOut",
          onComplete: () => {
            this.sound('/assets/sound/endscroll.mp3', 0.2);
            this.openModal();
            this.GET_LIVE_ITEMS();
            this.spinning = false;
          }
            }
        );
      } catch (error) {
        // console.error("Ошибка при запуске рулетки:", error);
        this.spinning = false;
        this.IsErrorModalOpen = true;
        this.error_mesage = error
      }
    },

    sound(soundPath, volume) {
      const audio = new Audio(soundPath);
      audio.volume = volume;
      audio.play();
    }
  }
};
</script>
<style scoped>
.game_container {
  margin-bottom: 86px;
}

.game_container .buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  position: absolute;
  bottom: -41px;
}

.game_container .buttons .btn {
  margin: 0 6px;
  width: 257px;
  height: 68px;
  background: #0D0D10 url(../assets/img/bg_tab.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: rgba(255, 255, 255, 0.48);
  border-radius: 10px;
  transition: all 0.3s;
}

.game_container .buttons .btn:hover,
.game_container .buttons .btn.active {
  transform: all 0.3s;
  color: #fff;
  background: linear-gradient(90deg, #D31027 0%, #EA384D 100%);
}

.game_container {
  width: 100%;
  height: 333px;
  border-radius: 21px;
  background: url(../assets/img/roullete_bg.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
}

.game_container .items_container {
  position: absolute;
  width: auto;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.game_container .items_list {
  width: 100%;
  height: 191px;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.game_container .items_list .item {
  width: 237.47px;
  height: 191.27px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 0 5px;
  padding: 0px 38px;
  justify-content: center;
}

.game_container .items_list .item img {
  width: 160px;
}

.game_container .items_list .item.red {
  background: url(../assets/img/item_bg_red.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.game_container .items_list .item.blue {
  background: url(../assets/img/item_bg_blue.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.game_container .items_list .item.purple {
  background: url(../assets/img/item_bg_purple.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.game_container .items_list .item.orange {
  background: url(../assets/img/item_bg_orange.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.game_container .items_list .item.silver {
  background: url(../assets/img/item_bg_silver.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.game_container .arrow {
  margin-bottom: 41px;
  width: 42px;
}
body.modal-open {
  overflow: hidden;
}
.modal_overlay{
  position:fixed;
  z-index:100;
  background:rgba(0,0,0,0.78);
  width:100%;
  height:100%;
  top:0;
  left:0;
}
.modal_overlay .modal_content{
  width:100%;
  height:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center
}
.modal_overlay .modal_color{
  border-radius:24px;
  width:487px;
  background:url(../assets/img/modal_color.png);
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  position:relative;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  padding:0 68px;
  padding-top:40px;
  padding-bottom:40px
}
.modal_overlay .modal_color .close{
  position:absolute;
  cursor:pointer;
  width:64px;
  height:64px;
  border-radius:100px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  top:-18px;
  right:-18px;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  -webkit-transition:0.3s all;
  transition:0.3s all;
  background:-webkit-gradient(linear, left top, right top, from(#D31027), to(#EA384D));
  background:linear-gradient(90deg, #D31027 0%, #EA384D 100%)
}
.modal_overlay .modal_color .close:hover{
  -webkit-box-shadow:0px 0px 114px #E1283E;
  box-shadow:0px 0px 114px #E1283E;
  -webkit-transition:0.3s all;
  transition:0.3s all
}
.modal_overlay .modal_color .close:hover img{
  -webkit-transition:0.3s all;
  transition:0.3s all;
  -webkit-transform:scale(1.2);
  transform:scale(1.2)
}
.modal_overlay .modal_color .close img{
  -webkit-transition:0.3s all;
  transition:0.3s all;
  width:16px
}
.modal_overlay .modal_color .header{
  width:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:justify;
  -ms-flex-pack:justify;
  justify-content:space-between;
  font-style:normal;
  font-weight:600;
  font-size:18px;
  line-height:28px;
  color:#FFFFFF;
  margin-bottom:25px
}
.modal_overlay .modal_color .header span{
  font-style:normal;
  font-weight:600;
  font-size:18px;
  line-height:28px;
  text-align:right;
  color:#d31027
}
.modal_overlay .modal_color input{
  background:url(../assets/img/input_bg.png);
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  border:none;
  width:100%;
  height:56px;
  padding:0px 18px;
  border-radius:10px;
  font-style:normal;
  font-weight:500;
  font-size:14px;
  line-height:28px;
  outline:none;
  color:#FFFFFF
}
.modal_overlay .modal_color input.color{
  -webkit-appearance:none;
  border:none;
  border:0px solid #fff;
  height:134px;
  width:100%;
  padding:0;
  margin-bottom:10px
}
.modal_overlay .modal_color input.color::-webkit-color-swatch-wrapper{
  padding:0;
  border-radius:10px
}
.modal_overlay .modal_color input.color::-webkit-color-swatch{
  border:none;
  border-radius:10px
}
.modal_overlay .modal_color .btn{
  width:325px;
  position:absolute;
  bottom:-28px;
  height:56px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  font-style:normal;
  font-weight:500;
  font-size:16px;
  line-height:28px;
  color:#FFFFFF;
  background:-webkit-gradient(linear, left top, right top, from(#D31027), to(#EA384D));
  background:linear-gradient(90deg, #D31027 0%, #EA384D 100%);
  border-radius:10px;
  cursor:pointer;
  -webkit-transition:0.3s all;
  transition:0.3s all
}
.modal_overlay .modal_color .btn:hover{
  -webkit-transform:scale(1.05);
  transform:scale(1.05);
  -webkit-box-shadow:0px 0px 64px #E1283E;
  box-shadow:0px 0px 64px #E1283E;
  -webkit-transition:0.3s all;
  transition:0.3s all
}
.modal_overlay .modal_drop{
  border-radius:24px;
  width:375px;
  height:368px;
  background:url(../assets/img/modal_drop_bg.png);
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  position:relative;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center
}
.modal_overlay .modal_drop .buttons{
  position:absolute;
  width:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  bottom:-28px
}
.modal_overlay .modal_drop .buttons .btn{
  -webkit-transition:0.3s all;
  transition:0.3s all;
  width:159px;
  height:56px;
  margin:0 6.5px;
  background:-webkit-gradient(linear, left top, right top, from(#D31027), to(#EA384D));
  background:linear-gradient(90deg, #D31027 0%, #EA384D 100%);
  border-radius:10px;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:center;
  -ms-flex-pack:center;
  justify-content:center;
  cursor:pointer;
  font-style:normal;
  font-weight:500;
  font-size:16px;
  line-height:28px;
  color:#FFFFFF
}
.modal_overlay .modal_drop .buttons .btn:hover{
  -webkit-transition:0.3s all;
  transition:0.3s all;
  -webkit-transform:scale(1.05);
  transform:scale(1.05)
}
.modal_overlay .modal_drop .buttons .btn.sell{
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-align:center;
  -ms-flex-align:center;
  align-items:center;
  -webkit-box-pack:justify;
  -ms-flex-pack:justify;
  justify-content:space-between;
  padding:0 15px;
  font-style:normal;
  font-weight:500;
  font-size:14px;
  line-height:28px;
  background:url(../assets/img/btn_sell_bg.png);
  background-position:center;
  background-repeat:no-repeat;
  background-size:cover;
  color:#FFFFFF
}
.modal_overlay .modal_drop .buttons .btn.sell .price{
  font-style:normal;
  font-weight:500;
  font-size:12px;
  line-height:28px;
  color:#ea384d;
  text-align:right
}
.modal_overlay .modal_drop .title{
  font-style:normal;
  font-weight:600;
  font-size:25px;
  line-height:28px;
  color:#FFFFFF
}
.modal_overlay .modal_drop .icon{
  height:115px;
  margin-top:44px;
  margin-bottom:35px
}
.modal_overlay .modal_drop .value{
  font-style:normal;
  font-weight:600;
  font-size:25px;
  line-height:28px;
  color:#ea384d
}
.no-scroll {
  overflow: hidden;
}
</style>