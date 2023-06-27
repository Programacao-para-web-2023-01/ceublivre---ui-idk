<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { tickets } = data;
</script>

<div class="flex w-8/12 justify-end">
	<button class="btn btn-primary my-4">
		<a href="/ticket/new" class="text-base-100">Criar ticket</a>
	</button>
</div>

<div class="flex w-8/12 justify-end">
	<button class="btn btn-primary my-4">
		<a href="/category" class="text-base-100">Editar categorias</a>
	</button>
</div>

<div class="w-8/12 shadow-xl border-4 border-neutral rounded-2xl">
	<div class="flex flex-col gap-4 px-4 py-2">
		{#each tickets as ticket}
			<div class="font-bold flex flex-row justify-between">
				<div class="lg:tooltip tooltip-info w-1/2" data-tip={ticket.message}>
					<button class="btn btn-block no-animation hover:badge-ghost">
						<span class="truncate">{ticket.message}</span>
					</button>
				</div>
				<span>{ticket.statusId}</span>
				<span>{ticket.categoryId}</span>
				<a href="/ticket/{ticket.id}" class="btn btn-neutral btn-xs"> Detalhes </a>
			</div>
		{/each}
	</div>
</div>
