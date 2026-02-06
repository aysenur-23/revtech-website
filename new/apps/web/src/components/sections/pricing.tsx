import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Rev-1',
    price: '₺45,000',
    description: 'Ev tipi enerji depolama sistemi',
    features: [
      '5-10 kWh kapasite',
      'Lityum-iyon teknolojisi',
      'Akıllı Şarj kontrolü',
      'Mobil uygulama desteÄŸi',
      '10 yıl garanti',
    ],
    popular: false,
  },
  {
    name: 'Rev-2',
    price: '₺250,000',
    description: 'EndÃ¼striyel enerji depolama sistemi',
    features: [
      '50-500 kWh kapasite',
      'Modüler tasarım',
      'Yüksek güç çıkışı',
      'Uzaktan izleme',
      '15 yıl garanti',
    ],
    popular: true,
  },
  {
    name: 'GES Kurulumu',
    price: 'Teklif Al',
    description: 'Güneş enerjisi santrali kurulumu',
    features: [
      'Proje tasarımı',
      'Malzeme tedariki',
      'Profesyonel kurulum',
      'Sistem entegrasyonu',
      'Bakım ve onarım',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Ürünlerimiz</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Enerji Depolama Çözümlerimiz
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Farklı ihtiyaçlara yönelik enerji depolama sistemlerimiz. 
            Ev tipi Rev-1'den endüstriyel Rev-2'ye kadar geniş ürün yelpazesi.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="mr-1 h-3 w-3" />
                    En Popüler
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="mt-4">{plan.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.name === 'Başlangıç' ? 'Ücretsiz Başla' : 'Planı Seç'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
