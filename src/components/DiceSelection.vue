<template>
  <div class="selector-component">
    <h1>Select your dices!</h1>
    <div class="selector">
        <p>Dices:
        <select 
          v-model.number="diceQuantity" 
          type="number">
          <option 
            v-for="quantityOfDices in supportedQuantityOfDices" 
            :key="quantityOfDices">
            {{ quantityOfDices }}
          </option>
        </select>
        Sides:
        <select 
          v-model.number="diceSideCount" 
          type="number">
          <option 
            v-for="countOfSides in supportedCountOfDiceSides" 
            :key="countOfSides">
            {{ countOfSides }}
          </option>
        </select>
        <button @click='addDiceObjectsButtonClicked()' class="addDicesButton">add</button>
        <button @click="$emit('remove-all')">remove all</button>
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiceSelection",

  data() {
    return {
      diceQuantity: 1,
      diceSideCount: 6,
      supportedQuantityOfDices: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
      supportedCountOfDiceSides: [4,6,7,8,9,10,11,12,13,14,15,16,21,23,48],
    }
  },

  methods: {
    addDiceObjectsButtonClicked() {
      let args = [this.diceQuantity, this.diceSideCount]
      this.$emit('add-dices', args)
    }
  }

};
</script>

<style scoped>
.selector-component {
  font-size: 20px;
}

.addDicesButtonx {
  font-size: 18px;
   padding:5px; 
  border:2px solid #ccc;     
  -webkit-border-radius: 5px;
  border-radius: 5px;
  width: 25px;
}

select[type=number] {
    padding:5px; 
    border:2px solid #ccc; 
    -webkit-border-radius: 5px;
    border-radius: 5px;
    width: 50px;
    height: 30px;
}

select[type=number]:focus {
    border-color:#333;
}

select[type=submit] {
    padding:5px 15px; 
    background:#ccc; 
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px; 
}
</style>
