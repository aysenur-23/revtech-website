import { Battery, Building2, Award, Leaf } from 'lucide-react'

const stats = [
  { id: 1, name: 'Kurulu Sistem', value: '500+', icon: Battery },
  { id: 2, name: 'Mutlu Müşteri', value: '1000+', icon: Building2 },
  { id: 3, name: 'Yıllık Deneyim', value: '10+', icon: Award },
  { id: 4, name: 'Çevre Dostu', value: '100%', icon: Leaf },
]

export function Stats() {
  return (
    <div className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Revium Rakamları
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Enerji depolama sektöründe elde ettiğimiz başarılar
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.id} className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-green-200 group-hover:scale-105">
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-lg group-hover:shadow-green-500/25 transition-all duration-300">
                      <stat.icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <dt className="mt-6 text-base font-semibold leading-7 text-slate-900">
                      {stat.name}
                    </dt>
                    <dd className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      {stat.value}
                    </dd>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
