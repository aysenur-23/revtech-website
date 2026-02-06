# Architecture Decision Record (ADR) - v1

## Proje Genel Bakış
Kurumsal kalitede, modern web uygulaması - sıfırdan tam stack çözüm.

## Mimari Varsayımları

### 1. Frontend Stack
- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type safety
- **TailwindCSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **lucide-react** - Icon library
- **Zustand** - Lightweight state management
- **React Query** - Server state caching
- **next-intl** - Internationalization
- **next-seo** - SEO optimization

### 2. Backend Stack
- **NestJS** - Modular Node.js framework
- **Prisma ORM** - Database toolkit
- **PostgreSQL** - Primary database
- **Zod** - Input validation
- **Passport** - Authentication (session + JWT)
- **CASL** - Role-based authorization
- **BullMQ** - Background job processing
- **Redis** - Caching & job queue
- **S3-compatible storage** (MinIO) - File storage
- **Stripe** (opsiyonel) - Payment processing

### 3. DevOps & Infrastructure
- **Docker + docker-compose** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Vercel** - Frontend hosting
- **Railway/Fly.io/Render** - Backend hosting
- **MinIO** - S3-compatible storage (development)

### 4. Kalite & Güvenlik
- **ESLint + Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Commit message linting
- **Vitest/Jest** - Unit testing
- **Playwright** - E2E testing
- **Lighthouse** - Performance testing
- **Pa11y** - Accessibility testing
- **Helmet** - Security headers
- **Rate limiting** - API protection
- **CSRF protection** - Form security
- **CORS whitelist** - Cross-origin security

## Tasarım Sistemi Varsayımları

### Renk Paleti
- **Primary**: `#16A34A` (Yeşil)
- **Accent**: `#10B981` (Açık yeşil)
- **Neutral**: `#0B122A` (Koyu mavi)
- **Dark/Light mode** desteği

### Tipografi
- **Başlık**: Inter/Manrope
- **Gövde**: System-ui

### Bileşen Seti
- Header, Footer, Section, Container
- Hero, FeatureCard, Stats, Testimonial
- Pricing, FAQ (Accordion), CTA
- Dashboard Layout (Sidebar + Topbar)
- DataTable (sortable, filterable)
- Form (shadcn + react-hook-form + zodResolver)
- Modal/Drawer/Toast

## Veri Modeli Varsayımları

### Kullanıcı Rolleri
- `ADMIN` - Tam yetki
- `STAFF` - Sınırlı yönetim yetkisi
- `USER` - Standart kullanıcı

### Temel Modeller
- **User** - Kullanıcı bilgileri
- **Account** - OAuth hesapları
- **FileObject** - Dosya yönetimi
- **Session** - Oturum yönetimi

## API Varsayımları

### Modül Yapısı
- `auth` - Kimlik doğrulama
- `users` - Kullanıcı yönetimi
- `files` - Dosya işlemleri
- `billing` - Ödeme işlemleri
- `content` - İçerik yönetimi
- `notifications` - Bildirim sistemi

### API Gateway
- **OpenAPI/Swagger** - API dokümantasyonu
- **tRPC** - Type-safe API client

## Sayfa Yapısı Varsayımları

### Public Sayfalar
- `/` - Ana sayfa (Hero + Features + Stats + CTA)
- `/about` - Hakkımızda + timeline
- `/contact` - İletişim formu
- `/products` veya `/services` - Ürün/hizmet listesi
- `/legal/privacy` - Gizlilik politikası
- `/legal/terms` - Kullanım şartları

### Protected Sayfalar
- `/dashboard` - Kullanıcı paneli (role-based)
  - Overview
  - Users (admin/staff)
  - Billing
  - Files
  - Settings

## Güvenlik Varsayımları

### Authentication
- E-posta/şifre + OAuth (Google/GitHub)
- E-posta doğrulama
- Şifre sıfırlama
- Session + refresh token rotation

### Authorization
- CASL ile role-based access control
- Politika: admin > staff > user

### Dosya Güvenliği
- S3 presigned URLs
- 10MB dosya boyutu limiti
- MIME type kontrolü

## Test Stratejisi

### Coverage Hedefi
- Minimum %80 test coverage

### Test Türleri
- **Unit Tests** - Jest/Vitest
- **E2E Tests** - Playwright
- **API Tests** - Supertest
- **Performance Tests** - Lighthouse
- **Accessibility Tests** - Pa11y

## Erişilebilirlik Varsayımları

### WCAG 2.1 AA Uyumluluğu
- Semantic HTML
- ARIA attributes
- Focus management
- Renk kontrastı ≥ 4.5:1
- Keyboard navigation

## Performans Hedefleri

### Lighthouse Skorları
- Performance ≥ 90
- Accessibility ≥ 90
- Best Practices ≥ 90
- SEO ≥ 90

### Optimizasyonlar
- Next/Image kullanımı
- Route-level code splitting
- React Query cache policies
- Bundle size optimization

## İçerik Yönetimi

### Yapılandırma Dosyası
- `content/config.json` - Site ayarları
- `legal/*.md` - Yasal belgeler (Markdown)

### Belirsiz İçerikler
- TODO etiketleri ile işaretlenecek
- Kullanıcı onayı ile doldurulacak

## Monorepo Yapısı

```
/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # NestJS backend
├── packages/
│   ├── ui/           # Shared UI components
│   └── config/       # Shared configurations
├── docs/             # Documentation
└── docker-compose.yml
```

## Geliştirme Ortamı

### Gerekli Araçlar
- Node.js 18+
- pnpm
- Docker & Docker Compose
- Git

### Çalıştırma Komutları
```bash
pnpm i                 # Dependencies install
pnpm -w dev           # Development mode
pnpm -w db:push       # Database migration
pnpm -w test          # Run tests
```

## Deployment Varsayımları

### Development
- Docker Compose ile lokal geliştirme
- MinIO S3-compatible storage
- PostgreSQL + Redis

### Production
- Vercel (Frontend)
- Railway/Fly.io/Render (Backend)
- Managed PostgreSQL
- Managed Redis
- S3-compatible storage

## Riskler ve Mitigasyonlar

### Risk 1: Karmaşık Monorepo Yapısı
- **Mitigasyon**: Net dokümantasyon ve otomatik CI/CD

### Risk 2: Performans Sorunları
- **Mitigasyon**: Lighthouse monitoring ve optimizasyon

### Risk 3: Güvenlik Açıkları
- **Mitigasyon**: Security headers, rate limiting, input validation

### Risk 4: Erişilebilirlik Sorunları
- **Mitigasyon**: Pa11y testing ve WCAG uyumluluğu

## Onay Gereksinimleri

Bu ADR'de belirtilen tüm varsayımlar kullanıcı onayı gerektirir. Herhangi bir değişiklik yapılmadan önce kullanıcıdan "ONAY: ADR-v1" onayı alınmalıdır.

---

**Sonraki Adım**: Kullanıcı onayı alındıktan sonra monorepo yapısı oluşturulacak ve geliştirme süreci başlayacaktır.
