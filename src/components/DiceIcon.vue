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
		<g
			v-if="(name.substr(0,3) == 'd20') || (name.substr(0,3) == 'dHe')"
			:transform="paths[0]['transform']"
		>
			<path
				v-for="(path, index) in paths"
				:d="path['d']"
				:stroke-width="path['stroke-width']"
				:fill="path['fill']"
				:key="index"
			/>
		</g>
		<path
			v-else
			v-for="(path, index) in paths"
			:d="path['d']"
			:key="index"
		/>
	</svg>
</template>

<script>
import icons from "../assets/dicer_svg.json";

export default {
	name: "DiceIcon",

	props: {
		name: String,
		selected: Boolean,
	},

	computed: {
		paths() {
			return icons[this.name];
		},

		opacity() {
			return this.selected ? 0.25 : 0.75;
		},
	},
};
</script>