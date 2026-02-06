# Development Server Kurulumu

## Sorun
Localhost'ta görseller gözükmüyor ve development server başlamıyor.

## Çözüm

### 1. Development için Next.js Yapılandırması
`next.config.js` dosyasında development için gerekli ayarlar yapıldı:

```javascript
// Development için kapalı
// output: 'export',
// assetPrefix: '',
// basePath: '',
```

### 2. Development Server Başlatma

#### Yöntem 1: Normal npm script
```bash
npm run dev
```

#### Yöntem 2: Özel script
```bash
npm run dev:start
```

#### Yöntem 3: Manuel
```bash
npx next dev -p 3002
```

### 3. Test Edilecek URL'ler

- Ana sayfa: `http://localhost:3002/`
- TR sayfası: `http://localhost:3002/tr/`
- Görseller: `http://localhost:3002/images/logo.png`

### 4. Sorun Giderme

#### Server başlamıyorsa:
1. Port 3002'nin kullanımda olup olmadığını kontrol et
2. `netstat -ano | findstr :3002`
3. Gerekirse farklı port kullan: `npx next dev -p 3003`

#### Görseller gözükmüyorsa:
1. `public/images/` klasörünün varlığını kontrol et
2. Browser'da Network tab'ında 404 hatalarını kontrol et
3. Görsel yollarının doğru olduğunu kontrol et

### 5. Production Build için

Production build yapmadan önce `next.config.js` dosyasında:
```javascript
output: 'export', // Aç
assetPrefix: '', // Aç
basePath: '', // Aç
```

## Notlar

- Development'ta `output: 'export'` kapalı olmalı
- Production'da `output: 'export'` açık olmalı
- Asset yolları development'ta otomatik olarak düzgün çalışır
