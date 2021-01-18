<template>
	<v-row align="center" justify="center">
		<v-col class="d-flex justify-center" cols="1" sm="4">
      <v-btn
        medium
        @click.native='setLastRoll()'
        class="ma-2"
        color="orange darken-2"
        dark>
          <v-icon dark large>
            mdi-arrow-left
          </v-icon>
      </v-btn>
			<v-btn 
        @click.native='rollSelectedDices()'
        class="ma-2"
        color="orange darken-2"
        dark>
				  Let's roll!
			</v-btn>
      <v-btn
        medium
        @click.native='setNextRoll()'
        class="ma-2"
        color="orange darken-2"
        dark>
          <v-icon dark large>
            mdi-arrow-right
          </v-icon>
				</v-btn>
		</v-col>
	</v-row>
</template>

<script>
export default {
  name: "LetsRollButton",

  props: {
    dices: Array,
    idToIndexLookupTable: Array,
    selectedDicesLookupTable: Array,
    rollHistory: Array
  },

  methods: {
    rollSelectedDices() {
      this.$emit('remove-next-roll-history')
      this.selectedDicesLookupTable.forEach(diceId => {
        this.rollSingleDice(diceId)
      });
      this.updateRollHistory()
    },

    rollSingleDice(diceId) {
      let arrayIndexToDiceId = this.idToIndexLookupTable[diceId]
      let sideCount = parseFloat(this.dices[arrayIndexToDiceId].sides)
      let newTop = Math.floor((Math.random() * sideCount) + 1)
      let args = [diceId, newTop]
      this.$emit('set-top', args)
    },

    setLastRoll() {
      this.$emit('set-last')
    },

		setNextRoll() {
			this.$emit('set-next')
		},

    updateRollHistory() {
      this.$emit('update-roll-history')
    }
  }
}
</script>

<style>
</style>