<template>
  <div class="index-page request__card">
    <span class="request__card-title">¡Hola! Empieza tu solicitud de préstamo aquí</span>
    <span class="request__card-description">
      <strong>Completa tus datos correctamente para poder evaluarte</strong>
    </span>
    <v-form v-model="valid">
      <v-row no-gutters>
        <v-col cols="12">
          <v-row no-gutters justify="space-between">
            <v-col cols="12" md="4">
              <v-select
                :items="['DNI', 'CE']"
                label="Documento"
                :menu-props="{offsetY: true}"
                :rules="rules.documentType"
                color="mibanco"
                background-color="#ffffff"
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" md="7">
              <v-text-field
                type="number"
                label="Número de identidad"
                :rules="rules.documentNumber"
                color="mibanco"
                background-color="#ffffff"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-text-field
            type="number"
            label="Número de Teléfono"
            :rules="rules.phoneNumber"
            color="mibanco"
            background-color="#ffffff"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            label="Correo electrónico"
            :rules="rules.email"
            color="mibanco"
            background-color="#ffffff"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-row no-gutters>
            <v-checkbox
            v-model="form.tyc"
            :rules="rules.tyc"
            color="mibanco"
            label="Marca esta casilla para autorizar el "
            class="mb-8">
            </v-checkbox>
            <span class="color-mibanco"
              @click="dialog = true">
            tratamiento de datos personales
            </span>
          </v-row>
        </v-col>
      </v-row>
    </v-form>
    <v-btn
      rounded
      height="46"
      color="mibanco"
      :disabled="!valid"
      @click="goTo()">
      Continuar
    </v-btn>
    <v-dialog
      v-model="dialog"
      width="829px"
    >
      <div class="personal-data">
        <img src="@/assets/svg/logo-moray.svg">
        <span class="personal-data-title">Uso de datos personales</span>
        <span class="personal-data-content">El tratamiento de los datos personales entregados en el presente formulario, que incluye imágenes, ubicación en forma de geolocalización, datos referenciales de ingresos y egresos financieros, es condición indispensable para dar trámite a esta solicitud. Mibanco es titular del banco de datos Usuarios en el que se almacenarán los datos personales proporcionados y podrá darles tratamiento de conformidad con la Ley N°29733 – Ley de Protección de Datos Personales. Los datos podrán conservarse hasta por 10 años de concluida la relación comercial. Puede solicitar su cancelación, acceder a sus datos, rectificarlos, oponerse a su uso o revocar el consentimiento en cualquiera de nuestras agencias a nivel nacional o vía Banca por Teléfono al (01)319-9999; siempre y cuando cumpla con los requisitos exigidos por la Ley. Mas información en la Política de Privacidad y Protección de Datos Personales publicada en www.mibanco.com.pe</span>
        <v-btn
          rounded
          width="199"
          height="46"
          color="mibanco"
          @click="dialog = false">
          Entendido
        </v-btn>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import helperValidation from '@/helpers/validations';
export default {
  name: 'IndexPage',
  data () {
    return {
      valid: false,
      dialog: false,
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
          v => !!v && v.length == 9 || 'Ingresa un número de teléfono correcto'
        ],
        email: [
          v => !!v || 'Correo electrónico es requerido',
          v => !!v && helperValidation.isEmailValid(v) || 'Ingresa un correo electrónico válido'
        ],
        tyc: [
          v => !!v || 'Tratamientos de datos personales son requeridos',
        ]
      },
      form: {
        tyc: false
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
    color: #4b50e6;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
    line-height: normal;
    margin-bottom: 16px;
  }
  &-description{
    color: #495057;
    margin-bottom: 32px;
    font-weight: 300;
    text-align: center;
  }
  .v-btn{
    color: #ffffff !important;
    text-transform: capitalize;
    font-size: 16px !important;
    &.v-btn--disabled{
      background-color: #00942fa6 !important;
      color: #ffffff !important;
    }
  }
  .color-mibanco{
    text-decoration: underline;
    cursor: pointer;
    margin-top: 16px; 
    padding-top: 4px;
    margin-left: 4px;
    height: 25px;
  }
}
.v-dialog{
  border-radius: 16px;
  .personal-data{
    background: #ffffff;
    padding: 15px 54px 51px;
    display: flex;
    flex-direction: column;
    img{
      max-width: 131px;
      margin-bottom: 16px;
      margin-left: -7px;
    }
    &-title{
      line-height: normal;
      font-size: 24px;
      font-weight: 700;
      color: rgba(0, 149, 48, 1);
      margin-bottom: 24px;
    }
    &-content{
      line-height: normal;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 28px;
      text-align: justify;
    }
    .v-btn{
      color: #ffffff !important;
      text-transform: capitalize;
      font-size: 16px !important;
      align-self: flex-end;
      &.v-btn--disabled{
        background-color: #00942fa6 !important;
        color: #ffffff !important;
      }
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