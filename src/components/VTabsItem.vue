<template>
  <div class="tabs__item">
    <div class="titles__item-1">
        <div class="item__rank">{{ TabsItem.Rank }}</div>
    </div>
    <div class="titles__item-2">
        <div class="item__name">{{ TabsItem.Name }}</div>
    </div>
    <div class="titles__item-3">
        <div class="item__kills">{{ TabsItem.Kills }}</div>
    </div>
    <div class="titles__item-4">
        <div class="item__deaths">{{ TabsItem.Deaths }}</div>
    </div>
    <div class="titles__item-5">
        <div class="item__longest">{{ TabsItem.LongestKill }}</div>
    </div>
    <div class="titles__item-6">
        <div class="item__kd">{{ TabsItem.KD }}</div>
    </div>
  </div>
</template>

<script>
export default {
    name: "VTabsItem",
    props: {
        TabsItem: {
            type: Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.tabs__item
    +flexa
    +bg
    background-image: url("~@/assets/img/table_line.png")
    margin-bottom: 12px
    font-weight: 600
    font-size: 21px
    padding: 19px 0px
    padding-left: 27px
    border-radius: 10px
    div
        +inher
    &:last-child
        margin-bottom: 0px
.item__rank
    background: linear-gradient(90deg, $red 0%, $pink 100%)
    width: 54px
    height: 54px
    border-radius: 12px
    +flexa
    justify-content: center
</style>