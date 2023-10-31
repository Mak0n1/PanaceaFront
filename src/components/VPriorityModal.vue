<template>
  <div class="modalBg blur" :class="{'modalBg-active': IsOpen === true}">
    <div class="priority__modal">
        <button
        @click="this.$emit('CloseProductModal', 'close')"
        class="modal__close"><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path data-v-99b80dba="" d="M1.6 16L0 14.4L6.4 8L0 1.6L1.6 0L8 6.4L14.4 0L16 1.6L9.6 8L16 14.4L14.4 16L8 9.6L1.6 16Z" fill="white" fill-opacity="0.2"></path></svg></button>
        <h1 class="priority__title">Priority queue</h1>
        <p class="priority__descript">By purchasing Priority Que, you will log into the server before others. The privilege is valid for a month.</p>
        <h2 class="form__title">Enter details</h2>
        <form>
            <div class="select">
                <CustomSelect
                :options="['7 days', '30 days', 'Lifetime']"
                :default="'Days'"
                class="select-item"
                />
                <CustomSelect
                :options="['California', 'Texas', 'Georgia']"
                :default="'Server'"
                class="select-item"
                />
            </div>
            <button 
            @click="this.$emit('CloseProductModal', 'usluga')"
            type="button" 
            class="buy">Buy</button>
        </form>
    </div>
  </div>
</template>

<script>
import CustomSelect from "@/components/CustomSelect.vue"
export default {
    name: "VPriorityModal",
    props: {
        IsOpen: {
            type: Boolean,
            default(){
                return true
            }
        }
    },
    components: {
        CustomSelect
    }
}
</script>

<style lang="sass" scoped>
.priority
    &__modal
        border-radius: 17px
        border: 1px solid $pink
        transition: .4s
        position: relative
        background: linear-gradient(162deg,#541921,#17090b)
        max-width: 422px
        width: 100%
        padding: 35px
    &__title
        font-size: 32px
        font-weight: 700
        margin-bottom: 25px
    &__descript
        font-size: 14px
        font-weight: 300
        margin-bottom: 35px
.form__title
    margin-bottom: 21px
    font-size: 16px
    font-weight: 700
.modal__close
    position: absolute
    top: 16px
    right: 16px
    transition: .3s
    &:hover
        transform: scale(1.3)
        svg
            path
                fill-opacity: .5
.select
    +flexa 
    justify-content: space-between
    margin-bottom: 30px
    &-item
        max-width: 167px
.buy
    width: 100%
    border-radius: 5px
    background: $pink
    text-align: center
    font-size: 14px
    font-weight: 500
    padding: 10px
    transition: .3s
    &:hover
        transform: scale(1.1)
@media screen and (max-width: 500px)
    .select
        flex-direction: column
        &-item
            max-width: 100%
            margin-bottom: 8px
            &:last-child
                margin-bottom: 0px
</style>