@@ -0,0 +1,48 @@
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
					<option class="font-bold">Star Wars</option>
					<option class="font-bold">Harry Potter</option>
					<option class="font-bold">Lord of the Rings</option>
					<option class="font-bold">Planet of the Apes</option>
					<option class="font-bold">Star Trek</option>
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
