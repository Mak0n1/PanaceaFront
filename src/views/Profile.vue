<template>
  <div>
    <TheHeader></TheHeader>
    <main>
        <div class="container">
            <aside>
                <div class="profile">
                    <div class="profile__logo"><img :src="USER.img" alt="user"></div>
                    <div class="profile__name">{{ USER.name }}</div>
                    <div class="profile__level">Level {{ USER.level }}</div>
                </div>
                <div class="tabs">
                    <button 
                    :class="{'tabs__item-active': TabsOpen === 1}"
                    @click="this.TabsOpen = 1"
                    class="tabs__item " id="tabs__item-1">Profile <img src="../assets/img/svg/icon_arrow_nav.svg" alt="iconArrowNav"></button>
                    <button 
                    :class="{'tabs__item-active': TabsOpen === 2}"
                    @click="this.TabsOpen = 2"
                    class="tabs__item" id="tabs__item-2">Purchases <img src="../assets/img/svg/icon_arrow_nav.svg" alt="iconArrowNav"></button>
                    <button 
                    :class="{'tabs__item-active': TabsOpen === 3}"
                    @click="this.TabsOpen = 3"
                    class="tabs__item" id="tabs__item-3">Purchase History <img src="../assets/img/svg/icon_arrow_nav.svg" alt="iconArrowNav"></button>
                    <button 
                    :class="{'tabs__item-active': TabsOpen === 4}"
                    @click="this.TabsOpen = 4"
                    class="tabs__item" id="tabs__item-4">Promocodes <img src="../assets/img/svg/icon_arrow_nav.svg" alt="iconArrowNav"></button>
                    <button 
                    :class="{'tabs__item-active': TabsOpen === 5}"
                    @click="this.TabsOpen = 5"
                    class="tabs__item" id="tabs__item-5">Subscriptions <img src="../assets/img/svg/icon_arrow_nav.svg" alt="iconArrowNav"></button>
                    <button class="Logout">Logout</button>
                    <p class="steam">SteamID: 76561199140634594</p>
                </div>
                
            </aside>
            <div class="main__block">
                <div class="block__item stats" v-if="TabsOpen === 1">
                    <VStatsItem
                    v-for="StatsItem in STATS"
                    :key="StatsItem.id"
                    :StatsItem="StatsItem"
                    ></VStatsItem>
                </div>
                <div class="block__item promo" v-if="TabsOpen === 2">
                    <VPurchases></VPurchases>
                </div>
                <div class="block__item" v-if="TabsOpen === 3">
                    <VPurch></VPurch>
                </div>
                <div class="block__item" v-if="TabsOpen === 4">
                    <VPromo></VPromo>
                </div>
                <div class="block__item" v-if="TabsOpen === 5">
                    <VSubscriptions></VSubscriptions>
                </div>
            </div>
        </div>
    </main>
    
    <VModalSucsesful
    :IsOpen="IsSucsessModalOpen"
    v-on:CloseModalSucses="CloseModalSucses"
    ></VModalSucsesful>
    <VErrorModal
    :IsOpen="IsErrorModalOpen"
    v-on:CloseModalError="CloseModalError"
    ></VErrorModal>
    <!--Как должна примерно выглядеть кнопка включения модального окна -->
    <!--<button @click="IsSucsessModalOpen = true">Кликни на меня</button>-->

    
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue';
import { mapActions, mapGetters } from 'vuex';
import VStatsItem from '@/components/VStatsItem.vue';
import VPurchases from '@/components/VPurchases.vue';
import VSubscriptions from '@/components/VSubscriptions.vue';
import VPromo from '@/components/VPromo.vue';
import VPurch from '@/components/VPurch.vue';
import VModalSucsesful from '@/components/VModalSucsesful.vue';
import VErrorModal from '@/components/VErrorModal.vue';
export default {
    name: "TheProfile",
    components: {
    TheHeader,
    TheFooter,
    VStatsItem,
    VPurchases,
    VSubscriptions,
    VPromo,
    VPurch,
    VModalSucsesful,
    VErrorModal
},
    mounted(){
        this.GET_STATS()
    },
    methods: {
        ...mapActions([
            'GET_STATS'
        ]),
        CloseModalSucses(){
            this.IsSucsessModalOpen = false
        },
        CloseModalError(){
            this.IsErrorModalOpen = false
        }
    },
    computed: {
        ...mapGetters([
            'STATS',
            'USER'
        ])
    },
    data: () => {
        return {
            TabsOpen: 1,
            IsSucsessModalOpen: false,
            IsErrorModalOpen: false
        }
    }
}
</script>

<style lang="sass" scoped>
.container
    display: flex
header
    position: static !important
aside
    width: 240px
    margin-right: 39px
.profile
    &__logo
        width: 240px
        height: 240px
        margin-bottom: 18px
        img
            border-radius: 10px
    &__name
        width: 100%
        font-weight: 600
        font-size: 16px
        margin-bottom: 10px
        border-radius: 10px
        background-image: url(~@/assets/img/name_bg.png)
        +bg
        text-align: center
        padding: 15px 0px
    &__level
        margin-bottom: 14px
        background: linear-gradient(90deg, rgba(211,16,39,0.2) 0%, rgba(234,56,77,0.2) 100%)
        border-radius: 10px
        font-size: 14px
        text-align: center
        padding: 11px 0px
.tabs
    display: flex
    flex-direction: column
    align-items: flex-start
    border-radius: 10px
    padding: 21px 11px
    padding-bottom: 14px
    background-image: url(~@/assets/img/profile_menu_bg.png)
    +bg
    &__item
        margin-bottom: 10px
        padding: 11px 14px
        font-size: 14px
        font-weight: 500
        color: rgba(255,255,255,0.6)
        width: 100%
        text-align: left
        position: relative
        transition: .3s
        border-radius: 10px
        &:hover
            background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
            color: rgba(255,255,255,1)
            img
                width: 12px
        img
            position: absolute
            width: 0px
            right: 14px
            top: 50%
            transform: translateY(-50%)
            transition: .3s
        &-active
            background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
            color: rgba(255,255,255,1)
            img
                width: 12px
.main__block
    width: 100%
.stats
    display: grid
    -ms-grid-columns: 23.04% 23.04% 23.04% 23.04%
    grid-template-columns: 23.04% 23.04% 23.04% 23.04%
    grid-gap: 2.61%
.Logout
    margin: 25px auto
    border-radius: 10px
    background: url(~@/assets/img/exit_bg_btn.png)
    +bg
    font-weight: 500
    font-size: 16px
    padding: 13px 61px
    transition: .3s all
    &:hover
        background: linear-gradient(90deg, $red 0%, $pink 100%)
.steam
    font-size: 9px
    font-weight: 500
    text-align: center
    width: 100%
@media screen and (max-width: $smalltabletContainer)
    .stats
        grid-template-columns: 48% 48%
        grid-gap: 16px
@media screen and (max-width: $mobileContainer)
    .stats
        grid-template-columns: 100%
        grid-gap: 16px
@media screen and (max-width: 500px)
    .main__block
        margin-top: 60px
    .Logout
        width: 100%
    .container
        flex-direction: column
        align-items: center
    .stats
        margin-top: 30px
    aside
        width: 100%
        margin-right: 0px
    .profile__logo
        margin: 0 auto
        margin-bottom: 18px
</style>