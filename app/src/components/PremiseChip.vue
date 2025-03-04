<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
	premise: { id: string; claim: { id: string; text: string, communityScore: { confidenceScore } }; usageType: string; };
}>();

const router = useRouter();

const handleClick = () => {
	router.push({ name: 'ClaimView', params: { 'claimId': props.premise.claim.id } });
};
</script>

<template>
	<div class="premise-chip" @click="handleClick">
		{{ console.log(props.premise.claim) }}
		<span class="score" v-if="props.premise.claim">{{ props.premise.claim?.communityScore?.confidenceScore }}</span>
		<span class="text">{{ props.premise.claim.text }}</span>
	</div>
</template>

<style scoped>
.premise-chip {
	display: inline-flex;
	align-items: center;
	background-color: #e0e0e0;
	border-radius: 16px;
	padding: 0.25em 0.5em;
	cursor: pointer;
}

.score {
	font-weight: bold;
	margin-right: 0.5em;
}

.text {
	font-size: 0.9em;
}
</style>
