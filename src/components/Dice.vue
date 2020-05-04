<template>
	<div>
		<v-tooltip top>
			<template v-slot:activator="{ on }">
				<v-btn
					icon
					large
					height="63"
					width="63"
					v-on="on"
					@click.native="$emit('set-selected', dice.id)"
				>
					<img
						:src="currentSVG"
						height="63"
						width="63"
					>
					</img>
				</v-btn>
			</template>
			<span v-if="dice.selected">deselect</span>
			<span v-else>select</span>
		</v-tooltip>
		{{ dice.id }}, {{ dice.selected }}, {{ dice.top }}
	</div>
</template>

<script>
/* import d6t6black from '../assets/d6t6black.svg'
import d6t5white from '../assets/d6t5white.svg'
import d6t5black from '../assets/d6t5black.svg'
 */
export default {
  name: "Dice",

  data() {
    return{ 
      diceSvgSrc: null
    }
  },

  props: {
    dice: Object,
  },

  	methods: {
		getBlackSVG(diceSides, diceTop) {
			let sides = diceSides
			let top = diceTop
			let svg = '../assets/d' + sides + 't' + top + 'black.svg'
			return svg
		}
	},
	
	computed: {
		currentSVG() {
      let sides = this.dice.sides
			let top = this.dice.top
			let svg = '../assets/d' + sides + 't' + top + 'black.svg'
			return this.diceSvgSrc = svg
		}
	}

}
</script>

<style>
</style>