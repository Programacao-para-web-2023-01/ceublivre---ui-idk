<script>
	// import { enhance } from "$app/forms";

	// /** @type {import("./$types").ActionData} */
	// export let form;

	let formLoading = false;

	// $: if (!form?.success) formLoading = false;
</script>

<!-- <form
	use:enhance={() => {
		return async ({ update }) => {
			await update({ reset: false });
		};
	}}
	on:submit={() => {
		formLoading = true;
	}}
	method="post"
	class="mt-4 flex flex-col items-stretch gap-8 w-full max-w-sm"
> -->
<form
	on:submit|preventDefault={() => {}}
	class="mt-4 flex flex-col items-stretch gap-8 w-full max-w-sm"
>
	<h2 class="text-3xl">Entrar</h2>
	<div class="flex flex-col gap-3">
		<label class="grid">
			Nome:
			<input
				type="text"
				name="name"
				placeholder="Insira seu nome"
				class="input input-bordered input-primary w-full mt-1 font-semibold"
			/>
		</label>
		<label class="grid">
			Função:
			<select class="select select-bordered select-primary mt-1 font-semibold">
				<option selected>Usuário</option>
				<option>Administrador</option>
			</select>
		</label>
	</div>
	<button type="submit" class={`btn btn-primary ${formLoading && "loading opacity-50"}`}>
		Continuar
	</button>
</form>
