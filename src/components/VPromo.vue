<template>
  <section class="promo">
    <div class="promo__header">
        <div class="header__input">
            <input 
            v-model="Promocode"
            type="text" 
            name="Promo" 
            placeholder="Promocode">
            <CustomSelect
            :options="['Server 1', 'Server 2']"
            :default="'Choose server'"
            class="select_server"
            >
            </CustomSelect>
        </div>
        <button 
        @click="checkPromo()"
        class="header__button"
        >Avtivate</button>
    </div>
    <div class="promo__titles">
        <div class="titles__item item-1">Server</div>
        <div class="titles__item item-2">Promocode</div>
        <div class="titles__item item-3">Amount</div>
        <div class="titles__item item-4">Date</div>
    </div>
    <div class="promo__main">
        <VPromoItem
        v-for="PromoItem in ALLPROMO"
        :key="PromoItem.id"
        :PromoItem="PromoItem"
        :CloseModal="CloseModal"
        >
        </VPromoItem>
    </div>
  </section>
  <PromoModal 
  :Promocode="Promocode"
  :IsModalOpen="IsModalOpen"
  v-on:CloseModal="CloseModal"
  ></PromoModal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import PromoModal from './PromoModal.vue';
import VPromoItem from './VPromoItem.vue';
import CustomSelect from '@/components/CustomSelect2.vue'
export default {
    name: "ThePromo",
    mounted() {
        this.GET_ALLPROMO();
    },
    data: () => {
        return {
            IsModalOpen: false,
            Promocode: ""
        }
    },
    methods: {
        ...mapActions([
            'GET_ALLPROMO'
        ]),
        //Здесь идет проверка на правильность/неправльность промокода. В случае успеха меняем на true
        checkPromo(){
            this.IsModalOpen = true
            var body = document.body
            body.classList.toggle('openBody')
        },
        CloseModal(){
            var body = document.body
            body.classList.remove('openBody')
            this.IsModalOpen = false
        }
    },
    computed: {
        ...mapGetters([
            'ALLPROMO'
        ])
    },
    components: { VPromoItem, PromoModal,CustomSelect }
}
</script>

<style lang="sass" scoped>
.promo__header
    +flexa
    justify-content: space-between
    input
        margin-right: 15px
        text-align: center
        font-weight: 500
        font-size: 12px
        background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
        border-radius: 10px
        padding: 16px 18px
        border: 1px solid transparent
        &:focus
            border: 1px solid $red
    select
        text-align: center
        font-weight: 500
        font-size: 12px
        border: none
        outline: none
        background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
        border-radius: 10px
        padding: 15px 49px
        border: 1px solid transparent
        &:focus
            border: 1px solid $red
    option
        color: $white
        text-align: left
        background: #551219
.header__button
    padding: 16px 80px
    transition: 0.3s all
    background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
    border-radius: 10px
    font-weight: 500
    font-size: 12px
    &:hover
        transform: scale(1.05)
.header__input
    +flexa
.promo__titles
    +flexa
    margin-top: 34px
    padding: 0px 43px
    .titles__item
        width: 25%
    .item-2, .item-3
        text-align: center
    .item-4
        text-align: right
.promo__main
    margin-top: 4px
    max-height: 650px
    overflow-y: auto
@media screen and (max-width: $tabletContainer)
    .promo__titles
        display: none
@media screen and (max-width: $smalltabletContainer)
    .promo__header, .header__input
        display: flex
        flex-direction: column
        align-items: center
        width: 100%
        input
            margin-right: 0px
            width: 100%
            text-align: left
            padding: 15px 10px
            margin-bottom: 10px
        select
            width: 100%
            padding: 15px 10px
    .header__button
        width: 100%
        margin-top: 10px
</style>