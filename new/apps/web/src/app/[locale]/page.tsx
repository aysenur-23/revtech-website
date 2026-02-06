import { HomeSections } from '@/components/sections/home-sections'

export default function LocaleHomePage({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params
  return <HomeSections locale={locale} />
}