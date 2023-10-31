<template>
  <footer>
    <div class="container">
        <div class="main__footer">
            <div class="footer__logo"><img src="../assets/img/logo3.png" alt="FooterLogo"></div>
            <ul class="footer__menu">
                <div class="menu__item">
                    <li><router-link to="/">Main</router-link></li>
                    <li><router-link to="/Contacts">Contact</router-link></li>
                </div>
                <div class="menu__item">
                    <li><router-link to="/Privacy">Privacy policy</router-link></li>
                    <li><router-link to="/Terms">Terms of use</router-link></li>
                </div>
            </ul>
        </div>
        <p class="footer__descript">Panacea - An international gaming platform offering it's players only the best quality. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
    name: "TheFooter"
}
</script>

<style lang="sass" scoped>
footer
    margin-top: 115px
    padding-bottom: 121px
.footer__logo
    max-width: 347px
    width: 100%
.main__footer
    display: flex
    align-items: center
    margin-bottom: 83px
.footer__menu
    margin-left: 230px
    display: flex
    .menu__item
        li
            margin-right: 120px
            display: block
            opacity: 0.4
            transition: .3s
            font-size: 15px
            &:hover
                opacity: 1
            &:last-child
                margin-right: 0px
                margin-top: 17px
.footer__descript
    font-size: 17px
    opacity: 0.5
    font-weight: 500
    text-align: center
@media screen and (max-width: $tabletContainer)
    .main__footer
        justify-content: space-between
    .footer__menu
        margin-left: 0px
@media screen and (max-width: 750px)
    .main__footer
        flex-direction: column
        justify-content: center
    .footer__menu 
        margin-top: 20px
        flex-direction: column
        justify-content: center
        text-align: center
        .menu__item 
            margin-top: 17px
            li
                margin-right: 0px
</style>