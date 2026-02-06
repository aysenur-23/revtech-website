'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, Users, Award } from 'lucide-react'
import Image from 'next/image'
import { sendContactEmail, ContactFormData } from '@/lib/emailjs'

export default function IletisimPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Form verilerini topla
      const formData = new FormData(e.target as HTMLFormElement)
      const data: ContactFormData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string
      }

      // EmailJS ile mail gönder
      const success = await sendContactEmail(data)
      
      if (success) {
        setSubmitStatus('success')
        // Formu temizle
        ;(e.target as HTMLFormElement).reset()
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      
      {/* Hero Section */}
      <section className="relative section bg-gradient-to-br from-slate-900 via-blue-900 to-emerald-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/contact-hero.png"
            alt="İletişim"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-blue-900/80 to-emerald-900/90"></div>
        
        <div className="relative container-app">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[60vh] sm:min-h-[70vh]">
            {/* Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/contact/contact-hero.png"
                  alt="İletişim Görseli"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full opacity-80 animate-bounce"></div>
              <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-10 h-10 sm:w-16 sm:h-16 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full opacity-60 animate-pulse"></div>
            </div>
            
            {/* Content */}
            <div className="text-white order-1 lg:order-2">
              <div className="inline-flex items-center justify-center mb-6 sm:mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl sm:rounded-3xl blur-xl opacity-60 animate-pulse" />
                  <div className="relative flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-2xl sm:rounded-3xl bg-gradient-to-r from-blue-500 to-emerald-500 shadow-2xl">
                    <Mail className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                İletişime
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  Geçin
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed max-w-lg">
                Enerji çözümleriniz için uzman ekibimizle iletişime geçin. 
                Size en uygun çözümü sunmak için buradayız.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="/tr/fiyat-teklifi" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  Teklif Al
                </a>
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-lg hover:bg-white hover:text-slate-900 transition-all duration-300"
                >
                  <Send className="h-4 w-4 sm:h-6 sm:w-6" />
                  Mesaj Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section id="contact-form" className="section bg-white relative overflow-hidden">
        <div className="container-app">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
              Bizimle
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                İletişime Geçin
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Enerji ihtiyaçlarınız için uzman ekibimizle iletişime geçin. 
              Size en uygun çözümü sunmak için buradayız.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Visual Section */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl mb-6 sm:mb-8">
                <Image
                  src="/images/contact/contact-visual.png"
                  alt="İletişim Görseli"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                
                {/* Overlay Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">Hızlı İletişim</h3>
                      <p className="text-blue-100">7/24 Destek</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-6 border border-blue-200/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Telefon</h4>
                      <a href="tel:+905518291613" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                        +90 (551) 829-1613
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-200/50">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">E-posta</h4>
                      <a href="mailto:info@reviumtech.com" className="text-emerald-600 font-semibold hover:text-emerald-800 transition-colors">
                        info@reviumtech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-slate-200/50 relative overflow-hidden order-1 lg:order-2">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 rounded-full -translate-y-12 sm:-translate-y-20 translate-x-12 sm:translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-tr from-emerald-500/5 to-blue-500/5 rounded-full translate-y-10 sm:translate-y-16 -translate-x-10 sm:-translate-x-16"></div>
              
              <div className="relative">
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500 to-emerald-500 shadow-lg">
                    <Send className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Mesaj Gönderin</h3>
                    <p className="text-sm sm:text-base text-slate-600">Sorularınızı bize iletin, en kısa sürede yanıtlayalım</p>
                  </div>
                </div>
              
                <form 
                  className="space-y-6 sm:space-y-8"
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700">
                        Ad Soyad <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        name="name"
                        placeholder="Adınız ve soyadınız" 
                        className="h-12 sm:h-14 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl sm:rounded-2xl transition-all duration-300"
                        required
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700">
                        E-posta <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        name="email"
                        type="email" 
                        placeholder="ornek@email.com" 
                        className="h-12 sm:h-14 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl sm:rounded-2xl transition-all duration-300"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2 sm:space-y-3">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700">
                        Telefon
                      </label>
                      <Input 
                        name="phone"
                        placeholder="+90 5XX XXX XX XX" 
                        className="h-12 sm:h-14 text-sm sm:text-base border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 rounded-xl sm:rounded-2xl transition-all duration-300"
                        type="tel"
                      />
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <label className="block text-xs sm:text-sm font-bold text-slate-700">
                        Konu <span className="text-red-500">*</span>
                      </label>
                      <select 
                        name="subject"
                        className="w-full h-12 sm:h-14 px-3 sm:px-4 text-sm sm:text-base border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 bg-white"
                        required
                      >
                        <option value="">Konu seçiniz</option>
                        <option value="genel">Genel Bilgi</option>
                        <option value="teklif">Teklif Talebi</option>
                        <option value="teknik">Teknik Destek</option>
                        <option value="satis">Satış</option>
                        <option value="hizmet">Hizmet Talebi</option>
                        <option value="sikayet">Şikayet/Öneri</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2 sm:space-y-3">
                    <label className="block text-xs sm:text-sm font-bold text-slate-700">
                      Mesaj <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                      name="message"
                      className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-slate-200 rounded-xl sm:rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 resize-none"
                      rows={5}
                      placeholder="Mesajınızı detaylı bir şekilde yazın..."
                      required
                    />
                  </div>
                  
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-xl sm:rounded-2xl text-green-800">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-semibold">Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.</span>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl text-red-800">
                      <AlertCircle className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm sm:text-base font-semibold">Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.</span>
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
                        Mesaj Gönder
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              İletişim
              <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Bilgileri
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Size ulaşabileceğiniz tüm iletişim kanalları
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">E-posta</h3>
              <div className="space-y-2">
                <a href="mailto:info@reviumtech.com" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold">
                  info@reviumtech.com
                </a>
                <a href="mailto:satis@reviumtech.com" className="block text-blue-600 hover:text-blue-800 transition-colors duration-200 font-semibold">
                  satis@reviumtech.com
                </a>
              </div>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-emerald-200">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
                <Phone className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Telefon</h3>
              <a href="tel:+905518291613" className="block text-emerald-600 hover:text-emerald-800 transition-colors duration-200 text-xl font-bold">
                +90 (551) 829-1613
              </a>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-slate-300">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-500 to-slate-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
                <MapPin className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Adres</h3>
              <p className="text-slate-700 leading-relaxed">
                Nişantaş Mah.<br />
                Şehit Ömer Taşer Sok.<br />
                No:10 Kat:2 Daire:16<br />
                <span className="font-bold text-slate-800">Selçuklu/KONYA</span>
              </p>
            </div>
            
            <div className="group text-center p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200/50 hover:border-blue-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
                <Clock className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Çalışma Saatleri</h3>
              <div className="space-y-2">
                <p className="text-slate-700 font-semibold">Pzt-Cum: 09:00-18:00</p>
                <p className="text-slate-700 font-semibold">Cmt: 09:00-13:00</p>
                <p className="text-blue-600 font-bold">Pazar: Kapalı</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}