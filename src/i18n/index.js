import { en } from './en'
import { es } from './es'

const defaultLocale = 'en'

const translations = {
  en: en,
  es: es,
}

export const valuesI18n = {
  locale: defaultLocale,
  messages: translations,
  fallbackLocale: 'en',
}