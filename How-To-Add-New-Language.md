# How to add new Language?

if you want to add new language, you should add some new folders and files in two places: 

- `src/i18n`: Translations to web components or pages (or static data)
- `src/assets/data`: Translations to data (or dynamic information)

Also, please, you should add a new option to language dropdown in `Header.vue`.

## A. Translations to web components or pages

1. Create a folder in `src/i18n/<xy>`. Where `xy` is the
[ISO 3166-1-alpha-2 code](https://www.iso.org/obp/ui/#search/code/)
of a country. Also `xy` is your **new language** that you'd like to add to application. And it's necessary if you want to use 'flag-icon-css'.
2. Inside the folder `src/i18n/<xy>`: Create a JSON file by page `xy-name_page.json`

```json
{
    "wordFirst": "Traslation #1 in XY language",
    "wordSecond": "Traslation #2 in XY language",
    "wordThird": "Traslation #3 in XY language",
    "multipleValues": {
        "valueOne": "Traslation #4.1 in XY language",
        "valueTwo": "Traslation #4.2 in XY language",
    },
    "errors": {
        "errorOne": "Traslation #4.1 in XY language",
        "errorTwo": "Traslation #4.2 in XY language",
    }
}
```

3. Create a main file (`index.js`) for this translation `src/i18n/<xy>/index.js`

```javascript
import name_page from './xy-name_page.json'

export const en = {
  name_page,
}
```

4. Update I18n main file


```javascript
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { pt } from './pt'
// Our New Language
import { xy } from './xy'

const defaultLocale = 'en'

const translations = {
  en: en,
  es: es,
  fr: fr,
  pt: pt,
  xy: xy  // <-- add translations to web components in a new language
}

export const valuesI18n = {
  locale: defaultLocale,
  messages: translations,
  fallbackLocale: 'en',
}
```

## B. Translations to data

1. Create a folder in `src/assets/data/name_page`
2. Inside the folder `src/assets/data/name_page`: Create a JSON file by page `xy-name_page.json` with an objects array. 

```json
[
	{
		"id": 1,
		"name": "Jen"
    },
    {
		"id": 2,
		"name": "Michele"
    },
]
```

3. Update the main file (`index.js`) for this translation `src/assets/data/name_page/index.js`

```javascript
import en from './en-name_page.json'
import es from './es-name_page.json'
import fr from './fr-name_page.json'
import pt from './pt-name_page.json'
// Add our new language 'xy'
import xy from './xy-name_page.json'


const ffEventsGalleries = {
    en,
    es,
    fr,
    pt,
    xy, // <-- add translations to data in a new language
}

export default ffEventsGalleries;
```

## C. Update `Header.vue`

After create the translations, we need add new options in the language dropdown.

```javascript
<script>
import "flag-icon-css/css/flag-icon.css";

export default {
   // ...
  computed: {
    currentLanguageObj() {
      const currentLocal = this.$i18n.locale;
      const currentLanguage = `header.languages.${currentLocal}`;
      let currentFlagIcon = "flag-icon-us";

      switch (currentLocal) {
        case "en":
          currentFlagIcon = "flag-icon-us";
          break;

        // ...more code
        // new language 'xy' with icon from 'flag-icon-css'
        case "xy":
          currentFlagIcon = "flag-icon-xy";
          break;
      }

      return {
        label: currentLocal,
        flagIcon: currentFlagIcon,
        language: this.$t(currentLanguage),
      };
    },
    languages() {
      return [
        {
          label: "en",
          flagIcon: "flag-icon-us",
          language: this.$t("header.languages.en"),
        },
        // ... more code 
        // new language 'xy'
        {
          label: "xy",
          flagIcon: "flag-icon-xy",
          language: this.$t("header.languages.xy"),
        }
      ];
    },
  },
  // ...
};
</script>
```

## Result

```
src
|___ components/
       |___ Header.vue        // <-- Add new options to language drowndown
|___ assets/
       |____ data/
                 |____ sponsors
                 |____ events-gallery
                 |____ staff
                 |____ name_page
                        |________ en-name_page.json
                        |________ es-name_page.json
                        |________ fr-name_page.json
                        |________ pt-name_page.json
                        |________ xy-name_page.json    // <-- add a new language
                        |________ index.js
                 |____ ...
|___ i18n/
       |____ en/
                 |____ en-header.json
                 |____ en-home.json
                 |____ en-footer.json
                 |____ ...
                 |____ index.js
       |____ es/
                 |____ es-header.json
                 |____ es-home.json
                 |____ es-footer.json
                 |____ ...
                 |____ index.js
       |____ xy/                                      // <-- new language
                 |____ xy-header.json
                 |____ xy-home.json
                 |____ xy-footer.json
                 |____ ...
                 |____ index.js
       |____ ...
       |____ index.js
```


***Happy coding! Thanks for your help! We'll really appreciate your help!*** 😄