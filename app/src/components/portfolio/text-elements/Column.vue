<script setup lang="ts">
import Row from './Row.vue';

const col = defineModel<any>();

const props = defineProps<{
	editMode?: boolean,
	canAddColumns?: Array<any>,
	sectionEditor: any;
}>();
</script>

<template>
	<div class="text-col">
		<div v-for="(row, i) in col.rows" class="text-col" :key="i">
			<Row :editMode="props.editMode" v-model="col.rows[i]" :canAddColumns="props.canAddColumns" :sectionEditor="props.sectionEditor" />
		</div>
	</div>
</template>

<style scoped lang="scss">
</style>