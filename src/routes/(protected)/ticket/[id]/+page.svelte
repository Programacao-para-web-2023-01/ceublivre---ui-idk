<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { ticket, category, replies, user } = data;
</script>

<div class="card-body flex flex-col md:flex-row gap-8 items-center">
	<div class="card card-compact md:w-1/2 bg-base-100 shadow-xl max-h-[85vh] overflow-x-auto">
		<div class="card-body flex flex-col gap-8">
			<div class="flex justify-center">
				<img src="/default-img.jpg" alt="" class="rounded-lg object-fill" />
			</div>
			<p class="font-medium text-lg text-justify">
				{ticket.message}
			</p>
			<div class="flex justify-between">
				<span>{category.name}</span>
				<span>{new Date(ticket.createdAt).toLocaleString("pt-BR")}</span>
			</div>
			{#if user.role === "admin"}
				<form method="post" action="?/closeTicket" class="font-bold flex justify-center">
					<button class="btn btn-primary btn-sm" name="closeId" value={ticket.id} type="submit">
						Fechar ticket
					</button>
				</form>
			{/if}
		</div>
	</div>

	<div class="flex flex-col md:w-1/2 gap-12">
		{#if replies.length > 0}
			<div class="card card-compact w-full bg-base-100 shadow-xl h-[60vh]">
				<div class="card-body max-h-[60vh] overflow-x-auto">
					{#each replies as reply}
						<div class={`chat ${reply.user.email === user.email ? "chat-end" : "chat-start"}`}>
							<div class="chat-header">
								{reply.user.email}
								<time class="text-xs opacity-50">{reply.createdAt}</time>
							</div>
							<div class="chat-bubble pt-3">{reply.message}</div>
						</div>
					{/each}
				</div>
			</div>
		{:else}
			<span class="bg-base-100 rounded-lg font-bold text-4xl h-[60vh] text-center py-32">
				Sem resposta ainda
			</span>
		{/if}

		<div class="card card-compact w-full bg-base-100 shadow-xl">
			<div class="card-body">
				<form method="post" action="?/message">
					<input type="hidden" name="ticket-id" value={ticket.id.toString()} />
					<div class="form-control w-full -mt-4">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<label class="label font-bold">
							<span class="label-text text-lg">Resposta</span>
						</label>
						<div class="join">
							<input
								class="input input-bordered join-item w-full text-lg"
								placeholder="Digite algo..."
								name="message"
							/>
							<button class="btn btn-primary text-base-100 join-item" type="submit">Enviar</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
