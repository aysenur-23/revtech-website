"use client"

import { Button } from '@/components/ui/button'
import { IconWrapper } from '@/components/ui/icon-wrapper'
import { Battery, ArrowRight, CheckCircle, Leaf, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

export function About() {
  const { t, locale } = useTranslation()

  const stats = [
    {
      number: '20+',
      key: 'projects'
    },
    {
      number: '12+', 
      key: 'delivered'
    },
    {
      number: '100%',
      key: 'satisfaction'
    }
  ]

  const features = [
    {
      icon: Leaf,
      title: t('about.features.sustainable.title'),
      description: t('about.features.sustainable.description')
    },
    {
      icon: Zap,
      title: t('about.features.innovative.title'),
      description: t('about.features.innovative.description')
    },
    {
      icon: Shield,
      title: t('about.features.reliable.title'),
      description: t('about.features.reliable.description')
    }
  ]

  const achievements = [
    t('about.achievements.0'),
    t('about.achievements.1'),
    t('about.achievements.2'),
    t('about.achievements.3')
  ]

  return (
    <div className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t('about.title')}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {t('about.subtitle')}
          </p>
          <p className="mt-6 text-base text-slate-600 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-16">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {t(`about.stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-slate-50 rounded-2xl p-8 mb-16">
          <h3 className="text-xl font-semibold text-slate-900 mb-6 text-center">
            {t('about.cta.text')}
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href={`/${locale}/kurumsal`}>
              {t('about.cta.button')}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}