<template>
  <v-container class='lighten-5 pt-0'>
      <v-row align="center" justify="center">
			<v-col class="d-flex justify-center" cols="5" sm="4">
          <span>Sum of selected dices: {{sumOfSelectedDice}}</span>
			</v-col>
		</v-row>
  </v-container>
</template>

<script>
export default {
  name: "SelectedSumDisplay",

  props: {
    dices: Array,
    selectedDicesLookupTable: Array
  },
  computed: {
    sumOfSelectedDice() {
      let sum = 0
      for (const dice in this.dices) {
        if (this.dices[dice].selected) {
          sum = sum + this.dices[dice].value;
        }
      }
      return this.selectedSum = sum
    }
  }
}
</script>

<style>

</style>