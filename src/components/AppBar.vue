<template>
  <v-app-bar app color="indigo" dark>
    <!-- <v-app-bar-nav-icon @click.stop="navButtonClicked()" /> -->
    <v-icon large>mdi-dice-6</v-icon>
    <v-toolbar-title>Dicer</v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",

  methods: {
    navButtonClicked() {
      this.$emit('nav-button-clicked')
    }
  }

}
</script>

<style>
</style>