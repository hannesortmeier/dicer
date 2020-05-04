<template>
	<v-row
		align="center"
		justify="center"
	>
		<v-col
			class="d-flex justify-center"
			cols="5"
			sm="4"
			v-for="dice in dices"
			:key="dice.id"
		>
			<Dice :dice="dice" />
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