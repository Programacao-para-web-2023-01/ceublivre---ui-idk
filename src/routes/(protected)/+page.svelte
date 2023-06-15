<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { tickets } = data;
</script>

<div class="flex w-8/12 justify-end">
	<button class="btn btn-primary my-4">Criar ticket</button>
</div>

<div class="w-8/12 shadow-xl border-4 border-neutral rounded-2xl">
	<div class="flex flex-col gap-4 px-4 py-2">
		{#each tickets as ticket}
			<div class="font-bold flex flex-row justify-between">
				<span class="truncate w-1/2" title={ticket.message}>{ticket.message}</span>
				<span>{ticket.statusId}</span>
				<span>{ticket.categoryId}</span>
				<a href="/ticket/{ticket.id}" class="btn btn-neutral btn-xs"> Detalhes </a>
			</div>
		{/each}
	</div>
</div>
