<template>
  <div>
    <TheHeader></TheHeader>
    <main>
      <section class="products__block">
        <div class="container">
          <div class="products">
            <VProductsItem
            v-for="ProductsItem in PRODUCTS"
            :key="ProductsItem.id"
            :ProductsItem="ProductsItem"
            v-on:OpenModal="OpenModal"
            ></VProductsItem>
          </div>
        </div>
      </section>
    </main>


    <VModalSucsesful
    :IsOpen="IsSucsesOpen"
    v-on:CloseModalSucses="CloseModalSucses"
    ></VModalSucsesful>
    <VErrorModal
    :IsOpen="IsErrorOpen"
    :CloseModalError="CloseModalError"
    ></VErrorModal>


    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';
import VErrorModal from '@/components/VErrorModal.vue';
import VModalSucsesful from '@/components/VModalSucsesful.vue';
import VProductsItem from '@/components/VProductsItem.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "StorePage",
  components: {
    TheHeader,
    TheFooter,
    VProductsItem,
    VModalSucsesful,
    VErrorModal
},
  mounted(){
    this.GET_PRODUCTS()
  },
  data: () => {
    return {
      IsSucsesOpen: false,
      IsErrorOpen: false
    }
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS'
    ]),
    OpenModal(typeOfModal){
      switch(typeOfModal){
        //Если удачно, то открываем хорошее окно
        case 'sucses':
          this.IsSucsesOpen = true
          break
        case 'error':
          this.IsErrorOpen = true
          break
      }
    },
    CloseModalSucses(){
      this.IsSucsesOpen = false
    },
    CloseModalError(){
      this.IsErrorOpen = false
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  }
}
</script>

<style lang="sass" scoped>
header
  position: static !important
.products__block
  margin-top: 60px
.products
  display: grid
  grid-template-columns: repeat(4,1fr)
  gap: 27px
  max-width: 1105px
  margin: 0 auto
@media screen and (max-width:$tabletContainer)
  .products
    grid-template-columns: repeat(3,1fr)
@media screen and (max-width:$smalltabletContainer)
  .products
    grid-template-columns: repeat(2,1fr)
  
@media screen and (max-width: $mobileContainer)
  .products
    grid-template-columns: repeat(1,1fr)
</style>