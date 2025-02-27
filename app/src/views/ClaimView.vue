<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useClaimsStore } from '@/stores/claims.store';
import { computed, ref, watch } from 'vue';
import ArgumentList from '@/components/ArgumentList.vue';

const route = useRoute();
const claimsStore = useClaimsStore();
const claimId = ref(route.params['claimId'] as string);

watch(() => route.params['claimId'], (newClaimId) => {
	claimId.value = newClaimId as string;
});

const claim = computed(() => claimsStore.getClaimById(claimId.value) || null);

const totalScoreFor = computed(() => {
	if (!claim.value) return 0;
	return claim.value.arguments
		.filter(arg => arg.isSupporting)
		.reduce((total, arg) => total + (arg.communityScore.strengthScore * arg.communityScore.relevanceScore), 0);
});

const totalScoreAgainst = computed(() => {
	if (!claim.value) return 0;
	return claim.value.arguments
		.filter(arg => !arg.isSupporting)
		.reduce((total, arg) => total + (arg.communityScore.strengthScore * arg.communityScore.relevanceScore), 0);
});

const winningSide = computed(() => {
	return totalScoreFor.value > totalScoreAgainst.value ? 'For' : 'Against';
});

const transitionPercentage = computed(() => {
	if (totalScoreFor.value === 0 && totalScoreAgainst.value === 0) return 50;
	const totalScore = totalScoreFor.value + totalScoreAgainst.value;
	return (totalScoreFor.value / totalScore) * 100;
});

const transitionMargin = 2.5;

</script>

<template>
	<div class="claim-view" v-if="claim">
		<h1>{{ claim.text }}</h1>
		<div class="score-bar-container">
			<div class="score-bar" :style="{ background: `linear-gradient(to right, rgb(87 228 207) ${transitionPercentage - transitionMargin}%, rgb(143 111 231) ${transitionPercentage + transitionMargin}%)` }"></div>
			<div class="score-labels">
				<span>For: {{ totalScoreFor }}</span>
				<span>Against: {{ totalScoreAgainst }}</span>
			</div>
		</div>
		<div class="arguments-container">
			<ArgumentList :arguments="claim.arguments.filter(arg => arg.isSupporting)" title="Arguments For" :totalScore="totalScoreFor" />
			<ArgumentList :arguments="claim.arguments.filter(arg => !arg.isSupporting)" title="Arguments Against" :totalScore="totalScoreAgainst" />
		</div>
		<h2>Winning Side: {{ winningSide }}</h2>
	</div>
	<div v-else>
		<p>No claim found.</p>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/colors.module.scss';

.claim-view {
	position: relative;
	padding: 1.5em;
	background: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
	font-size: 1.8em;
	margin-bottom: 0.5em;
}

p {
	font-size: 1em;
	margin-bottom: 1em;
}

.score-bar-container {
	margin-bottom: 1em;
}

.score-bar {
	height: 15px;
	border-radius: 7.5px;
}

.score-labels {
	display: flex;
	justify-content: space-between;
	margin-top: 0.5em;
	font-size: 0.9em;
}

.arguments-container {
	display: flex;
	justify-content: space-between;
}

.arguments-for, .arguments-against {
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

input[type="range"] {
	width: 100%;
	margin: 0.5em 0;
}
</style>
