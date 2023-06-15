<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { ticket, category } = data;
</script>

<div class="card card-compact w-1/2 bg-base-100 shadow-xl items-start">
	<div class="card-body flex flex-row">
		<img
			src="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/cni_EnxE1Ir.jpg"
			alt="Shoes"
			class="rounded-lg object-fill w-1/2"
		/>
		<div class="flex flex-col justify-between w-full px-2">
			<p class="font-medium text-lg text-justify">
				{ticket.message}
			</p>
			<div class="flex justify-between">
				<span>{category.name}</span>
				<span>{new Date(ticket.createdAt).toLocaleString("pt-BR")}</span>
			</div>
		</div>
	</div>
</div>

<!-- <div class="w-8/12 flex flex-col">
	<div class="chat chat-start">
		<div class="chat-header">
			{ticket.userId}
			<time class="text-xs opacity-50">{ticket.createdAt}</time>
		</div>
		<div class="chat-bubble pt-3">{ticket.message}</div>
	</div>
</div>
<div class="chat chat-end">
	<div class="chat-header">
		Administrador
		<time class="text-xs opacity-50">2 hour ago</time>
	</div>
	<div class="chat-bubble pt-3">Resposta aqui</div>
</div> -->
