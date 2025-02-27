import { defineStore } from 'pinia';
import { reactive } from 'vue';

export const useClaimsStore = defineStore('claims', () => {
	const claims = reactive([
		{
			id: 'claim-1',
			text: '🤖 AI will improve the quality of human life',
			arguments: [
				{
					id: 'argument-1',
					type: 'causal',
					isSupporting: true,
					title: 'Healthcare Improvement',
					text: 'AI-enhanced diagnostics will improve healthcare, leading to better quality of life.',
					premises: [
						{ id: 'premise-1', claimId: 'claim-2', usageType: 'support' },
						{ id: 'premise-2', claimId: 'claim-11', usageType: 'causal' }
					],
					communityScore: {
						strengthScore: 9,
						relevanceScore: 1
					}
				},
				{
					id: 'argument-2',
					type: 'causal',
					isSupporting: true,
					title: 'Overdiagnosis Risk',
					text: 'Early detection might lead to overdiagnosis and unnecessary treatments.',
					premises: [
						{ id: 'premise-3', claimId: 'claim-5', usageType: 'support' }
					],
					communityScore: {
						strengthScore: 8,
						relevanceScore: 0.9
					}
				},
				{
					id: 'argument-3',
					type: 'causal',
					isSupporting: false,
					title: 'Job Opportunities',
					text: 'New job opportunities could emerge in AI-related fields.',
					premises: [
						{ id: 'premise-4', claimId: 'claim-7', usageType: 'support' }
					],
					communityScore: {
						strengthScore: 4,
						relevanceScore: 0.6
					}
				},
				{
					id: 'argument-4',
					type: 'causal',
					isSupporting: false,
					title: 'Retraining Programs',
					text: 'Retraining programs could help workers transition to new roles.',
					premises: [
						{ id: 'premise-5', claimId: 'claim-9', usageType: 'support' }
					],
					communityScore: {
						strengthScore: 3,
						relevanceScore: 0.5
					}
				},
			],
			communityScore: {
				confidenceScore: 9
			}
		},
		{
			id: 'claim-2',
			text: 'Better healthcare improves the quality of human life.',
			arguments: [
				{
					id: 'argument-5',
					type: 'causal',
					isSupporting: true,
					title: 'Increased Lifespan',
					text: 'Better healthcare can lead to increased lifespan and overall well-being.',
					premises: [
						{ id: 'premise-6', claimId: 'claim-12', usageType: 'support' }
					],
					communityScore: {
						strengthScore: 7,
						relevanceScore: 0.8
					}
				},
				{
					id: 'argument-7',
					type: 'causal',
					isSupporting: false,
					title: 'Healthcare Inequality',
					text: 'Better healthcare might not be accessible to everyone, leading to inequality.',
					premises: [
						{ id: 'premise-8', claimId: 'claim-13', usageType: 'support' }
					],
					communityScore: {
						strengthScore: 6,
						relevanceScore: 0.7
					}
				}
			],
			communityScore: {
				confidenceScore: 8
			}
		},
		{
			id: 'claim-5',
			text: 'Early detection might lead to overdiagnosis and unnecessary treatments.',
			arguments: [],
			communityScore: {
				confidenceScore: 7
			}
		},
		{
			id: 'claim-7',
			text: 'New job opportunities could emerge in AI-related fields.',
			arguments: [],
			communityScore: {
				confidenceScore: 6
			}
		},
		{
			id: 'claim-9',
			text: 'Retraining programs could help workers transition to new roles.',
			arguments: [],
			communityScore: {
				confidenceScore: 5
			}
		},
		{
			id: 'claim-11',
			text: 'AI-enhanced diagnostics will improve healthcare, leading to better quality of life.',
			arguments: [],
			communityScore: {
				confidenceScore: 8
			}
		},
		{
			id: 'claim-12',
			text: 'Better healthcare can lead to increased lifespan and overall well-being.',
			arguments: [],
			communityScore: {
				confidenceScore: 7
			}
		},
		{
			id: 'claim-13',
			text: 'Better healthcare might not be accessible to everyone, leading to inequality.',
			arguments: [],
			communityScore: {
				confidenceScore: 6
			}
		}
	]);

	const getClaimById = (id: string) => {
		const claim = claims.find(claim => claim.id === id) as any;
		if (claim) {
			claim.arguments.forEach(argument => {
				argument.premises.forEach(premise => {
					const premiseClaim = claims.find(c => c.id === premise.claimId);
					if (premiseClaim) {
						premise.claim = premiseClaim;
					}
				});
			});
		}
		return claim;
	};

	return { claims, getClaimById };
});
