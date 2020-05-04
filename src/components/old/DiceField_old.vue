<template>
  <div class="diceField">
    <button @click='rollSelectedDices()' class="fieldButton rollDicesButton">
      <p>Let's Roll!</p>
      </button>
    <ul>
      <li v-for="dice in dices" :key=dice.id>
        Id: {{ dice.id }}, 
        Sides: {{ dice.sides}}, 
        Top: {{ dice.top }}, 
        Selected: {{ dice.selected }}
        <button @click="$emit('set-selected', dice.id)" class="fieldButton setSelectedButton">
          <p v-if="dice.selected">deselect</p>
          <p v-else>select</p>
        </button>
        <button @click="$emit('remove-dice', dice.id)" class="fieldButton removeDiceButton">
          <p>remove</p>
        </button>
      </li>  
    </ul>
  </div>
</template>

<script>
export default {
  name: "DiceField",

  data() {
    return {};
  },

  methods: {
    /*deprecated: use selected dices lookup table instead
    getSelectedDices() {
      let selectedDices = this.dices.filter(dice => dice.selected === true)
      return selectedDices
    },*/

    rollSelectedDices() {
      this.selectedDicesLookupTable.forEach(diceId => {
        this.rollSingleDice(diceId)
      });
    },

    rollSingleDice(diceId) {
      let arrayIndexToDiceId = this.idToIndexLookupTable[diceId]
      let sideCount = parseFloat(this.dices[arrayIndexToDiceId].sides)
      let newTop = Math.floor((Math.random() * sideCount) + 1)
      let args = [diceId, newTop]
      this.$emit('set-top', args)
    },

    /*deprecated: use index table
      getIndexToId(diceId) {
      let arrayIndexOfDiceId = this.dices.findIndex(dice => dice.id === diceId)
      return arrayIndexOfDiceId
    }*/
  },

  props: {
    dices: Array,
    idToIndexLookupTable: Array,
    selectedDicesLookupTable: Array
  },
};
</script>

<style>
.fieldButton {
  border: 0, solid, #ccc;
  font-size: 10px;
}

.diceField {
    padding:10px;
}

.rollDices {
  padding:5px; 
  border:2px solid #ccc; 
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

.setSelected {
  padding:5px; 
  border:2px solid #ccc; 
  -webkit-border-radius: 5px;
  border-radius: 5px;
}

</style>
