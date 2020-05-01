<template>
	<v-app id="inspire">
		<AppBar @nav-button-clicked="setDrawer()" />
		<v-content>
			<DiceSelection
				@add-dices="addDiceObjects($event[0], $event[1])"
				@remove-all="removeAllDiceObjects()"
			/>
			<DiceField />
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

	props: {},

	data: () => ({
		diceObjects: [],
		idToIndexLookupTable: [],
		selectedDicesLookupTable: []
	}),

	methods: {
    //add exception if one of the parameters equals null
		addDiceObjects(diceQuantity, diceSideCount) {
			let nextId = this.getNextIdOfDiceObject()
			for (
				let i = nextId;
				i < parseFloat(diceQuantity) + parseFloat(nextId);
				i++
			) {
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
			this.diceObjects[arrayIndexToDiceId].selected = this.diceObjects[
				arrayIndexToDiceId
			].selected
				? false
				: true
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

		/*Not in use for the moment but might come in handy. I dont see where
      getSelected(diceId) {
      return this.diceObjects[this.idToIndexLookupTable[diceId]].selected
    }*/
	}
}
</script>