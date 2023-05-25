<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { ticket } = data;
</script>
	
<div class="w-8/12 flex flex-col">
	<div class="chat chat-start">
		<div class="chat-header">
			{ticket.userId}
			<time class="text-xs opacity-50">{ticket.createdAt}</time>
		</div>
		<div class="chat-bubble pt-3">{ticket.message}</div>
	</div>
</div>
<!-- <div class="chat chat-end">
	<div class="chat-header">
		Administrador
		<time class="text-xs opacity-50">2 hour ago</time>
	</div>
	<div class="chat-bubble pt-3">Resposta aqui</div>
</div> -->
