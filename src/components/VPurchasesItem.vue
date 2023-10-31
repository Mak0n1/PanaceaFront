<template>
  <div class="promo__item">
    <div class="item__info">
        <div class="info__title-block">
            <div class="item__title">{{ VPromoItem.name }}</div>
            <div class="item__pod__title"> {{ VPromoItem.dop__date }}</div>
            
        </div>
        
        <div class="item__img"><img :src="require(`@/assets/img/${VPromoItem.img}`)" alt="PromoImg"></div>
    </div>
    <div class="item__code">{{ VPromoItem.code }}</div>
  </div>
</template>

<script>
export default {
    name: "VPromoItem",
    props: {
        VPromoItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>

.promo__item
    display: flex
    margin-top: 22px
    justify-content: space-between
.item__info, .item__code
    height: 97px
    max-width: 49%
    width: 100%
    border-radius: 21px
    background: #0D0D10 url("~@/assets/img/Filterbg.png")
    +bg
    padding: 0px 27px
.item__info
    +flexa
    justify-content: space-between
    .item__title
        color: #C7A1AB
        font-size: 16px
        font-weight: 600
    .item__pod__title
        font-size: 12px
        color: #C7A1AB
        opacity: 0.6
        font-weight: 600
        margin-top: 5px
    .item__img
        max-width: 96px
        width: 100%
.item__code
    +flexa
    justify-content: center
    color: #C7A1AB
    font-weight: 500
    font-size: 16px
@media screen and (max-width: $smalltabletContainer)
    .item__info
        flex-direction: column-reverse
        margin-bottom: 20px
    .promo__item
        flex-direction: column
        padding: 20px 0px
        background: #0D0D10
    .item__info, .item__code
        max-width: 100%
        justify-content: center
        background: none
        height: auto
</style>