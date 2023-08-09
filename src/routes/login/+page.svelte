<script>
	import { UserStore } from '../../stores';

	let username;
	let password;

	// 'https://phlawless.eu.pythonanywhere.com/get-token'
	// 'http://localhost:8000/get-token'

	async function handleSubmit() {
		const response = await fetch('http://localhost:8000/get-token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password })
		});
		const data = await response.json();
		if (data.token) {
			UserStore.set(data.token);
		}
	}
</script>

<div
	class="card variant-glass-tertiary flex flex-col gap-2 p-[20%] md:grid md:grid-cols-2 md:gap-4"
>
	<label class="label">
		<span>Username</span>
		<input class="input" bind:value={username} type="text" placeholder="..." />
	</label>
	<label class="label">
		<span>Password</span>
		<input class="input" bind:value={password} type="password" placeholder="*******" />
	</label>
	<button class="btn variant-filled-warning col-span-2" on:click={handleSubmit}> Log in</button>
</div>
