/**
 * UI Design System Configuration
 * Centralized tokens for consistent design across the application
 */

import { cn } from './utils'

export const ui = {
  // Typography
  typography: {
    h1: 'text-3xl sm:text-4xl font-semibold tracking-tight',
    h2: 'text-2xl font-semibold',
    h3: 'text-xl font-semibold',
    h4: 'text-lg font-semibold',
    body: 'text-base leading-7',
    bodySmall: 'text-sm leading-6',
    caption: 'text-xs leading-5',
  },

  // Spacing
  spacing: {
    section: 'py-12',
    sectionLarge: 'py-16 sm:py-20',
    inner: 'space-y-8',
    card: 'p-6',
    cardCompact: 'p-4',
  },

  // Layout
  layout: {
    container: 'container mx-auto px-4 sm:px-6 lg:px-8',
    grid: 'grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6',
    gridCompact: 'grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4',
    gridLarge: 'grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8',
  },

  // Radii & Shadows
  surface: {
    card: 'rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-200 border-4 border-emerald-500',
    cardCompact: 'rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200',
    button: 'rounded-lg',
    input: 'rounded-lg',
    badge: 'rounded-full',
  },

  // Colors
  colors: {
    primary: 'bg-sky-500 hover:bg-sky-600 text-white',
    primaryOutline: 'border-sky-500 text-sky-600 hover:bg-sky-50',
    secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900',
    muted: 'bg-slate-50 text-slate-600',
    accent: 'bg-emerald-500 hover:bg-emerald-600 text-white',
  },

  // Image aspect ratios
  aspect: {
    square: 'aspect-square',
    video: 'aspect-video',
    card: 'aspect-[4/3]',
    hero: 'aspect-[16/9]',
  },

  // Animation
  animation: {
    fadeIn: 'animate-in fade-in duration-300',
    slideUp: 'animate-in slide-in-from-bottom-4 duration-300',
    scale: 'hover:scale-105 transition-transform duration-200',
  },

  // Focus states
  focus: {
    visible: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
    input: 'focus:ring-2 focus:ring-sky-500 focus:border-sky-500',
  },
} as const

// Helper functions
export { cn }

export const getCardClasses = (variant: 'default' | 'compact' = 'default') => {
  return cn(
    'bg-white border border-slate-200',
    variant === 'compact' ? ui.surface.cardCompact : ui.surface.card
  )
}

export const getButtonClasses = (variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary') => {
  const base = 'inline-flex items-center justify-center px-4 py-2 text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none'
  
  switch (variant) {
    case 'primary':
      return cn(base, ui.colors.primary, ui.surface.button)
    case 'secondary':
      return cn(base, ui.colors.secondary, ui.surface.button)
    case 'outline':
      return cn(base, ui.colors.primaryOutline, 'border', ui.surface.button)
    case 'ghost':
      return cn(base, 'hover:bg-slate-100', ui.surface.button)
    default:
      return cn(base, ui.colors.primary, ui.surface.button)
  }
}
