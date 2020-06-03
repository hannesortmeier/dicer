<template>
	<v-container
		fluid
		class="lighten-5"
	>
	<div v-if="showDiceCountAlert" align="start" justify="center">
			<v-alert type="info" color="#00b1ca" dense outlined>
			You have to choose the number of dices you want to add!
		</v-alert>
	</div>
		<div v-if="showDiceSideAlert" align="start" justify="center">
			<v-alert type="info" color="#00b1ca" dense outlined>
			You have to choose the number of sides of the dices you want to add!
		</v-alert>
	</div>
		<v-row
			dense
			align="center"
			justify="center"
		>
			<v-col
				class="d-flex justify-center"
				cols="4"
			>
				<v-select
					:items="supportedQuantityOfDices"
					label="How many dices?"
					:class="{'sm-label': $vuetify.breakpoint.sm,
									 'sm-label': $vuetify.breakpoint.xs}"
					v-model.number="diceQuantity"
				></v-select>
			</v-col>
			<v-col
				class="d-flex justify-center"
				cols="4"
			>
				<v-select
					:items="supportedQuantityOfSides"
					label="How many sides?"
					:class="{'sm-label': $vuetify.breakpoint.sm,
									 'sm-label': $vuetify.breakpoint.xs}"
					v-model.number="diceSideCount"
				></v-select>
			</v-col>
			<v-col
				class="d-flex justify-center"
				cols="2"
			>
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn
							icon
							medium
							v-on="on"
							@click.native="addDiceObjectsButtonClicked()"
						>
							<v-icon large>mdi-plus-box</v-icon>
						</v-btn>
					</template>
					<span>Add</span>
				</v-tooltip>

				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn
							icon
							medium
							v-on="on"
							@click.native="$emit('remove-all')"
						>
							<v-icon large>mdi-close-box</v-icon>
						</v-btn>
					</template>
					<span>Remove all</span>
				</v-tooltip>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'DiceSelection',

	data() {
		return {
			supportedQuantityOfDices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14, 15, 16],
			supportedQuantityOfSides: [/*4,*/ 6/*, 8, 10, 12, 20, 21, 23, 48*/],
			diceQuantity: null,
			diceSideCount: null,
			showDiceCountAlert: false,
			showDiceSideAlert: false
		}
	},

	methods: {
		addDiceObjectsButtonClicked() {
			if (!this.diceQuantity) {
				this.showDiceCountAlert = true
			}
			else if  (!this.diceSideCount) {
				this.showDiceSideAlert = true
				this.showDiceCountAlert = false
			}
			else {
				this.showDiceCountAlert = false
				this.showDiceSideAlert = false
				let args = [this.diceQuantity, this.diceSideCount]
				this.$emit('add-dices', args)
			}
		}
	}
}
</script>

<style>
.sm-label .v-label {
	font-size: 10px !important
}
</style>