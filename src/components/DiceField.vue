<template>
	<v-container class="blue lighten-5">
		<Dices
			:dices="dices"
			@set-selected="setSelected($event)"
		/>
		<LetsRollButton
			:dices="dices"
			:idToIndexLookupTable="idToIndexLookupTable"
			:selectedDicesLookupTable="selectedDicesLookupTable"
			@set-top="setTop($event)"
		/>
	</v-container>
</template>

<script>
import LetsRollButton from './LetsRollButton'
import Dices from './Dices'

export default {
  name: "DiceField",

	components: {
		LetsRollButton,
		Dices
	},

  props: {
    dices: Array,
    idToIndexLookupTable: Array,
    selectedDicesLookupTable: Array
	},
	
	methods: {
			setTop(event) {
				this.$emit('set-top', event)
		},

		setSelected(event) {
			this.$emit('set-selected', event)
		}
	}

}
</script>

<style>
</style>