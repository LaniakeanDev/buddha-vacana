# buddha-vacana

## Generate Sutta card data from json files

```
npx tsc -p tsconfig.scripts.json
node dist/scripts/scripts/generateSuttaCardData.js
```

1. Compiles TS code into JS for execution (only useful once or if the TS code is changed):
   npx - Runs a command from a Node.js package (either locally installed or fetches it temporarily)
   tsc - TypeScript compiler
   -p tsconfig.scripts.json - Use the specific TypeScript configuration file tsconfig.scripts.json

Uses custom configuration - Instead of the default tsconfig.json, it uses tsconfig.scripts.json which contains specific settings for scripts

The -p flag tells TypeScript to treat tsconfig.scripts.json as a project file

2. Generates the real data. Maybe only this step is useful now

# urls replaced in json sutta data

https://fr.wikipedia.org/wiki/Ja%C3%AFnisme > url_jainism
