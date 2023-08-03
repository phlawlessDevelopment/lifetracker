import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

const UserStore = writable(null);
const PageStore = writable("Home");
const SleepStore = localStorageStore("Sleep", [+new Date().getTime(), +(new Date().getTime() + 8 * 60 * 60 * 1000)])

export { UserStore, PageStore, SleepStore };
