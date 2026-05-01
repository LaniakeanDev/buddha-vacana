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

[@v] = newline within verse
[@nl] = newline outside verse
[@m_attha|bienfait] = message
[@f_anussati#anussati-1-cl|xxx] = formula
[@misc#mn007|MN 7] = misc
[@$AN 6.63] = direct link to text (sutta / vinaya)
[@&an1|xxx] = direct link to book
[@&an1/306-319|AN 1.307] = direct link to sutta
[@$chris_016|MN 16] = christian
[@voc/kathina|article] = article

gloss

"list": ["1. [kabalikara|kabaḷīkāra]", "2. [phassa|phassa]", "3. [manosancetana|manosañcetanā]", "4. [vinnana|viññāṇa]"],

"quote": {"source": "[@$pr1]", "text": [{"pl": "‘Yo pana bhikkhu bhikkhūnaṃ sikkhā·sājīva·samāpanno sikkhaṃ apaccakkhāya dubbalyaṃ an·āvi·katvā methunaṃ dhammaṃ paṭiseveyya antamaso tiracchāna·gatāyapi, pārājiko hoti asaṃvāso’ ti.", "fr": "Si un bhikkhu participant à l'entraînement et aux moyens de subsistance des bhikkhus, sans avoir renoncé à l'entraînement, sans avoir déclaré sa faiblesse, s'engage dans l'acte sexuel, même si c'est avec une femelle animale, il mérite l'expulsion, il est banni."}]},

"quote": {"text": [{"pl": "
", "fr": "
"}, {"pl": "

{"id": "nama", "title": "nāma", "translation": "1) nom"
{"id": "namarupa", "title": "nāmarūpa", "breakdown": [[4nama|nāma]+[rupa|rūpa]],

([^"]+)
([^<]+)

to seek and eliminate:

</p><p class="dcl">
<a message="">saṅgati</a>
