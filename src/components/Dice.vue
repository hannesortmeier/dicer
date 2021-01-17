<template>
	<div>
		<v-tooltip top>
			<template v-slot:activator="{ on }">
				<v-btn
					icon
					large
					height="100"
					width="100"
					v-on="on"
					@click.native="$emit('set-selected')"
				>
					<DiceIcon :name='currentSVG' :selected="dice.selected" />
				</v-btn>
			</template>
			<span v-if="dice.selected">select for next roll</span>
			<span v-else>take out of next roll</span>
		</v-tooltip>
	</div>
</template>

<script>

import DiceIcon from './DiceIcon'

export default {
	name: "Dice",

	components: {
		DiceIcon
	}, 

  props: {
    dice: Object,
  },
	
	computed: {
		currentSVG() {
      		let sides = this.dice.sides
			let top = this.dice.top
			let svg = 'd' + sides + 't' + top + 'black'
			return this.iconName = svg
		}
	}

}
</script>

<style>
</style>