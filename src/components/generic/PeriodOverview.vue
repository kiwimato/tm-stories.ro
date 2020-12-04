<template>
	<div class="overview-container">
	<slot name="title-container">
		<div class="title-container">
				<div class="title">
					<div class="text-white animate__animated animate__slideInLeft">
						{{ title }}
					</div>
				</div>
			</div>
		</slot>
		<div class="stories-container">
			<story-card
				v-for="(story, i) in stories"
				:key="i"
				:story="story"
				@open-story="$emit('open-story', $event)"
			/>
		</div>
	</div>
</template>

<script>
import StoryCard from '../generic/StoryCard'

export default {
	name: 'PeriodOverview',
	components: {
		storyCard: StoryCard,
	},
	props: {
		color: {
			type: String,
			default: 'hotpink'
		},
		stories: {
			type: Array,
			required: true
		},
		title: {
			type: String,
			default: ''
		}
	}
}
</script>