import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

// State
const PageStore = writable("Home");
const SleepRangeStore = writable([])
const UserStore = localStorageStore(null);
const SmokeCountStore = localStorageStore("SmokeCount", 0);
const FoodOptionsStore = localStorageStore("FoodOptions", ['Meatballs + Cranberry', 'Cornflakes + Raisins']);
const DrinkOptionsStore = localStorageStore("DrinkOptions", ['Ribena', 'Ovaltine', 'Milk']);
const MesurementOptionsStore = localStorageStore("MesurementOptions", ['Pint', 'Mug']);


export { UserStore, PageStore, SleepRangeStore, SmokeCountStore, FoodOptionsStore, DrinkOptionsStore, MesurementOptionsStore };
