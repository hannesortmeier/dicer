<template>
	<v-app id="inspire" :style="{background: $vuetify.theme.themes.light.background}">
		<AppBar @nav-button-clicked="setDrawer()" />
		<v-main class="ma-5">
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
				<SelectedSumDisplay 
					:dices="diceObjects"
					:selectedDicesLookupTable="selectedDicesLookupTable"
				/>
				<DiceField
					v-if="this.diceObjects.length > 0"
					:dices="diceObjects"
					:idToIndexLookupTable="idToIndexLookupTable"
					:selectedDicesLookupTable="selectedDicesLookupTable"
					@set-top="setTop($event[0], $event[1])"
					@set-selected="setSelected($event)"
					@remove-dice="removeSingleDiceObject($event)"
					@update-roll-history="updateRollHistory()"
					@set-last="setLastRoll()"
					@set-next="setNextRoll()"
					@remove-next-roll-history="removeNextRollHistory()"
				/>
			</v-card>
		</v-main>
		<Footer />
	</v-app>
</template>

<script>
import AppBar from './components/AppBar'
import Footer from './components/Footer'
import DiceSelection from './components/DiceSelection'
import DiceField from './components/DiceField'
import SelectedSumDisplay from './components/SelectedSumDisplay'

export default {
	components: {
		AppBar,
		Footer,
    	DiceSelection,
		DiceField,
		SelectedSumDisplay
	},

	mounted () {
      //console.log(this.$vuetify.breakpoint)
    },

	props: {},

	data: () => ({
		diceObjects: [],
		idToIndexLookupTable: [],
		selectedDicesLookupTable: [],
		rollHistory: [[]],
		historyIndex: 0
	}),

	methods: {
		copyDiceObjects(diceObjects) {
			let diceObjectsCopy = []
			diceObjects.forEach(dice => {
				diceObjectsCopy.push({
				id: dice.id,
				sides: dice.sides,
				top: dice.top,
				selected: dice.selected
			})
			});
			return diceObjectsCopy
		},

		addDiceObjects(diceQuantity, diceSideCount) {
			let nextId = this.getNextIdOfDiceObject()
			for (let i = nextId; i < parseFloat(diceQuantity) + parseFloat(nextId); i++) {
				this.diceObjects.push({
					id: i,
					sides: diceSideCount,
					top: diceSideCount,
					selected: false
				})
			this.initialiseRollHistory()
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

		initialiseRollHistory() {
			this.rollHistory = []
			this.rollHistory[0] = this.copyDiceObjects(this.diceObjects)
			this.historyIndex = 0
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
				if (! this.diceObjects[i].selected) {
					selectedDicesLookupTable.push(this.diceObjects[i].id)
				}
			}
			this.selectedDicesLookupTable = selectedDicesLookupTable
		},

		updateRollHistory() {
			this.rollHistory.push(this.copyDiceObjects(this.diceObjects))
			this.historyIndex = this.historyIndex + 1
			console.log('rollHistory', this.rollHistory)
		},

		setLastRoll() {
			if (this.historyIndex >= 1) {
				this.diceObjects = this.rollHistory[this.historyIndex - 1]	
				this.historyIndex = this.historyIndex - 1
			}
			console.log('historyIndex: ',this.historyIndex)
		},
	
		setNextRoll() {
			if (this.rollHistory.length - 1 > this.historyIndex) {
			this.diceObjects = this.rollHistory[this.historyIndex + 1]
			this.historyIndex = this.historyIndex + 1
			}
			console.log('historyIndex: ',this.historyIndex)
		},

		removeNextRollHistory() {
			for (let i = this.historyIndex; i < this.rollHistory.length; i++) {
				this.rollHistory.splice(this.historyIndex + 1, 1)
			}
			console.log('rollHistory after slice', this.rollHistory)
		}
	},
}
</script>