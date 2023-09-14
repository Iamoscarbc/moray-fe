<template>
  <div class="business-data-page request__card">
    <span class="request__card-title">Cuéntanos de tu negocio</span>
    <span class="request__card-description">
      <strong>Elige el tipo de emprendedor con el que te identificas</strong>
    </span>
    <div class="business-data-page-container">
      <v-tabs 
        grow 
        color="#009530"
        v-model="tab"
        :vertical="isMobile"
        :show-arrows="false">
        <v-tab>Independiente con RUC</v-tab>
        <v-tab>Independiente sin RUC</v-tab>
        <v-tab>Dependiente</v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item>
          <v-col>
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field
                  @click:append="searchRUC()"
                  label="RUC"
                  color="#009530"
                  append-icon="mdi-magnify"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col cols="12" md="6">
                <v-text-field
                  label="Razón Social"
                  value="Empresa EIRL"
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
              <v-col cols="12" md="6">
                <v-text-field
                  label="Fecha de Creación"
                  value="25/02/1999"
                  disabled
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Ingresos Mensuales"
                  value="S/. 3000.00"
                  disabled
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-tab-item>
        <v-tab-item>
          <v-col>
            <v-row class="mb-4">
              <v-col cols="12" md="6">
                <v-text-field
                  label="Razón Social"
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Dirección"
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Fecha de Creación"
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Ingresos Mensuales"
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-tab-item>
        <v-tab-item>
          <v-col>
            <v-row no-gutters>
              <v-col cols="12">
                <v-text-field
                  @click:append="searchRUC()"
                  label="RUC"
                  color="#009530"
                  append-icon="mdi-magnify"
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="mb-4">
              <v-col cols="12" md="6">
                <v-text-field
                  label="Razón Social"
                  value="Empresa EIRL"
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
              <v-col cols="12" md="6">
                <v-text-field
                  label="Fecha de Creación"
                  value="25/02/1999"
                  disabled
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  label="Ingresos Mensuales"
                  value="S/. 3000.00"
                  disabled
                  color="#009530"
                  hide-details
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-tab-item>
      </v-tabs-items>
    </div>
    <v-btn rounded height="46" color="#009530" @click="goTo()">
      Continuar
    </v-btn>
  </div>
</template>
  
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "DocumentPage",
  data() {
    return {
      tab: 0,
    };
  },
  computed:{
    ...mapState("global", ['isMobile'])
  },
  methods: {
    ...mapMutations("global", ["SET_TRANSITION_NAME", "SET_STEP"]),
    goTo() {
      this.SET_TRANSITION_NAME("slide");
    },
    searchRUC() {
      console.log("search");
    },
  },
  mounted() {
    this.SET_STEP(6);
  },
};
</script>
 
<style lang="scss">
.business-data-page,
.request__card {
  display: flex;
  flex-direction: column;
  &-title {
    font-size: 32px;
    line-height: 43px;
    color: #4b50e6;
    font-weight: 800;
  }
  &-description {
    margin-bottom: 16px;
  }
  &-container {
    display: flex;
    flex-direction: column;
    max-width: 700px;
  }
  .v-btn {
    color: #ffffff;
    text-transform: capitalize;
    font-size: 18px;
    &.v-btn--disabled {
      background-color: #00942fa6 !important;
      color: #ffffff !important;
    }
  }
}
</style>