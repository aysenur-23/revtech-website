import { tr } from '../../dictionaries/tr'
import { en } from '../../dictionaries/en'

export type Dictionary = typeof tr | typeof en
export type Locale = 'tr' | 'en'

const dictionaries = {
  tr,
  en,
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale]
}

export function useDictionary(locale: Locale): Dictionary {
  return getDictionary(locale)
}
