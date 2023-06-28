<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { tickets } = data;
</script>

<div class="flex w-8/12 justify-end gap-2">
	<a href="/ticket/new" class="btn btn-primary btn-sm my-4 text-base-100">Criar ticket</a>
	<a href="/category" class="btn btn-primary btn-sm my-4 text-base-100">Editar categorias</a>
</div>

<div class="w-8/12 shadow-xl border-4 border-primary rounded-2xl">
	<div class="flex flex-col gap-4 px-4 py-2">
		{#each tickets as ticket}
			<div class="font-bold flex flex-row justify-between items-center">
				<div class="w-1/2">
					<a
						href="/ticket/{ticket.id}"
						class="btn btn-block no-animation hover:badge-ghost hover:bg-base-300 justify-start"
					>
						<span class="truncate">{ticket.message}</span>
					</a>
				</div>
				<span>{ticket.status}</span>
				<span>{ticket.category}</span>
				<a href="/ticket/{ticket.id}" class="btn btn-primary text-base-100 btn-sm">Detalhes</a>
			</div>
		{/each}
	</div>
</div>
