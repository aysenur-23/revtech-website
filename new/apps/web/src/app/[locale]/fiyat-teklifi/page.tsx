'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Calculator, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import { sendQuoteEmail, QuoteFormData } from '@/lib/emailjs'

const productTypes = [
  'Taşınabilir Güç Paketleri',
  'Araç Tipi Güç Paketleri',
  'Kabin Tipi Güç Paketleri',
  'Solar Batarya Paketleri',
  'Endüstriyel Sistemler',
  'Özel Çözüm',
  'Diğer'
]

const powerRanges = [
  '0-5 kW',
  '5-20 kW',
  '20-50 kW',
  '50-100 kW',
  '100+ kW',
  'Diğer'
]

const applications = [
  'Ev Kullanımı',
  'Ticari Kullanım',
  'Endüstriyel Kullanım',
  'Araç Uygulamaları',
  'Off-Grid Sistemler',
  'Acil Durum Sistemleri',
  'Diğer'
]

const budgetRanges = [
  '₺0 - ₺50.000',
  '₺50.000 - ₺100.000',
  '₺100.000 - ₺250.000',
  '₺250.000+',
  'Diğer'
]

export default function FiyatTeklifiPage() {
  const [selectedProduct, setSelectedProduct] = useState('')
  const [selectedPower, setSelectedPower] = useState('')
  const [selectedApplication, setSelectedApplication] = useState('')
  const [selectedBudget, setSelectedBudget] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Form verilerini topla
      const formData = new FormData(e.target as HTMLFormElement)
      const data: QuoteFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        company: formData.get('company') as string,
        product: formData.get('product') as string,
        power: formData.get('power') as string,
        application: formData.get('application') as string,
        budget: formData.get('budget') as string,
        requirements: formData.get('requirements') as string,
        installationDate: formData.get('installationDate') as string,
        message: formData.get('message') as string
      }

      // EmailJS ile mail gönder
      const success = await sendQuoteEmail(data)
      
      if (success) {
        setSubmitStatus('success')
        // Formu temizle
        ;(e.target as HTMLFormElement).reset()
        setSelectedProduct('')
        setSelectedPower('')
        setSelectedApplication('')
        setSelectedBudget('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form gönderme hatası:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800">
        <div className="container-app">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl sm:rounded-2xl blur-lg opacity-75 animate-pulse" />
                <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-teal-500 shadow-2xl">
                  <Calculator className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Fiyat Teklifi Talep Edin
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-3xl mx-auto px-4">
              Enerji ihtiyaçlarınıza uygun çözüm için detaylı fiyat teklifi alın. 
              Uzman ekibimiz size en uygun seçenekleri sunacak.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="card p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 mb-6 sm:mb-8 text-center">Teklif Formu</h2>
              
              <form 
                className="space-y-6 sm:space-y-8"
                onSubmit={handleSubmit}
              >
                {/* Personal Information */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-3 sm:mb-4">Kişisel Bilgiler</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-neutral-700 mb-2">Ad Soyad *</label>
                      <Input name="name" placeholder="Adınız ve soyadınız" required className="h-12 sm:h-14 text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-neutral-700 mb-2">E-posta *</label>
                      <Input name="email" type="email" placeholder="ornek@email.com" required className="h-12 sm:h-14 text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-neutral-700 mb-2">Telefon *</label>
                      <Input name="phone" placeholder="+90 5XX XXX XX XX" required className="h-12 sm:h-14 text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-neutral-700 mb-2">Şirket</label>
                      <Input name="company" placeholder="Şirket adı (opsiyonel)" className="h-12 sm:h-14 text-sm sm:text-base" />
                    </div>
                  </div>
                </div>

                {/* Project Information */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-3 sm:mb-4">Proje Bilgileri</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                        Ürün Kategorisi <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="product"
                        className="w-full h-12 sm:h-14 px-3 sm:px-4 text-sm sm:text-base border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={selectedProduct}
                        onChange={(e) => setSelectedProduct(e.target.value)}
                        required
                      >
                        <option value="">Seçiniz</option>
                        {productTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                      {selectedProduct === 'Diğer' && (
                        <Input 
                          placeholder="Lütfen ürün kategorisini belirtiniz"
                          className="mt-2 h-12 sm:h-14 text-sm sm:text-base"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                        Güç İhtiyacı <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="power"
                        className="w-full h-12 sm:h-14 px-3 sm:px-4 text-sm sm:text-base border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={selectedPower}
                        onChange={(e) => setSelectedPower(e.target.value)}
                        required
                      >
                        <option value="">Seçiniz</option>
                        {powerRanges.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                      {selectedPower === 'Diğer' && (
                        <Input 
                          placeholder="Lütfen güç ihtiyacınızı belirtiniz (örn: 150 kW)"
                          className="mt-2 h-12 sm:h-14 text-sm sm:text-base"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                        Kullanım Alanı <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="application"
                        className="w-full h-12 sm:h-14 px-3 sm:px-4 text-sm sm:text-base border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={selectedApplication}
                        onChange={(e) => setSelectedApplication(e.target.value)}
                        required
                      >
                        <option value="">Seçiniz</option>
                        {applications.map((app) => (
                          <option key={app} value={app}>{app}</option>
                        ))}
                      </select>
                      {selectedApplication === 'Diğer' && (
                        <Input 
                          placeholder="Lütfen kullanım alanınızı belirtiniz"
                          className="mt-2 h-12 sm:h-14 text-sm sm:text-base"
                        />
                      )}
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-neutral-700 mb-2">
                        Bütçe Aralığı
                      </label>
                      <select 
                        name="budget"
                        className="w-full h-12 sm:h-14 px-3 sm:px-4 text-sm sm:text-base border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        value={selectedBudget}
                        onChange={(e) => setSelectedBudget(e.target.value)}
                      >
                        <option value="">Seçiniz</option>
                        {budgetRanges.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                      {selectedBudget === 'Diğer' && (
                        <Input 
                          placeholder="Lütfen bütçe aralığınızı belirtiniz (örn: ₺500.000+)"
                          className="mt-2 h-12 sm:h-14 text-sm sm:text-base"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Technical Requirements */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-3 sm:mb-4">Teknik Gereksinimler</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-neutral-700 mb-2">Özel Gereksinimler</label>
                      <textarea 
                        name="requirements"
                        className="w-full px-3 py-2 text-sm sm:text-base border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows={3}
                        placeholder="Projeniz için özel gereksinimlerinizi belirtin..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-neutral-700 mb-2">Kurulum Tarihi</label>
                      <Input name="installationDate" type="date" className="h-12 sm:h-14 text-sm sm:text-base" />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-3 sm:mb-4">Ek Bilgiler</h3>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-neutral-700 mb-2">Mesaj</label>
                    <textarea 
                      name="message"
                      className="w-full px-3 py-2 text-sm sm:text-base border border-neutral-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      placeholder="Eklemek istediğiniz bilgiler..."
                    />
                  </div>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl text-green-800">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold">Teklif talebiniz başarıyla gönderildi! 24 saat içinde size dönüş yapacağız.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl text-red-800">
                    <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                    <span className="text-sm sm:text-base font-semibold">Teklif talebi gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</span>
                  </div>
                )}

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 sm:h-14 md:h-16 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="mr-2 sm:mr-3 h-4 w-4 sm:h-6 sm:w-6 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      Gönderiliyor...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 sm:mr-3 h-4 w-4 sm:h-6 sm:w-6" />
                      Teklif Talebini Gönder
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Benefits */}
            <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="card text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mb-2">Hızlı Yanıt</h3>
                <p className="text-xs sm:text-sm text-neutral-600">24 saat içinde size geri dönüş yapıyoruz</p>
              </div>
              
              <div className="card text-center p-4 sm:p-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mb-2">Detaylı Teklif</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Kapsamlı teknik ve mali analiz</p>
              </div>
              
              <div className="card text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-neutral-900 mb-2">Uzman Danışmanlık</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Alanında uzman ekibimizden destek</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}