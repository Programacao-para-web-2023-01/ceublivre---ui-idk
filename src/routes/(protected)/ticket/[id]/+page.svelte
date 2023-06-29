<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { ticket, category, image } = data;
</script>

<div class="card-body flex flex-col md:flex-row gap-8 items-center">
	<div class="card card-compact md:w-1/2 bg-base-100 shadow-xl max-h-[85vh] overflow-x-auto">
		<div class="card-body flex flex-col gap-8">
			<div class="flex justify-center">
				<img src={image} alt="" class="rounded-lg object-fill md:w-2/5" />
			</div>
			<p class="font-medium text-lg text-justify">
				{ticket.message}
			</p>
			<div class="flex justify-between">
				<span>{category.name}</span>
				<span>{new Date(ticket.createdAt).toLocaleString("pt-BR")}</span>
			</div>
		</div>
	</div>
	<div class="flex flex-col md:w-1/2 gap-4">
		<div class="card card-compact w-full bg-base-100 shadow-xl">
			<div class="card-body max-h-[70vh] overflow-x-auto">
				<div class="flex flex-col">
					<div class="chat chat-start">
						<div class="chat-header">
							{ticket.userId}
							<time class="text-xs opacity-50">{ticket.createdAt}</time>
						</div>
						<div class="chat-bubble pt-3 text-justify">{ticket.message}</div>
					</div>
				</div>
				<div class="chat chat-end">
					<div class="chat-header">
						Administrador
						<time class="text-xs opacity-50">2 hour ago</time>
					</div>
					<div class="chat-bubble pt-3">Resposta aqui</div>
				</div>
			</div>
		</div>

		<div class="card card-compact w-full bg-base-100 shadow-xl">
			<div class="card-body">
				<div class="form-control w-full -mt-4">
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="label font-bold">
						<span class="label-text text-lg">Enviar uma menssagem</span>
					</label>
					<div class="join">
						<input class="input input-bordered join-item w-full text-lg" placeholder="messagem" />
						<button class="btn btn-primary text-base-100 join-item">Enviar</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
