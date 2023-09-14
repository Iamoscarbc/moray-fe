<template>
    <div class="personal-data-page request__card">
      <span class="request__card-title">Ahora sabemos que eres Tú</span>
      <span class="request__card-description">
        <strong>Por favor, ahora valida si la información que te presentamos es tu información actual</strong>
      </span>
      <div class="personal-data-page-container">
        <v-row class="mb-4">
          <v-col cols="12" md="6">
            <v-text-field
              label="Nombres"
              value="Oscar Manuel"
              disabled
              color="#009530"
              hide-details
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Apellidos"
              value="Bravo Carbajal"
              disabled
              color="#009530"
              hide-details
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Número de Documento"
              value="73260012"
              disabled
              color="#009530"
              hide-details
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Fecha de Nacimiento"
              value="25/02/1999"
              disabled
              color="#009530"
              hide-details
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Estado Civil"
              value="Soltero"
              disabled
              color="#009530"
              hide-details
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Dirección"
              value="Jr. Francisco Bolognesi 333 - Independencia"
              disabled
              color="#009530"
              hide-details
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
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
        this.$router.push('/datos-persona')  
      }
    },
    mounted(){
      this.SET_STEP(4)
    }
  }
  </script>
 
<style lang="scss">
.personal-data-page,.request__card{
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
    max-width: 700px;
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