<script setup lang="ts">
import PremiseChip from '@/components/PremiseChip.vue';

interface Argument {
	id: string;
	type: string;
	isSupporting: boolean;
	title: string;
	text: string;
	premises: Array<{ id: string; claim: { id: string; text: string, communityScore: { confidenceScore: number } }; usageType: string }>;
	communityScore: { strengthScore: number; relevanceScore: number };
}

const props = defineProps<{
	arguments: Argument[];
	title: string;
	totalScore: number;
}>();

const emit = defineEmits(['premiseClick']);

const handlePremiseClick = (premiseId: string) => {
	emit('premiseClick', premiseId);
};

</script>

<template>
	<div :class="['arguments', title.toLowerCase().replace(' ', '-')]">
		<h2>{{ title }}</h2>
		<div v-for="arg in arguments" :key="arg.id" class="argument">
			<h3>{{ arg.title }}</h3>
			<p>{{ arg.text }}</p>
			<!-- <p><strong>Type:</strong> {{ arg.type }}</p> -->
			<p><strong>Strength Score:</strong> {{ arg.communityScore.strengthScore }}</p>
			<p><strong>Relevance Score:</strong> {{ arg.communityScore.relevanceScore }}</p>
			<div v-for="premise in arg.premises" :key="premise.id" class="premise">
				<PremiseChip :premise="premise" @click="handlePremiseClick(premise.claim.id)" />
			</div>
		</div>
		<p><strong>Total Score:</strong> {{ totalScore }}</p>
	</div>
</template>

<style scoped lang="scss">
.arguments {
	width: 48%;
	background: #fff;
	padding: 0.75em;
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h2 {
	font-size: 1.3em;
	margin-bottom: 0.75em;
}

h3 {
	font-size: 1.1em;
	margin-top: 0.5em;
}

.argument {
	margin-bottom: 1em;
}
</style>
