# Kurumsal Web Uygulaması

Modern, kurumsal kalitede web uygulaması. Next.js 14, NestJS, PostgreSQL, Redis ve MinIO ile geliştirilmiştir.

## 🚀 Özellikler

- **Frontend**: Next.js 14 (App Router) + TypeScript + TailwindCSS + shadcn/ui
- **Backend**: NestJS + Prisma ORM + PostgreSQL
- **Cache & Queue**: Redis + BullMQ
- **Storage**: S3-compatible (MinIO)
- **Auth**: JWT + OAuth (Google, GitHub)
- **UI/UX**: Modern, responsive, dark/light mode
- **Testing**: Jest + Playwright + Lighthouse
- **CI/CD**: GitHub Actions
- **Docker**: Multi-stage builds

## 📁 Proje Yapısı

```
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # NestJS backend
├── packages/
│   ├── ui/           # Shared UI components
│   └── config/       # Shared configurations
├── docs/             # Documentation
├── .github/          # GitHub Actions
└── docker-compose.yml
```

## 🛠️ Geliştirme Ortamı

### Gereksinimler

- Node.js 18+
- pnpm 8+
- Docker & Docker Compose
- Git

### Kurulum

1. **Repository'yi klonlayın**
   ```bash
   git clone <repository-url>
   cd enterprise-web-app
   ```

2. **Dependencies'leri yükleyin**
   ```bash
   pnpm install
   ```

3. **Environment dosyalarını oluşturun**
   ```bash
   cp .env.example .env
   cp apps/web/.env.example apps/web/.env.local
   cp apps/api/.env.example apps/api/.env
   ```

4. **Docker servislerini başlatın**
   ```bash
   docker-compose up -d
   ```

5. **Veritabanını hazırlayın**
   ```bash
   pnpm db:push
   ```

6. **Uygulamaları başlatın**
   ```bash
   pnpm dev
   ```

### Erişim URL'leri

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3333
- **API Docs**: http://localhost:3333/docs
- **MinIO Console**: http://localhost:9001
- **MailHog**: http://localhost:8025

## 📝 Komutlar

### Genel Komutlar
```bash
pnpm dev              # Tüm uygulamaları geliştirme modunda başlat
pnpm build            # Tüm uygulamaları build et
pnpm test             # Tüm testleri çalıştır
pnpm lint             # Lint kontrolü
pnpm typecheck        # TypeScript kontrolü
```

### Veritabanı Komutları
```bash
pnpm db:push          # Prisma schema'yı veritabanına uygula
pnpm db:migrate       # Migration oluştur ve uygula
pnpm db:seed          # Seed verilerini yükle
pnpm db:studio        # Prisma Studio'yu aç
```

### Docker Komutları
```bash
pnpm docker:up        # Docker servislerini başlat
pnpm docker:down      # Docker servislerini durdur
pnpm docker:logs      # Docker loglarını görüntüle
```

## 🔧 Konfigürasyon

### Environment Variables

#### Frontend (.env.local)
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3333
NEXT_PUBLIC_S3_ENDPOINT=http://localhost:9000
NEXT_PUBLIC_S3_BUCKET=uploads
```

#### Backend (.env)
```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/app
JWT_SECRET=your-super-secret-jwt-key
REDIS_URL=redis://localhost:6379
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY=minio
S3_SECRET_KEY=minio123
S3_BUCKET=uploads
SMTP_HOST=localhost
SMTP_PORT=1025
```

## 🧪 Test

### Unit Tests
```bash
pnpm test
```

### E2E Tests
```bash
pnpm test:e2e
```

### Lighthouse Performance
```bash
pnpm lighthouse
```

## 🚀 Deployment

### Vercel (Frontend)
1. Vercel hesabınıza bağlayın
2. Environment variables'ları ayarlayın
3. Otomatik deploy aktif

### Railway (Backend)
1. Railway hesabınıza bağlayın
2. PostgreSQL ve Redis servislerini ekleyin
3. Environment variables'ları ayarlayın

### Docker
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## 📚 API Dokümantasyonu

API dokümantasyonu Swagger ile sağlanmaktadır:
- **Development**: http://localhost:3333/docs
- **Production**: https://your-api-domain.com/docs

## 🔐 Güvenlik

- JWT token authentication
- Password hashing (bcrypt)
- CORS configuration
- Rate limiting
- Input validation
- SQL injection protection (Prisma)
- XSS protection (Helmet)

## 🎨 UI/UX

- **Design System**: shadcn/ui
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Theme**: Dark/Light mode
- **Responsive**: Mobile-first design
- **Accessibility**: WCAG 2.1 AA compliant

## 📊 Monitoring

- **Performance**: Lighthouse CI
- **Accessibility**: Pa11y
- **Code Quality**: ESLint + Prettier
- **Type Safety**: TypeScript strict mode

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🆘 Destek

Sorularınız için:
- GitHub Issues
- Email: support@example.com
- Dokümantasyon: `/docs` klasörü

---

**Not**: Bu proje geliştirme amaçlıdır. Production kullanımı için güvenlik ayarlarını gözden geçirin.
