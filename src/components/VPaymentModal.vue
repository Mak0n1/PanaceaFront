<template>
    <div class="modalBg" :class="{'modalBg-active': IsOpen === true}">
        <div class="payment" :class="{'payment-active': IsAnimate === true}">
            <h1 class="payment__title">Choose a payment method: <span>{{ cost }}$</span></h1>
            <div class="payment-block">
                <a class="payment__item" data-method="1" @click="makePayment(1)"><img src="../assets/img/svg/logo-main.svg" alt="LogoMain"></a>
                <a class="payment__item" data-method="2" @click="makePayment(2)"><img src="../assets/img/stripe.png" alt="stripe"></a>
            </div>
            <button
            @click="this.$emit('CLoseModal')"
            class="cancel">Cancel</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "VPaymentModal",
    props: {
        cost: {
            type: String,
            default(){
                return ""
            }
        },
        IsOpen: {
            type: Boolean,
            default(){
                return false
            }
        }
    },
    data: () => {
        return {
            IsAnimate: false
        }
    },
    watch: {
        IsOpen(){
            setTimeout(() => {
                this.IsAnimate = !this.IsAnimate
            }, 200)

        }
    },
    methods: {
      makePayment(methodId) {
        const requestData = {
          method_id: methodId,
          sum: this.cost,
          email: ""
        };
        this.axios.post('/ax/payment/create', requestData)
            .then(response => {
              window.location.href = response.link;
            })
            .catch(error => {
              console.error('Error making payment:', error);
            });
      }
    }
}
</script>

<style lang="sass" scoped>
.payment
    background: url("~@/assets/img/modal_drop_bg.png")
    +bg
    border-radius: 24px
    padding: 32px
    position: relative
    max-width: 340px
    width: 100%
    height: 368px
    transform: perspective(2500px) rotateX(-90deg)
    transition: .6s
    &-active
        transform: perspective(2500px) rotateX(0deg)
    &__title
        font-size: 14px
        font-weight: 500
        span
            font-weight: 700
            color: #ff0000
    &-block
        +flexa
        margin-top: 20px
        justify-content: space-between
        .payment__item
            padding: 0px 3px
            background: linear-gradient(90deg, rgba(211, 16, 39, 0.2) 0%, rgba(234, 56, 77, 0.2) 100%)
            border-radius: 10px
            border: 2px solid transparent
            transition: border 0.2s
            height: 50px
            +flexa
            justify-content: center
            &:hover
                border: 2px solid #ffffff59
    .cancel
        position: absolute
        bottom: 0px
        left: 50%
        transform: translate(-50%, 50%)
        transition: 0.3s all
        background: linear-gradient(90deg, #D31027 0%, #EA384D 100%)
        border-radius: 10px
        font-weight: 500
        font-size: 16px
        padding: 18px 52px
</style>