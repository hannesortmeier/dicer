<template>
	<v-row
		align="center"
		justify="center"
	>
		<v-col
			class="d-flex justify-center"
			cols="5"
			sm="4"
		>
			<v-btn @click.native='rollSelectedDices()'>
				Let's roll!
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
    selectedDicesLookupTable: Array
  },

  methods: {
    rollSelectedDices() {
      this.selectedDicesLookupTable.forEach(diceId => {
        this.rollSingleDice(diceId)
      });
    },

    rollSingleDice(diceId) {
      let arrayIndexToDiceId = this.idToIndexLookupTable[diceId]
      let sideCount = parseFloat(this.dices[arrayIndexToDiceId].sides)
      let newTop = Math.floor((Math.random() * sideCount) + 1)
      let args = [diceId, newTop]
      this.$emit('set-top', args)
    }
  }
}
</script>

<style>
</style>