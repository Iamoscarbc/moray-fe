<template>
  <div class="otp-page request__card">
    <span class="request__card-title">Confirmanos que eres Tú</span>
    <span class="request__card-description">
      <strong
        >Por favor, valida el mensaje que te enviamos a tu número de contacto.</strong
      >
    </span>
    <div class="otp-page-container">
      <img src="@/assets/img/otp.png" alt="" />
    </div>
    <v-btn rounded height="46" color="#009530" @click="goTo()">
      Continuar
    </v-btn>
  </div>
</template>
  
  <script>
import { mapMutations } from "vuex";
export default {
  name: "OtpPage",
  data() {
    return {};
  },
  methods: {
    ...mapMutations("global", ["SET_TRANSITION_NAME", "SET_STEP"]),
    goTo() {
      this.SET_TRANSITION_NAME("slide");
      this.$router.push("/datos-persona");
    },
  },
  mounted() {
    this.SET_STEP(4);
  },
};
</script>
 
<style lang="scss">
.otp-page,
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
    justify-content: center;
    img {
      width: 100%;
      max-width: 300px;
      margin-bottom: 16px;
    }
  }
  .v-btn {
    color: #ffffff !important;
    text-transform: capitalize;
    font-size: 18px;
    &.v-btn--disabled {
      background-color: #00942fa6 !important;
      color: #ffffff !important;
    }
  }
}
</style>