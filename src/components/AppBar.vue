<template>
  <v-app-bar app color="#00b1ca" dark>
    <v-icon large>mdi-dice-6</v-icon>
    <v-toolbar-title>dicer</v-toolbar-title>
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