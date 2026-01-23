import { Injectable } from '@nestjs/common';

@Injectable()
export class ContentService {
  getConfig() {
    return {
      site: {
        name: 'Kurumsal Web Uygulaması',
        tagline: 'Modern, güvenli ve ölçeklenebilir web çözümleri',
        logo: '/logo.svg',
        socials: {
          twitter: '#',
          github: '#',
          linkedin: '#',
        },
        contact: {
          email: 'info@example.com',
          phone: '+90 212 555 0123',
          address: 'İstanbul, Türkiye',
        },
      },
      nav: {
        primary: [
          { name: 'Ana Sayfa', href: '/' },
          { name: 'Hakkımızda', href: '/about' },
          { name: 'Hizmetler', href: '/services' },
          { name: 'İletişim', href: '/contact' },
        ],
        footer: [
          { name: 'Gizlilik Politikası', href: '/legal/privacy' },
          { name: 'Kullanım Şartları', href: '/legal/terms' },
        ],
      },
      home: {
        hero: {
          title: 'Modern Web Uygulaması',
          subtitle: 'Kurumsal kalitede, modern teknolojilerle geliştirilmiş web uygulaması. Kullanıcı deneyimini ön planda tutan, güvenli ve ölçeklenebilir çözümler.',
          ctas: [
            { text: 'Başlayın', href: '/dashboard', primary: true },
            { text: 'Demo İzle', href: '#', primary: false },
          ],
        },
        features: [
          {
            name: 'Güvenlik',
            description: 'Endüstri standardı güvenlik protokolleri ile verilerinizi koruyoruz.',
            icon: 'Shield',
          },
          {
            name: 'Hızlı Performans',
            description: 'Optimize edilmiş kod ve modern teknolojilerle yüksek performans.',
            icon: 'Zap',
          },
          {
            name: 'Kullanıcı Dostu',
            description: 'Sezgisel arayüz ve kolay kullanım deneyimi.',
            icon: 'Users',
          },
        ],
        stats: [
          { name: 'Aktif Kullanıcı', value: '10,000+' },
          { name: 'Kurumsal Müşteri', value: '500+' },
          { name: 'Başarı Oranı', value: '99.9%' },
          { name: 'Ortalama Yanıt Süresi', value: '< 100ms' },
        ],
        testimonials: [
          {
            body: 'Bu uygulama sayesinde iş süreçlerimizi çok daha verimli hale getirdik. Kullanıcı arayüzü çok sezgisel ve hızlı.',
            author: {
              name: 'Ahmet Yılmaz',
              company: 'TechCorp',
            },
          },
          {
            body: 'Güvenlik ve performans konularında gerçekten beklentilerimizi aştı. Kesinlikle tavsiye ederim.',
            author: {
              name: 'Fatma Demir',
              company: 'InnovateLabs',
            },
          },
        ],
        cta: {
          title: 'Hemen başlayın',
          subtitle: 'Modern web uygulaması ile işinizi bir üst seviyeye taşıyın. Ücretsiz deneme sürümümüzle hemen başlayabilirsiniz.',
          ctas: [
            { text: 'Ücretsiz Başlayın', href: '/dashboard', primary: true },
            { text: 'İletişime Geçin', href: '/contact', primary: false },
          ],
        },
      },
    };
  }
}
