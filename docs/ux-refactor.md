# UI/UX Refactor Documentation

## Overview
Bu dokümantasyon, Revium Tech web sitesinin UI/UX iyileştirmelerini detaylandırır. Tüm değişiklikler minimal, güvenli ve non-breaking olacak şekilde tasarlanmıştır.

## Değişiklikler

### 1. Design System Tokenları (`ui.config.ts`)
- **Yeni dosya**: `apps/web/src/lib/ui.config.ts`
- **Amaç**: Tutarlı tasarım sistemi oluşturmak
- **İçerik**:
  - Typography scale (h1-h4, body, caption)
  - Spacing system (section, inner, card)
  - Layout tokens (container, grid)
  - Surface styles (card, button, input)
  - Color palette (primary: sky-500/600)
  - Aspect ratios ve animation helpers

### 2. Shared Component İyileştirmeleri

#### Card Component (`components/ui/card.tsx`)
- **Değişiklik**: Design system tokenları entegrasyonu
- **Yeni özellik**: `variant` prop (default/compact)
- **İyileştirmeler**:
  - Tutarlı padding ve border radius
  - Hover effects
  - Typography tokenları kullanımı

#### Button Component (`components/ui/button.tsx`)
- **Değişiklik**: Color scheme güncellemesi
- **İyileştirmeler**:
  - Sky-500/600 primary colors
  - Focus states iyileştirmesi
  - Design system tokenları entegrasyonu

#### Input Component (`components/ui/input.tsx`)
- **Değişiklik**: Styling güncellemesi
- **İyileştirmeler**:
  - Slate color scheme
  - Focus states
  - Design system tokenları

### 3. Yeni UI Bileşenleri

#### FloatingInput (`components/ui/floating-input.tsx`)
- **Yeni dosya**: Modern floating label input
- **Özellikler**:
  - Animated floating labels
  - Error states
  - Helper text support
  - Accessibility improvements

#### FloatingTextarea (`components/ui/floating-textarea.tsx`)
- **Yeni dosya**: Floating label textarea
- **Özellikler**:
  - Consistent with FloatingInput
  - Auto-resize prevention
  - Error handling

#### Skeleton (`components/ui/skeleton.tsx`)
- **Yeni dosya**: Loading state component
- **Özellikler**:
  - Animated pulse effect
  - Flexible sizing

#### EmptyState (`components/ui/empty-state.tsx`)
- **Yeni dosya**: Empty state component
- **Özellikler**:
  - Icon support
  - Action button
  - Consistent styling

### 4. Sayfa İyileştirmeleri

#### Ürünler Sayfası (`app/urunlerimiz/page.tsx`)
- **Typography**: Design system tokenları kullanımı
- **Spacing**: Consistent section spacing
- **Grid**: Responsive grid system
- **Colors**: Sky/emerald color scheme
- **Cards**: Unified card structure

#### İletişim Sayfası (`app/iletisim/page.tsx`)
- **Form**: FloatingInput ve FloatingTextarea kullanımı
- **Typography**: Design system tokenları
- **Spacing**: Consistent layout
- **Colors**: Updated color scheme

#### Header (`components/layout/header.tsx`)
- **Sticky Header**: Sticky positioning
- **Colors**: Light/dark theme support
- **Mobile Menu**: Improved mobile experience
- **Accessibility**: Better focus states
- **Typography**: Design system tokenları

### 5. Responsive Grid System
- **Standard Grid**: `grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6`
- **Container**: `container mx-auto px-4 sm:px-6 lg:px-8`
- **Variants**: Compact (240px), Large (320px)

### 6. Typography System
- **H1**: `text-3xl sm:text-4xl font-semibold tracking-tight`
- **H2**: `text-2xl font-semibold`
- **H3**: `text-xl font-semibold`
- **H4**: `text-lg font-semibold`
- **Body**: `text-base leading-7`
- **Body Small**: `text-sm leading-6`
- **Caption**: `text-xs leading-5`

### 7. Color Palette
- **Primary**: Sky-500/600
- **Text**: Slate-900
- **Background**: Slate-50
- **Muted**: Slate-600
- **Success**: Emerald-500/600
- **Error**: Red-500/600

### 8. Accessibility Improvements
- **Focus States**: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500`
- **ARIA Labels**: Icon-only buttons için aria-label
- **Keyboard Navigation**: Tüm interactive elementler keyboard accessible
- **Color Contrast**: WCAG uyumlu renk kontrastları

### 9. Performance Optimizations
- **Fonts**: next/font kullanımı (zaten mevcut)
- **Images**: next/image kullanımı (mevcut)
- **CSS**: Utility-first approach
- **Bundle Size**: Minimal component additions

## Korunan Özellikler
- ✅ Tüm routing yapısı
- ✅ Form validation logic
- ✅ Business logic
- ✅ Data shapes
- ✅ API calls
- ✅ State management
- ✅ Dark mode support
- ✅ Mobile responsiveness

## Breaking Changes
- ❌ Hiçbir breaking change yok
- ✅ Tüm mevcut functionality korundu
- ✅ Backward compatibility sağlandı

## Test Edilmesi Gerekenler
1. **Forms**: FloatingInput/Textarea functionality
2. **Navigation**: Header sticky behavior
3. **Responsive**: Mobile/tablet/desktop layouts
4. **Dark Mode**: Theme switching
5. **Accessibility**: Keyboard navigation
6. **Performance**: Page load times

## Sonuç
Bu refactor, modern UI/UX standartlarına uygun, tutarlı ve erişilebilir bir tasarım sistemi oluştururken mevcut functionality'yi korumuştur. Tüm değişiklikler minimal ve güvenli şekilde uygulanmıştır.
