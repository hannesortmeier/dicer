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
			<span v-if="dice.selected">deselect</span>
			<span v-else>select</span>
		</v-tooltip>
	</div>
</template>

<script>

import DiceIcon from './DiceIcon'
/*
import d6t5white from '../assets/d6t5white.svg'
import d6t5black from '../assets/d6t5black.svg'
 */
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