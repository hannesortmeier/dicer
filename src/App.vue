<template>
	<v-app id="inspire" :style="{background: $vuetify.theme.themes.light.background}">
		<AppBar @nav-button-clicked="setDrawer()" />
		<v-content class="ma-5">
			<v-card
				class="mx-auto ma-5"
				max-width="780"
				min-height="360"
				elevation="18"
				color="#ebefe8"
			>
				<DiceSelection
					@add-dices="addDiceObjects($event[0], $event[1])"
					@remove-all="removeAllDiceObjects()"
				/>
				<DiceField
					v-if="this.diceObjects.length > 0"
					:dices="diceObjects"
					:idToIndexLookupTable="idToIndexLookupTable"
					:selectedDicesLookupTable="selectedDicesLookupTable"
					@set-top="setTop($event[0], $event[1])"
					@set-selected="setSelected($event)"
					@remove-dice="removeSingleDiceObject($event)"
				/>
			</v-card>
		</v-content>
		<Footer />
	</v-app>
</template>

<script>
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import DiceSelection from './components/DiceSelection'
import DiceField from './components/DiceField'

export default {
	components: {
		AppBar,
		Footer,
    DiceSelection,
    DiceField
	},

	mounted () {
      console.log(this.$vuetify.breakpoint)
    },

	props: {},

	data: () => ({
		diceObjects: [],
		idToIndexLookupTable: [],
		selectedDicesLookupTable: []
	}),

	methods: {
		addDiceObjects(diceQuantity, diceSideCount) {
			let nextId = this.getNextIdOfDiceObject()
			for (let i = nextId; i < parseFloat(diceQuantity) + parseFloat(nextId); i++) {
				this.diceObjects.push({
					id: i,
					sides: diceSideCount,
					top: diceSideCount,
					selected: true
				})
			}
			this.updateIdToIndexLookupTable()
			this.updateSelectedLookupTable()
		},

		getNextIdOfDiceObject() {
			let nextId = 0
			for (let i = 0; i < this.diceObjects.length; i++) {
				let currentId = this.diceObjects[i].id
				if (parseFloat(currentId) >= parseFloat(nextId)) {
					nextId = currentId + 1
				}
			}
			return nextId
		},

		setTop(diceId, newTop) {
			let arrayIndexToDiceId = this.idToIndexLookupTable[diceId]
			this.diceObjects[arrayIndexToDiceId].top = newTop
		},

		setSelected(diceId) {
			let arrayIndexToDiceId = this.idToIndexLookupTable[diceId]
			this.diceObjects[arrayIndexToDiceId].selected = this.diceObjects[arrayIndexToDiceId].selected ? false : true
			this.updateSelectedLookupTable()
		},

		removeAllDiceObjects() {
			this.diceObjects = []
			this.idToIndexLookupTable = []
			this.selectedDicesLookupTable = []
		},

		removeSingleDiceObject(diceId) {
			let arrayIndexToDiceId = this.idToIndexLookupTable[diceId]
			this.diceObjects.splice(arrayIndexToDiceId, 1)
			this.updateIdToIndexLookupTable()
			this.updateSelectedLookupTable()
		},

		updateIdToIndexLookupTable() {
			let idToIndexLookupTable = []
			for (let i = 0; i < this.diceObjects.length; i++) {
				idToIndexLookupTable[this.diceObjects[i].id] = i
				this.idToIndexLookupTable = idToIndexLookupTable
			}
		},

		updateSelectedLookupTable() {
			let selectedDicesLookupTable = []
			for (let i = 0; i < this.diceObjects.length; i++) {
				if (this.diceObjects[i].selected) {
					selectedDicesLookupTable.push(this.diceObjects[i].id)
				}
			}
			this.selectedDicesLookupTable = selectedDicesLookupTable
		}
	}
}
</script>