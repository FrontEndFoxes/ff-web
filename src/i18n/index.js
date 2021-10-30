import { de } from './de'
import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { pt } from './pt'
import { pt_br } from './pt_br'

const defaultLocale = 'en'

const translations = {
  de: de,
  en: en,
  es: es,
  fr: fr,
  pt: pt,
  pt_br: pt_br
}

export const valuesI18n = {
  locale: defaultLocale,
  messages: translations,
  fallbackLocale: 'en',
}