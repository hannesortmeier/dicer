<template>
	<v-container
		fluid
		:class="{'lighten-5': true,
						 'pb-0': $vuetify.breakpoint.xs}"
	>
		<div
			align="start"
			justify="center"
		>
			<v-alert
				:value="showDiceCountAlert"
				type="info"
				color="#00b1ca"
				transition="scale-transition"
				dense
				outlined
			>
				You have to choose the number of dices you want to add!
			</v-alert>
			<v-alert
				:value="showDiceSideAlert"
				type="info"
				color="#00b1ca"
				transition="scale-transition"
				dense
				outlined
			>
				You have to choose the number of sides of the dices you want to add!
			</v-alert>
		</div>
		<v-row
			dense
			align="center"
			justify="space-around"
		>
			<v-col
				class="d-flex justify-center"
				cols="4"
			>
				<v-select
					:items="supportedQuantityOfDices"
					label="How many dices?"
					:class="{'sm-label': $vuetify.breakpoint.sm,
									 'xs-label': $vuetify.breakpoint.xs}"
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
									 'xs-label': $vuetify.breakpoint.xs}"
					v-model.number="diceSideCount"
				></v-select>
			</v-col>
			<v-col
				class="d-flex justify-center"
				cols="1"
			>
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn
							icon
							medium
							v-on="on"
							@click.native="addDiceObjectsButtonClicked()"
						>
							<v-icon large>
								mdi-plus-box
							</v-icon>
						</v-btn>
					</template>
					<span>Add</span>
				</v-tooltip>
			</v-col>
			<v-col
				class="d-flex justify-center"
				cols="1"
			>
				<v-tooltip top>
					<template v-slot:activator="{ on }">
						<v-btn
							icon
							medium
							v-on="on"
							@click.native="$emit('remove-all')"
						>
							<v-icon large>
								mdi-close-box
							</v-icon>
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
	name: "DiceSelection",

	data() {
		return {
			supportedQuantityOfDices: [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
			],
			supportedQuantityOfSides: [
				/*4,*/ 6,
				/* 8, 10, 12, */ 20 /*, 21, 23, 48*/,
			],
			diceQuantity: null,
			diceSideCount: null,
			showDiceCountAlert: false,
			showDiceSideAlert: false,
		};
	},

	methods: {
		async addDiceObjectsButtonClicked() {
			if (!this.diceQuantity) {
				this.showDiceCountAlert = true;
			} else if (!this.diceSideCount) {
				this.showDiceCountAlert = false;
				await new Promise((r) => setTimeout(r, 300));
				this.showDiceSideAlert = true;
			} else {
				this.showDiceCountAlert = false;
				this.showDiceSideAlert = false;
				let args = [this.diceQuantity, this.diceSideCount];
				this.$emit("add-dices", args);
			}
		},
	},
};
</script>

<style>
.sm-label .v-label {
	font-size: 10px !important;
}

.xs-label .v-label {
	font-size: 8px !important;
}

.xs-label {
	width: 5px;
}
</style>