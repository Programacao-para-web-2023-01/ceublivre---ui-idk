<form method="post" class="mt-4 flex flex-col items-stretch gap-8 w-full max-w-sm">
	<h2 class="text-3xl">Entrar</h2>
	<div class="flex flex-col gap-3">
		<label class="grid">
			E-mail:
			<input
				type="email"
				name="email"
				placeholder="email@exemplo.com"
				required
				class="input input-bordered input-primary w-full mt-1 font-semibold"
			/>
		</label>
		<label class="grid">
			Função:
			<select name="role" required class="select select-bordered select-primary mt-1 font-semibold">
				<option value="user" selected>Usuário</option>
				<option value="admin">Administrador</option>
			</select>
		</label>
	</div>
	<button type="submit" class="btn btn-primary"> Continuar </button>
</form>
