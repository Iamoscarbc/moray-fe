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
      :disabled="!valid">
      Continuar
    </v-btn>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">

.request__card{
  display: flex;
  flex-direction: column;
  &-label{
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    margin-bottom: 32px;
    color: #009530;
    font-weight: 800;
    font-size: 16px;
    align-items: flex-end;
    line-height: 22px;
    padding-top: 5px;
  }
  &-img{
    margin-bottom: 3px;
    width: 20px;
    height: 20px;
  }
  &-back{
    cursor: pointer;
    margin-bottom: 24px;
    font-weight: 600;
    font-size: 18px;
    color: #009530;
  }
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