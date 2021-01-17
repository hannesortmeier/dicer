<template>
	<v-container class='lighten-5 pt-0'>
		<v-row dense>
			<v-col cols="12">
				<Dices :dices="dices" @set-selected="setSelected($event)"/>
				<LetsRollButton
					:dices="dices"
					:idToIndexLookupTable="idToIndexLookupTable"
					:selectedDicesLookupTable="selectedDicesLookupTable"
					@set-last="setLastRoll()"
					@set-next="setNextRoll()"
					@set-top="setTop($event)"
					@update-roll-history="updateRollHistory()"
					@remove-next-roll-history="removeNextRollHistory()"
				/>
			</v-col>
		</v-row>
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
		},

		updateRollHistory() {
      		this.$emit('update-roll-history')
		},
		
		setLastRoll() {
      		this.$emit('set-last')
		},

		setNextRoll() {
			this.$emit('set-next')
		},
		
		removeNextRollHistory() {
			this.$emit('remove-next-roll-history')
		}
	}

}
</script>

<style>
</style>