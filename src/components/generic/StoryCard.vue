<template>
    <div
			class="story-card pointer"
			@click="$emit('open-story', story.path)"
		>
			<slot name="title">
				<div class="title">
					{{ story.title }}
				</div>
			</slot>
			<slot name="intro">
				<div class="intro mt-1" v-html="intro" />
			</slot>
		</div>
</template>

<script>
import { truncate } from '../../utils/string'

export default {
	name: 'StoryCard',
	props: {
		story: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			intro: ''
		}
	},
	mounted() {
		this.intro = truncate(this.story.intro, 230);
	}
}
</script>

<style lang="scss">
 .story-card {
	height: 180px;
	width: 97%;
	border-radius: 5px;
	background-color: white;
	padding: 8px 16px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	margin: 8px 0;

	.title {
		font-size: 1.8rem;
		font-weight: bold;
	}
}

@media (max-width: 1280px) {
	.story-card {
		height: 180px;
	}
}

@media (max-width: 960px) {
	.story-card {
		height: 190px;
	}
}

@media (max-width: 768px) {
	.story-card {
		height: 140px;

		.title {
			font-size: 1.5rem;
		}
	}
}

@media (max-width: 500px) {
	.story-card {
		height: 135px;

		.title {
			font-size: 1.2rem;
		}

		.intro {
			font-size: 0.9rem;
		}
	}
}

@media (max-width: 400px) {
	.story-card {
		height: 180px;

		.title {
			font-size: 1.2rem;
		}

		.intro {
			font-size: 0.9rem;
		}
	}
}
</style>