import { Card, CardContent } from '@/components/ui/shadcn-card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    body: 'Revium\'in Rev-1 sistemi sayesinde evimizde elektrik kesintilerinde hiç sorun yaşamıyoruz. Sistem çok güvenilir ve verimli.',
    author: {
      name: 'Ahmet Yılmaz',
      handle: 'ahmetyilmaz',
      company: 'Ev Sahibi',
    },
  },
  {
    body: 'Endüstriyel tesisimizde Rev-2 sistemi kullanıyoruz. Enerji maliyetlerimizi %40 azalttık. Kesinlikle tavsiye ederim.',
    author: {
      name: 'Fatma Demir',
      handle: 'fatmademir',
      company: 'Demir Çelik A.Ş.',
    },
  },
  {
    body: 'GES kurulum hizmetleri harika, her aşamada yanımızda oldular. Teknik altyapı çok sağlam ve profesyonel.',
    author: {
      name: 'Mehmet Kaya',
      handle: 'mehmetkaya',
      company: 'Güneş Enerjisi Ltd.',
    },
  },
]

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary">
            Müşteri Yorumları
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Revium Müşterileri
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial, testimonialIdx) => (
              <div key={testimonialIdx} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <figure className="flex flex-col justify-between h-full">
                      <blockquote className="text-muted-foreground">
                        <p>"{testimonial.body}"</p>
                      </blockquote>
                      <figcaption className="mt-4 flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-sm font-medium text-primary">
                            {testimonial.author.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-foreground">
                            {testimonial.author.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {testimonial.author.company}
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
