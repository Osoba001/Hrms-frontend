<!-- eslint-disable no-mixed-spaces-and-tabs -->
<template>
	<ModalBackdrop @close="toggleModal">
		<div class="modal-inner">
			<div class="wrapper">
				<p class="message-receiver">From: Samuel Java</p>
				<p class="message-receiver">To: Michael Sunday</p>

				<p class="message">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Placeat animi labore sunt distinctio eius? Odio, expedita.
					Nesciunt reprehenderit dolores expedita maiores ut
					architecto? Quia, similique?
				</p>

				<div class="btns-container">
					<button>Approve</button>
					<button class="deny">Deny</button>
				</div>
			</div>
		</div>
	</ModalBackdrop>
</template>

<script>
import ModalBackdrop from "@/components/ModalBackdrop.vue"

export default {
	name: "EmployeeModalInfo",
	components: { ModalBackdrop },
	props: ["toggleModal"],
}
</script>

<style scoped>
.modal-inner {
	display: flex;
	align-items: center;
}
.message-receiver {
	margin-bottom: 1rem;
}
.message span {
	opacity: 0.7;
}

.btns-container {
	margin-top: 2rem;
}

button {
	padding: 0.5em 1em;
	background-color: #2b9de9;
	color: #fff;
	font-weight: 600;
	border-radius: 4px;
	cursor: pointer;
	transition: background-color 250ms ease;
}
button:hover {
	opacity: 0.7;
}

button.deny {
	background-color: #ca1310;
	margin-left: 0.5rem;
}

.upload-document {
	margin-top: 2rem;
}
</style>
