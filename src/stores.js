import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

// State
const UserStore = writable(null);
const PageStore = writable("Home");
const SleepRangeStore = writable([])
const SmokeCountStore = localStorageStore("SmokeCount", 0);
const FoodOptionsStore = localStorageStore("FoodOptions", ['Meatballs + Cranberry', 'Cornflakes + Raisins']);
const DrinkOptionsStore = localStorageStore("DrinkOptions", ['Ribena', 'Ovaltine', 'Milk']);
const MesurementOptionsStore = localStorageStore("MesurementOptions", ['Pint', 'Mug']);

// DB
const FoodStore = localStorageStore("Food", [])
const HydrationStore = localStorageStore("Hydration", [])
const SleepStore = localStorageStore("Sleep", [])
const MoodStore = localStorageStore("Mood", [])
const DigestionStore = localStorageStore("Digestion", [])
const SmokingStore = localStorageStore("Smoking", [])

export { UserStore, PageStore, SleepRangeStore, SmokeCountStore, FoodOptionsStore, DrinkOptionsStore, MesurementOptionsStore, FoodStore, HydrationStore, SleepStore, MoodStore, DigestionStore, SmokingStore };
