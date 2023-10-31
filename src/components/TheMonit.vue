<template>
  <section class="monit__block">
    <div class="container">
      <div class="monit">
        <div class="monit__info">
          <div class="info__title">
            <img class="min__logo" src="../assets/img/logo-2.png" alt="LogoMin">
            <h1 class="section__title">Server Monitoring</h1>
          </div>
          <p class="monit__descript">Total online: <span> {{SERVER.UsOnline + SERVER.EuOnline}} </span>  survivors</p>
        </div>
        <div class="server">
          <aos-vue animation="flip-left" :delay="100" :offset="-250"><div 
          class="server__block" 
          id="server__block-1"
          style="--pie-p:82%;"
          >
            <div class="server__info">
              <h2 class="server__title">Chernarus MOD US</h2>
              <p class="server__descript">{{SERVER.UsOnline}}/{{SERVER.MaxUsOnline  }}</p>
            </div>
            <div class="round">
              <div class="server__round"></div>
              <span>{{SERVER.UsOnline}}</span>
            </div>
          </div></aos-vue>

          <aos-vue animation="flip-left" :delay="300" :offset="-250"><div 
          class="server__block" 
          id="server__block-2"
          style="--pie-p:10%;"
          >
            <div class="server__info">
              <h2 class="server__title">Chernarus MOD EU</h2>
              <p class="server__descript">{{SERVER.EuOnline}}/{{SERVER.MaxEuOnline  }}</p>
            </div>
            <div class="round">
              <div class="server__round"></div>
              <span>{{SERVER.EuOnline}}</span>
            </div>
            
          </div></aos-vue>

        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "TheMonit",
  computed: {
    ...mapGetters([
      'SERVER'
    ])
  }
}
</script>

<style lang="sass" scoped>
.monit__block
  margin-top: 50px
  margin-bottom: 88px
.monit
  border-radius: 21px
  width: 100%
  padding: 73px 59px
  +flexa
  justify-content: space-between
  flex-wrap: wrap
  background: url("~@/assets/img/servers_stat_bg.png")
  +bg
  &__descript
    font-weight: 600
    font-size: 21px
    span
      color: $red
.server
  +flexa
  &__block
    +flexa
    +bg
    padding: 59px 26px
    border-radius: 22px
  &__title
    font-weight: 600
    font-size: 18px
    line-height: 28px
    color: $pink
  &__descript
    font-weight: 600
    font-size: 16px
    line-height: 28px
    color: $white
.round
  position: relative
  width: 76px
  height: 76px
  font-weight: 600
  font-size: 23px
  margin-left: 20px
  span
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%,-50%)
.server__round
  aspect-ratio: 1
  border-radius: 50%
  background: conic-gradient($red, $red var(--pie-p, 0%), #2c0f14 0)
  --pie-b: 5px
  mask: radial-gradient(farthest-side,#0000 calc(99% - var(--pie-b)),#000 calc(100% - var(--pie-b)))
#server__block-1
  background-image: url("~@/assets/img/server_bg_1.png")
#server__block-2
  background-image: url("~@/assets/img/server_bg_2.png")
  margin-left: 22px
@media screen and (max-width: $tabletContainer)
  .server
    flex-direction: column
  #server__block-2
    margin-left: 0px
    margin-top: 15px
@media screen and (max-width: 750px)
  .monit
    justify-content: center
    padding: 73px 0px
    flex-direction: column
  .server
    margin-top: 20px
</style>