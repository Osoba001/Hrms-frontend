<template>
	<teleport to=".modals">
		<div class="loader-view">
			<Loader />
		</div>
	</teleport>
</template>

<script>
import Loader from "@/components/Loader.vue"

export default {
	name: "LoadingView",
	components: { Loader },
}
</script>

<style scoped>
.loader-view {
	height: 100vh;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	flex-direction: column;
}
</style>
