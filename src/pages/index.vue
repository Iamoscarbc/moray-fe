<template>
  <div class="index-page request__card">
    <span class="request__card-title">Empieza tu solicitud de préstamo aquí</span>
    <span class="request__card-description">
      <strong>Completa tus datos correctamente para poder evaluarte.</strong>
    </span>
    <v-form v-model="valid">
      <v-row no-gutters>
        <v-col cols="12">
          <v-row :no-gutters="isMobile">
            <v-col cols="12" md="4">
              <v-select
                :items="['DNI', 'CE']"
                label="Documento"
                :menu-props="{offsetY: true}"
                :rules="rules.documentType"
                color="#009530"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" md="8">
              <v-text-field
                label="Número de identidad"
                :rules="rules.documentNumber"
                color="#009530"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Número de contacto"
            :rules="rules.phoneNumber"
            color="#009530"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Correo electrónico"
            :rules="rules.email"
            color="#009530"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
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
import { mapState, mapMutations } from 'vuex'
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
          v => !!v && v.length == 8 || 'Ingresa un número de identidad correcto'
        ],
        phoneNumber: [
          v => !!v || 'Número de teléfono es requerido',
        ],
        email: [
          v => !!v || 'Correo electrónico es requerido',
        ]
      }
    }
  },
  computed: {
    ...mapState("global", ['isMobile'])
  },
  methods: {
    ...mapMutations("global", ['SET_TRANSITION_NAME', 'SET_STEP']),
    goTo(){
      this.SET_TRANSITION_NAME('slide')
      this.$router.push('/documento')
    }
  },
  mounted(){
    this.SET_STEP(1)
  }
}
</script>

<style lang="scss">
.index-page,.request__card{
  display: flex;
  flex-direction: column;
  max-width: 550px;
  &-title{
    font-size: 32px;
    color: #4b50e6;
    font-weight: 800;
  }
  &-description{
    margin-bottom: 16px;
  }
  .v-btn{
    color: #ffffff !important;
    text-transform: capitalize;
    font-size: 18px !important;
    &.v-btn--disabled{
      background-color: #00942fa6 !important;
      color: #ffffff !important;
    }
  }
}

@media (max-width: 480px) {
  .index-page,.request__card{
    &-title{
      font-size: 28px;
    }
  }
}
</style>