<template>
  <div class="index-page request__card">
    <span class="request__card-title">Empieza tu solicitud de préstamo aquí</span>
    <span class="request__card-description">
      <strong>Completa tus datos correctamente para poder evaluarte.</strong>
    </span>
    <v-form v-model="valid">
      <div class="row">
        <div class="col-4">
          <v-select
            :items="['DNI', 'CE']"
            label="Documento"
            :menu-props="{offsetY: true}"
            :rules="rules.documentType"
            color="#009530"
            outlined
          ></v-select>
        </div>
        <div class="col-8">
          <v-text-field
            label="Número de identidad"
            :rules="rules.documentNumber"
            color="#009530"
            outlined
          ></v-text-field>
        </div>
      </div>
    </v-form>
    <v-btn
      rounded
      height="46"
      color="#009530"
      :disabled="!valid"
      @click="goTo()">
      Continuar
    </v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'IndexPage',
  data () {
    return {
      valid: false,
      rules: {
        documentType: [
          v => !!v || 'Documento es requerido',
        ],
        documentNumber: [
          v => !!v || 'Número de identidad es requerido',
        ]
      }
    }
  },
  methods: {
    ...mapMutations("global", ['SET_TRANSITION_NAME', 'SET_STEP']),
    goTo(){
      this.SET_TRANSITION_NAME('slide')
      this.SET_STEP(2)
      this.$router.push('/documento')
    }
  }
}
</script>

<style lang="scss">
.index-page,.request__card{
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