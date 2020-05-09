<template>
  <v-navigation-drawer v-model="drawerOpen" app>
    <v-list dense>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-home</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-impressum</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Impressum</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",

  data() {
    return {
    }
  },

  props: {
    drawer: Boolean
  },

  computed: {
    drawerOpen: {
      get: function() {
        return this.drawer
      },
      set: function(newValue) {}
    }
     
  }

}
</script>

<style>
</style>