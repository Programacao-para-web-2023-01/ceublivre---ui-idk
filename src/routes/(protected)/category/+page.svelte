<script>
	import { enhance } from "$app/forms";
	import CheckCircle from "$lib/components/icon/check-circle.svelte";
	import ExclamationCircle from "$lib/components/icon/exclamation-circle.svelte";
	import PencilSquare from "$lib/components/icon/pencil-square.svelte";
	import Plus from "$lib/components/icon/plus.svelte";
	import Trash from "$lib/components/icon/trash.svelte";

	/** @type {import("./$types").PageData} */
	export let data;
	const { categories } = data;
</script>

<div class="card-body flex flex-col gap-8 w-11/12 md:1/3">
	<div class="card bg-base-300">
		<div class="card-body overflow-x-auto">
			<ul class="flex flex-col gap-4 font-bold">
				<l1 class="flex join justify-between items-center">
					<div />
					<h2 class="text-6xl">Categorias</h2>
					<div>
						<button class="btn btn-square btn-success" onclick="modalNew.showModal()">
							<Plus />
						</button>
						<dialog id="modalNew" class="modal">
							<form method="post" action="?/new" class="modal-box flex flex-col gap-4">
								<h3>crie uma categoria</h3>
								<div class="join join-vertical md:join-horizontal">
									<input
										type="newCategory"
										name="newCategory"
										class="input input-bordered join-item w-full"
										placeholder="Categoria"
										required
									/>
									<button class="btn btn-primary text-base-100 join-item" type="submit"
										>Criar</button
									>
								</div>
								<form method="dialog" class="modal-backdrop grid justify-items-end">
									<button class="btn btn-error btn-sm rounded-md text-base-100">Fechar</button>
								</form>
							</form>
						</dialog>
					</div>
				</l1>
				<l1 class="divider" />
				{#each categories as category}
					<li class="flex flex-row bg-base-100 items-center shadow-sm rounded-lg p-2 pl-4 gap-4">
						<span class="grow">{category.name}</span>
						<div>
							<button
								class="btn btn-square btn-outline btn-info btn-sm"
								onclick="modalEdit{category.id}.showModal()"
							>
								<PencilSquare />
							</button>
							<dialog id="modalEdit{category.id}" class="modal">
								<form method="post" action="?/update" class="modal-box flex flex-col gap-4">
									<h3>Editar nome da categoria</h3>
									<div class="join join-vertical md:join-horizontal">
										<input
											name="updateCategory"
											class="input input-bordered join-item w-full"
											placeholder={category.name}
										/>
										<button
											class="btn btn-primary text-base-100 join-item"
											type="submit"
											value={category.id}
											name="updateId"
										>
											Alterar
										</button>
									</div>
									<form method="dialog" class="modal-backdrop grid justify-items-end">
										<button class="btn btn-error text-base-100 join-item btn-sm w-1/4">
											Fechar
										</button>
									</form>
								</form>
							</dialog>
						</div>
						<form method="post" action="?/delete">
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
