<template>
  <section class="subscriptions">
    <div class="subscriptions__header">
        <div class="header__item item-1">Name</div>
        <div class="header__item item-2">Duration</div>
        <div class="header__item item-3">Extension</div>
    </div>
    <div class="subscriptions__main">
        <VSubscriptionsItem
        v-for="SubscriptionsItem in SUBSCRIPTIONS"
        :key="SubscriptionsItem.id"
        :SubscriptionsItem="SubscriptionsItem"
        ></VSubscriptionsItem>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import VSubscriptionsItem from './VSubscriptionsItem.vue';
export default {
    name: "VSubscriptions",
    mounted() {
        this.GET_SUBSCRIPTIONS();
    },
    methods: {
        ...mapActions([
            'GET_SUBSCRIPTIONS'
        ])
    },
    computed: {
        ...mapGetters([
            'SUBSCRIPTIONS'
        ])
    },
    components: { VSubscriptionsItem }
}
</script>

<style lang="sass" scoped>
.subscriptions__header
    +flexa
    margin-bottom: 19px
.item-1, .item-2
    width: 25%
    padding-left: 26px
.item-3
    width: 50%
    text-align: right
@media screen and (max-width: $smalltabletContainer)
    .subscriptions__header
        display: none
</style>