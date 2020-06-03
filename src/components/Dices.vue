<template>
	<v-row
		dense
		align="center"
		justify="center"
	>
		<v-col
			class="d-flex justify-center"
			cols="3"
			v-for="dice in dices"
			:key="dice.id"
		>
			<Dice :dice="dice" @set-selected="$emit('set-selected', dice.id)"/>
		</v-col>
	</v-row>
</template>

<script>
import Dice from './Dice'


export default {
	name: "Dices",

	components: {
		Dice
	},

  props: {
    dices: Array
	},

}
</script>

<style>
</style>