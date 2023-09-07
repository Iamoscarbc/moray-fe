<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: true,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
html{
  overflow: hidden;
}
.container--fluid{
  padding: 0 15px 0 15px;
  margin: 0 auto 0 auto;
  height: 100%;
}
</style>
