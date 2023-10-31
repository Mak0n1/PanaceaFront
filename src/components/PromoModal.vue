<template>
  <div class="modalBg" :class="{'modalBg-active': IsModalOpen === true}">
    <div class="modal__main" :class="{'modal__main-active': ModalAnimate === true}">
        <button 
        @click="this.$emit('CloseModal')"
        class="clode__btn"
        ><img src="../assets/img/svg/krest.svg" alt="krest"></button>
        <div class="main__info">
            <h1 class="modal__title">Promocode activation</h1>
            <p class="promo__descript">Promocode: <span>{{Promocode}}</span></p>
            <p class="promo__descript">Promocode for receiving game currency in the amount of <span> 20000 </span> rub.</p>
            <p class="promo__descript">Choose the option to activate the promocode</p>
        </div>
        <button class="vers">
            <h2 class="vers__title">Put funds in the bank</h2>
            <p class="vers__descript">Описание 1</p>
        </button>
        <button class="vers">
            <h2 class="vers__title">Create a purchase in a account</h2>
            <p class="vers__descript">Описание 2</p>
        </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "ThePromoModal",
    props: {
        IsModalOpen: {
            type: Boolean
        },
        Promocode: {
            type: String
        }
    },
    data: () => {
        return {
            ModalAnimate: false
        }
    },
    watch: {
        IsModalOpen(){
            setTimeout(() => {
                this.ModalAnimate = !this.ModalAnimate
            }, 100)
            
        }
    }
}
</script>

<style lang="sass" scoped>
.modal__main
    max-width: 600px
.clode__btn
    position: absolute
    top: 20px 
    right: 25px
    background: $pink
    border-radius: 6px
    width: 20px
    height: 20px
    +flexa
    justify-content: center
    img
        width: 9px 
        height: 9px

.modal__title
    font-size: 21px
    font-weight: 600
.promo__descript
    color: #C7A1AB
    font-size: 14px
    font-weight: 500
    margin-top: 10px
    span
        color: yellow
        font-weight: 600
.vers
    background: rgba(64, 17, 25, 0.4)
    padding: 10px 15px
    margin-top: 15px
    width: 100%
    border-radius:10px
    text-align: left
    transition: .3s
    &:hover
        background-color: $pink
        color: #ffffff
    &__title
        font-size: 21px
        margin-bottom: 10px
    &__descript
        color: #C7A1AB
        font-size: 14px
</style>