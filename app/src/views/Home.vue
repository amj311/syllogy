<script setup lang="ts">
import { usePortfolioStore } from '@/stores/portfolio.store';
import { useUserStore } from '@/stores/user.store';
import { computed, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import PortfolioPhotoWall from '@/components/portfolio/PortfolioPhotoWall.vue';
import PortfolioCarousel from '@/components/portfolio/PortfolioCarousel.vue';
import PortfolioText from '@/components/portfolio/PortfolioTextGrid.vue';
import { useAppStore } from '@/stores/app.store';
import HomeNav from './HomeNav.vue';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { useClaimsStore } from '@/stores/claims.store';

const claimsStore = useClaimsStore();
const claims = computed(() => claimsStore.claims.slice(0, 5));

</script>

<template>
	<div class="home">
		<h1>Welcome to the Home Page</h1>
		<!-- Add other home page content here -->
		<div class="claims-list">
			<h2>Quick Links to Claims</h2>
			<ul>
				<li v-for="claim in claims" :key="claim.id">
					<RouterLink :to="{ name: 'ClaimView', params: { claimId: claim.id } }">
						{{ claim.text }}
					</RouterLink>
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
@import '@/assets/colors.module.scss';

.home {
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

.claims-list {
	margin-top: 2em;
	background: #fff;
	padding: 1em;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.claims-list h2 {
	font-size: 1.5em;
	margin-bottom: 0.5em;
}

.claims-list ul {
	list-style: none;
	padding: 0;
}

.claims-list li {
	margin-bottom: 0.5em;
}

.claims-list a {
	text-decoration: none;
	color: #007bff;
}

.claims-list a:hover {
	text-decoration: underline;
}
</style>