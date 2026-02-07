# Hostinger’a Statik Site Yükleme

Bu proje Node.js olmayan paylaşımlı hosting (Hostinger) için **statik export** ile derlenir. Localhost’taki site bire bir aynı şekilde statik HTML/CSS/JS olarak üretilir.

## 1. public_html Klasörünü Oluşturma

Tek komut (build + public_html):

```bash
cd apps/web
pnpm run deploy:hostinger
```

Bu komut:
- `pnpm run build` ile Next.js **static export** yapar (`output: 'export'`).
- `out/` çıktısını `public_html/` klasörüne kopyalar.
- Kök `/` için `index.html` (otomatik `/tr/` yönlendirmesi) ekler.
- Hostinger uyumlu `.htaccess` (UTF-8, önbellek, sıkıştırma, güvenlik) yazar.

## 2. public_html İçeriği

- **tr/** – Türkçe sayfalar
- **en/** – İngilizce sayfalar  
- **ar/** – Arapça sayfalar
- **_next/** – JS/CSS chunk’ları
- **images/**, **videos/** – Medya (public’ten kopyalanır)
- **index.html** – Site kökü; ziyaretçiyi `/tr/` sayfasına yönlendirir
- **.htaccess** – Apache ayarları

## 3. Hostinger’a Yükleme

1. Hostinger dosya yöneticisi veya FTP ile sunucudaki **public_html** klasörüne girin.
2. Mevcut içeriği yedekleyin (isterseniz).
3. Bilgisayarınızdaki `apps/web/public_html` **içindeki tüm dosya ve klasörleri** sunucudaki `public_html` içine kopyalayın (üzerine yazın).
4. Kök adres (`https://siteniz.com/`) açıldığında otomatik olarak `https://siteniz.com/tr/` açılır.

## 4. ZIP ile Yükleme (Opsiyonel)

Sunucuya tek dosya yükleyip açmak için:

```bash
cd apps/web
pnpm run prepare-public-html -- --zip
```

`deploy/public_html.zip` oluşur. Hostinger’da bu zip’i yükleyip `public_html` içinde açabilirsiniz.

## 5. Önemli Notlar

- **Node.js yok:** Sunucuda Node çalışmaz; her şey önceden üretilmiş statik dosyadır.
- **Formlar:** İletişim ve teklif formları gönderimde **Firebase** kullanır (tarayıcıdan). Firebase ayarlarınız (`.env` içindeki `NEXT_PUBLIC_FIREBASE_*`) build sırasında bundle’a gömülür; Hostinger’da ekstra bir şey yapmanız gerekmez.
- **API route’lar:** `/api/send-email` gibi sunucu route’ları statik host’ta **çalışmaz**. Formlar Firebase ile çalışıyorsa sorun olmaz.
- **Dil:** Adresler ` /tr/`, `/en/`, `/ar/` ile başlar; `.htaccess` bu yapıyı bozmaz.

## 6. Yeniden Yayına Alma

Siteyi güncelledikten sonra tekrar yayına almak için:

```bash
pnpm run deploy:hostinger
```

Ardından `public_html` içeriğini (veya `deploy/public_html.zip`’i) Hostinger’a yeniden yükleyin.
