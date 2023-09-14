<template>
    <div class="face-page request__card">
      <span class="request__card-title">Te queremos conocer</span>
      <span class="request__card-description">
        <strong>Por favor, colocate en un lugar iluminado para poder ver tu rostro con detalle.</strong>
      </span>
      <div class="face-page-container">
        <img src="@/assets/img/facial_reconigzed.png" alt="">
      </div>
      <v-btn
        rounded
        height="46"
        color="#009530"
        @click="goTo()">
        Continuar
      </v-btn>
    </div>
  </template>
  
  <script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'DocumentPage',
    data () {
      return {
      }
    },
    methods: {
    ...mapMutations("global", ['SET_TRANSITION_NAME', 'SET_STEP']),
      goTo(){
        this.SET_TRANSITION_NAME('slide')
        this.SET_STEP(4)
        this.$router.push('/datos-persona')  
      }
    }
  }
  </script>
 
<style lang="scss">
.face-page,.request__card{
  display: flex;
  flex-direction: column;
  &-title{
    font-size: 32px;
    line-height: 43px;
    color: #4b50e6;
    font-weight: 800;
  }
  &-description{
    margin-bottom: 16px;
  }
  &-container{
    display: flex;
    justify-content: center;
    img{
      width: 100%;
      max-width: 300px;
      margin-bottom: 16px;
    }
  }
  .v-btn{
    color: #ffffff;
    text-transform: capitalize;
    font-size: 18px;
    &.v-btn--disabled{
      background-color: #00942fa6 !important;
      color: #ffffff !important;
    }
  }
}
</style>