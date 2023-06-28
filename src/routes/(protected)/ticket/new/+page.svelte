<script>
	/** @type {import("./$types").PageData} */
	export let data;
	const { categories } = data;
</script>

<form method="post" enctype="multipart/form-data">
	<div class="flex flex-col gap-6 md:gap-12 p-4">
		<h2 class="text-4xl font-bold text-center justify-self-center mb-4">Criação de Ticket</h2>

		<div class="card bg-base-300 shadow-xl">
			<div
				class="grid grid-rows-3 grid-flow-col md:grid-rows-1 gap-x-8 gap-y-1 items-center font-bold card-body"
			>
				<div class="form-control md:row-span-3">
					<span class="label label-text">Descrição do ticket</span>
					<textarea
						name="message"
						placeholder="Mensagem"
						class="textarea textarea-bordered w-full h-full md:w-96 md:h-36"
					/>
				</div>

				<div class="form-control w-full max-w-xs">
					<span class="label label-text">Selecione uma categoria</span>
					<select class="select select-bordered" name="categoryId">
						{#each categories as category}
							<option class="font-bold" value={category.id}>{category.name}</option>
						{/each}
					</select>
				</div>
				<div class="form-control w-full max-w-xs">
					<span class="label label-text">Enviar imagem</span>
					<input
						name="image"
						type="file"
						class="file-input file-input-primary file-input-bordered w-full max-w-xs"
						accept="image/jpeg,image/png"
					/>
				</div>
			</div>
		</div>

		<div class="grid justify-items-end">
			<button type="submit" class="btn btn-primary">Criar ticket</button>
		</div>
	</div>
</form>
