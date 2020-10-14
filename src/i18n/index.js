import { en } from './en'
import { es } from './es'
import { fr } from './fr'
import { pt } from './pt'
import { ptBr } from './pt-br'

const defaultLocale = 'en'

const translations = {
  en: en,
  es: es,
  fr: fr,
  pt: pt,
  ptBr: ptBr
}

export const valuesI18n = {
  locale: defaultLocale,
  messages: translations,
  fallbackLocale: 'en',
}