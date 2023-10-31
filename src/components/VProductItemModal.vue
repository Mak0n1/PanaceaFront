<template>
  <div class="modalBg blur" :class="{'modalBg-active': IsActive === true}">
    <div class="modal__item">
        <button
        @click="this.$emit('CloseProductModal', 'close')"
        class="modal__close"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path data-v-99b80dba="" d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="white" fill-opacity="0.2"></path></svg></button>
        <div class="slider__block">
            <Swiper
            :modules="modules"
            navigation
            :pagination="{ clickable: true }"
            >
                <SwiperSlide
                    v-for="(img, index) in ProductsItem.imgForSlider"
                    :key="index"
                    
                    ><img :src="require(`@/assets/img/${ProductsItem.imgForSlider[index]}`)" alt="car">
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="info__block">
            <h1 class="modal__title">{{ ProductsItem.title }}</h1>
            <div class="desc-block">
                <p class="modal__descript"
                v-for="(desc, index) in ProductsItem.fullDescription"
                :key="index"
                >{{ ProductsItem.fullDescription[index] }}</p>
            </div>
            
            <button class="pur" @click="this.$emit('CloseProductModal', ProductsItem.type)">Purchase</button>
        </div>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue"
import {Pagination, Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/navigation';
export default {
    name: "VProductsItemModal",
    components: {
        Swiper,SwiperSlide
    },
    setup(){
        return {
            modules: [Navigation, Pagination]
        }
    },
    props: {
        IsActive: {
            type: Boolean,
            default(){
                return false
            }
        },
        ProductsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.modal__item
    padding: 35px 67px 60px
    border-radius: 17px
    background: linear-gradient(162deg,#541921,#17090b)
    border: 1px solid #ea384d
    max-width: 1011px
    width: 100%
    display: flex
    justify-content: space-between
    position: relative
    max-height: 100vh
.slider__block
    max-width: 420px
    width: 100%
    border-radius: 17px
    background: radial-gradient(94.43% 74.15% at 50% 50%,rgba(239,44,74,.55) 0,rgba(60,18,23,.55) 100%)
    +flexa
    
.modal__title
    max-width: 292px
    font-size: 32px
    font-weight: 700
    margin-bottom: 30px
.modal__descript
    font-size: 14px
    font-weight: 400
    line-height: 150%
    margin-bottom: 30px
.info__block
    max-width: 361px
.pur
    max-width: 213px
    width: 100%
    border-radius: 5px
    background: #e4354a
    text-align: center
    font-size: 14px
    font-style: normal
    font-weight: 500
    padding: 10px
    transition: .3s
    &:hover
        transform: scale(1.1)
.modal__close
    position: absolute
    top: 35px
    right: 51px
    transition: .3s
    &:hover
        transform: scale(1.3)
        svg
            path
                fill-opacity: .5
.swiper-slide
    display: flex !important
    align-items: center
    justify-content: center
    img
        max-width: 85%
        -webkit-touch-callout: none
        -webkit-user-select: none
        -khtml-user-select: none
        -moz-user-select: none
        -ms-user-select: none
        user-select: none
.swiper
    height: 100%
@media screen and (max-width: $smalltabletContainer)
    .swiper-slide
        padding: 40px 0px
    .modal__item
        flex-direction: column
        align-items: center
        max-width: 90%
        text-align: center
    .modal__title
        max-width: none
        margin-top: 50px
@media screen and (max-width: $mobileContainer)
    .modal__close
        top: 10px
        right: 10px
    .modal__item
        max-width: 100%
        padding: 35px 5px 60px
    .modal__descript
        font-size: 12px
        margin-bottom: 15px
    .pur
        margin-top: 30px
    .modal__title
        font-size: 28px
    .desc-block
        max-height: 90px
        overflow-y: scroll
    .modal__title
        margin-top: 20px
@media screen and (max-width: 450px)
    .slider__block
        max-width: 80%
@media screen and (max-width: 400px) and (max-height: 570px)
    .swiper-slide img
        max-width: 85%
        max-height: 200px
        width: auto
    .modal__title
        font-size: 25px
        margin-bottom: 20px
@supports (-webkit-touch-callout: none)
    @media screen and (max-width: $mobileContainer)
        .modalBg
            padding-bottom: 100px
</style>