<script>
	import PencilSquare from "$lib/components/icon/pencil-square.svelte";
	import Plus from "$lib/components/icon/plus.svelte";
	import Trash from "$lib/components/icon/trash.svelte";

	/** @type {import("./$types").PageData} */
	export let data;
	const { categories } = data;

	let categoryName = "";
</script>

<button class="btn btn-square btn-success" onclick="modalNew.showModal()">
	<Plus />
</button>
<dialog id="modalNew" class="modal">
	<form method="dialog" class="modal-box flex flex-col gap-4">
		<h3>crie uma categoria</h3>
		<div class="join join-vertical md:join-horizontal">
			<input
				name="categoryName"
				class="input input-bordered join-item w-full"
				placeholder="Categoria"
				bind:value={categoryName}
			/>
			<button class="btn btn-primary text-base-100 join-item" type="submit">Criar</button>
		</div>
		<form method="dialog" class="modal-backdrop grid justify-items-end">
			<button class="btn btn-error text-base-100 join-item btn-sm w-1/4">Fechar</button>
		</form>
	</form>
</dialog>

<div class="card-body flex flex-col gap-8 w-11/12 md:1/3">
	<div class="card bg-base-300">
		<div class="card-body overflow-x-auto">
			<ul class="flex flex-col gap-4 font-bold">
				<l1 class="join justify-center">
					<h2 class="text-6xl">Categorias</h2>
				</l1>
				<l1 class="divider" />
				{#each categories as category}
					<li class="flex flex-row bg-base-100 items-center shadow-sm rounded-lg p-2 pl-4">
						<span class="grow">{category.name}</span>
						<form>
							<button
								class="btn btn-square btn-outline btn-info btn-sm"
								onclick="modalEdit{category.id}.showModal()"
								name="updateId"
								value={category.id}
							>
								<PencilSquare />
							</button>
							<dialog id="modalEdit{category.id}" class="modal">
								<form method="dialog" class="modal-box flex flex-col gap-4">
									<h3>Editar nome da categoria</h3>
									<div class="join join-vertical md:join-horizontal">
										<input
											name="updateName"
											class="input input-bordered join-item w-full"
											placeholder={category.name}
											bind:value={category.name}
										/>
										<button class="btn btn-primary text-base-100 join-item" type="submit"
											>Alterar</button
										>
									</div>
									<form method="dialog" class="modal-backdrop grid justify-items-end">
										<button class="btn btn-error text-base-100 join-item btn-sm w-1/4"
											>Fechar</button
										>
									</form>
								</form>
							</dialog>
						</form>
						<form>
							<button
								type="submit"
								class="btn btn-square btn-outline btn-error btn-sm"
								value={category.id}
								name="delete"
							>
								<Trash />
							</button>
						</form>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
