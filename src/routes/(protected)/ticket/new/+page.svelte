<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { categories } = data;
</script>

<div class="flex flex-col gap-8 md:gap-16 p-4">
	<h2 class="text-4xl font-bold text-center justify-self-center mb-8">Criaçao de Tickets</h2>

	<div class="card bg-base-300 shadow-xl">
		<div
			class="grid grid-rows-3 grid-flow-col md:grid-rows-1 gap-x-8 gap-y-1 items-center font-bold card-body"
		>
			<div class="form-control md:row-span-3">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Escreva sua menssagem</span>
				</label>
				<textarea
					placeholder="Menssagem"
					class="textarea textarea-bordered w-full h-full md:w-96 md:h-36"
				/>
			</div>

			<div class="form-control w-full max-w-xs">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Selecione uma categoria</span>
				</label>
				<select class="select select-bordered">
					{#each categories as category}
						<option class="font-bold" value={category.id}>{category.name}</option>
					{/each}
				</select>
			</div>
			<div class="form-control w-full max-w-xs">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label class="label">
					<span class="label-text">Enviar Foto</span>
				</label>
				<input
					type="file"
					class="file-input file-input-bordered file-input-sm md:file-input w-full max-w-xs"
				/>
			</div>
		</div>
	</div>

	<div class="grid justify-items-end">
		<button type="submit" class="btn btn-neutral">Criar tickets</button>
	</div>
</div>
