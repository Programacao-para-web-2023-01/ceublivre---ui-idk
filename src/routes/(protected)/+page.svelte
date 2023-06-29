<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { tickets, user } = data;
</script>

<div class="flex w-3/4 justify-between gap-2 mt-8 mb-5 items-center">
	<h1 class="font-bold text-2xl">Listagem de Tickets</h1>
	<div>
		{#if user.role === "admin"}
			<a href="/category" class="btn btn-primary btn-sm text-base-100">Editar categorias</a>
		{:else}
			<a href="/ticket/new" class="btn btn-primary btn-sm text-base-100">Criar ticket</a>
		{/if}
	</div>
</div>

<div class="w-3/4 shadow-xl border-4 border-primary rounded-2xl mb-12">
	<div class="py-2">
		<table class="table table-zebra w-full items-center">
			<thead>
				<tr class="text-base">
					<th />
					<th>Descrição</th>
					<th>Status</th>
					<th>Categoria</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each tickets as ticket}
					<tr class="font-bold hover text-lg">
						<th>{ticket.id}</th>
						<td class="w-1/2">
							<span class="truncate">{ticket.message}</span>
						</td>
						<td>{ticket.status}</td>
						<td>{ticket.category}</td>
						<td>
							<a href="/ticket/{ticket.id}" class="btn btn-primary text-base-100 btn-sm">Detalhes</a
							>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
