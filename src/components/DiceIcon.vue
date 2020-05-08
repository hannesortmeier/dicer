<template>
	<svg
		class="icon"
		style="width:48px;height:48px"
		viewBox="0 0 24 24"
	>
		<path :d="path" />
	</svg>
</template>

<script>
import icons from '../assets/diceIcons.json'
export default {
  name: 'DiceIcon',

  props: {
    name: String,
  },

  computed: {
    path() {
      return icons[this.name];
    },
  },
}
</script>