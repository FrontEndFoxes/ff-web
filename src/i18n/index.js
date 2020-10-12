import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { pt } from './pt'

const defaultLocale = 'en'

const translations = {
  en: en,
  es: es,
  fr: fr,
  pt: pt,
}

export const valuesI18n = {
  locale: defaultLocale,
  messages: translations,
  fallbackLocale: 'en',
}