<script>
	import Trash from "$lib/components/icon/trash.svelte";

	/** @type {import("./$types").PageData} */
	export let data;
	const { categories } = data;
</script>

<div class="flex flex-col gap-8 w-1/3">
	<h2 class="font-bold text-6xl text-center mb-3">Categorias</h2>
	<div class="card bg-base-300">
		<div class="card-body">
			<div class="form-control w-full -mt-4">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label font-bold">
					<span class="label-text text-lg">Crie uma categoria</span>
				</label>
				<div class="join">
					<input class="input input-bordered join-item w-full" placeholder="Categoria" />
					<button class="btn btn-primary text-base-100 join-item">Criar</button>
				</div>
			</div>
		</div>
	</div>

	<div class="card bg-base-300">
		<div class="card-body overflow-x-auto">
			<ul class="flex flex-col gap-4 font-bold">
				<l1 class="text-4xl text-center -m-3">Lista de categorias</l1>
				<l1 class="divider" />
				{#each categories as category}
					<li class="flex flex-row bg-base-100 items-center shadow-sm rounded-lg p-2 pl-4">
						<span class="grow">{category.name}</span>
						<button class="btn btn-square btn-outline btn-error btn-sm" value={category.id}
							><Trash /></button
						>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
