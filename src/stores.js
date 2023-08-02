import { writable } from 'svelte/store';

const UserStore = writable(null);
const PageStore = writable("Home");

export { UserStore, PageStore };
