<template>
  <div class="subscriptions__item" >
    <div class="item__info">
        <div class="info__name">{{ SubscriptionsItem.name }}</div>
        <div class="info__server">{{ SubscriptionsItem.server }}</div>
    </div>
    <div class="item__date">
        <div class="date">{{ SubscriptionsItem.date }}</div>
        <div class="date__time">{{ SubscriptionsItem.time }}</div>
    </div>
    <div class="item__ex" v-if="SubscriptionsItem.IsPending">
        <button 
        v-for="(button, index) in SubscriptionsItem.Extension"
        :key="index"
        class="ex__item"
        >{{ button }}</button>
    </div>
    <div class="pending" v-else>Is pending, please contact the administrator</div>
  </div>
  
</template>

<script>
export default {
    name: "VsubscriptionsItem",
    props: {
        SubscriptionsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.subscriptions__item
    border-radius: 21px
    background: #0D0D10 url("~@/assets/img/Filterbg.png")
    +bg
    margin-top: 11px
    padding: 25px 20px
    +flexa
.item__date, .item__info
    width: 25%
    color: #C7A1AB
    font-weight: 500
    div
        +inher
.item__info
    padding-left: 6px
    .info__server
        font-size: 13px
.item__date
    padding-left: 15px
    .date__time
        font-size: 13px
.item__ex
    width: 50%
    +flexa
    justify-content: flex-end
    .ex__item
        border-radius: 5px
        background: linear-gradient(90deg, $red 0%, $pink 100%)
        margin-right: 3px
        opacity: 0.7
        transition: .3s
        padding: 15px 24px
        font-size: 12px
        font-weight: 500
        &:last-child
            margin-right: 0px
        &:hover
            opacity: 1
.pending
    width: 50%
    text-align: right
    color: #C7A1AB
@media screen and (max-width: $smalltabletContainer)
    .pending
        text-align: center
        width: 100%
    .subscriptions__item
        flex-direction: column
        text-align: center
    .item__info, .item__date
        padding-left: 0
        margin-bottom: 20px
        width: auto
    .item__ex
        width: 100%
        justify-content: center
        flex-direction: column
        .ex__item
            width: 100%
            margin-bottom: 10px
</style>