<template>
	<svg
		class="icon"
    width="72px"
    height="72px"
    :opacity="opacity"
    fill="#000000"
    fill-opacity="1"
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
    selected: Boolean
  },

  computed: {
    path() {
      return icons[this.name];
    },

    opacity() {
      return this.selected ? 0.75 : 0.25
    }
  },
}
</script>