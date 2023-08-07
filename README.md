# LifeTracker

This simple toool can be used to track your daily habits (food, hydration, sleep, mood, digestion, smoking)

## Pages

### General
All pages include a general notes input box and an editable date/time stamp.

### Food
Dropdown of previous meals, with option to add a new meal.

### Hydration
Dropdown of previous drinks, with option to add a new drink, nested dropdown of mesurements (eg, pint, mug).

### Sleep
List of range sliders (2 handles), button to add a new slider.

### Mood
Multi select icon buttons for how your mood was that day.

### Digestion
Multi select icon buttons for various digestion problems, vomiting, diarrhoea, etc.

### Smoking
Counter componennt to count number of times you smoked, number input for weight.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
