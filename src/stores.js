import { writable } from 'svelte/store';
import { localStorageStore } from '@skeletonlabs/skeleton';

const UserStore = writable(null);
const PageStore = writable("Home");

const FoodStore = localStorageStore("Food", [])
const HydrationStore = localStorageStore("Hydration", [])
const SleepStore = localStorageStore("Sleep", [])
const MoodStore = localStorageStore("Mood", [])
const DigestionStore = localStorageStore("Digestion", [])
const SmokingStore = localStorageStore("Smoking", [])

export { UserStore, PageStore, FoodStore, HydrationStore, SleepStore, MoodStore, DigestionStore, SmokingStore };
