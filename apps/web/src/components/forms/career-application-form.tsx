"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/shadcn-card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Upload, User, Mail, Phone, MapPin, GraduationCap, Briefcase, FileText, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface FormData {
  // KiÅŸisel Bilgiler
  firstName: string
  lastName: string
  email: string
  phone: string
  city: string
  
  // EÄŸitim Bilgileri
  university: string
  department: string
  graduationYear: string
  gpa: string
  
  // Deneyim Bilgileri
  experienceYears: string
  currentPosition: string
  currentCompany: string
  
  // BaÅŸvuru TÃ¼rÃ¼
  applicationType: 'job' | 'internship'
  
  // Dosyalar
  resume: File | null
  coverLetter: string
}

export function CareerApplicationForm() {
  const { t, loading } = useTranslation()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    university: '',
    department: '',
    graduationYear: '',
    gpa: '',
    experienceYears: '',
    currentPosition: '',
    currentCompany: '',
    applicationType: 'job',
    resume: null,
    coverLetter: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const steps = [
    { id: 1, title: 'BaÅŸvuru TÃ¼rÃ¼', icon: Briefcase },
    { id: 2, title: 'KiÅŸisel Bilgiler', icon: User },
    { id: 3, title: 'EÄŸitim Bilgileri', icon: GraduationCap },
    { id: 4, title: 'Ä°ÅŸ Deneyimi', icon: Briefcase },
    { id: 5, title: 'Dosyalar', icon: FileText }
  ]

  // Staj baÅŸvurusu iÃ§in adÄ±m sayÄ±sÄ±nÄ± ayarla
  const totalSteps = formData.applicationType === 'internship' ? 4 : 5

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (file: File | null) => {
    setFormData(prev => ({ ...prev, resume: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      alert('LÃ¼tfen zorunlu alanlarÄ± doldurun.')
      setIsSubmitting(false)
      return
    }

    if (formData.applicationType === 'job' && !formData.experienceYears) {
      alert('Ä°ÅŸ baÅŸvurusu iÃ§in deneyim sÃ¼resi gereklidir.')
      setIsSubmitting(false)
      return
    }

    if (!formData.resume) {
      alert('LÃ¼tfen Ã¶zgeÃ§miÅŸ dosyanÄ±zÄ± yÃ¼kleyin.')
      setIsSubmitting(false)
      return
    }

    // Form submission logic here
    console.log('Form Data:', formData)
    
    // Simulate API call
    setTimeout(() => {
      alert('BaÅŸvurunuz baÅŸarÄ±yla gÃ¶nderildi! En kÄ±sa sÃ¼rede sizinle iletiÅŸime geÃ§eceÄŸiz.')
      setIsSubmitting(false)
    }, 2000)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                BaÅŸvuru TÃ¼rÃ¼
              </CardTitle>
              <CardDescription>
                Hangi tÃ¼r baÅŸvuru yapmak istiyorsunuz?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.applicationType}
                onValueChange={(value: 'job' | 'internship') => handleInputChange('applicationType', value)}
                className="flex gap-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="job" id="job" />
                  <Label htmlFor="job" className="text-base font-medium">
                    Ä°ÅŸ BaÅŸvurusu
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="internship" id="internship" />
                  <Label htmlFor="internship" className="text-base font-medium">
                    Staj BaÅŸvurusu
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        )

      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                KiÅŸisel Bilgiler
              </CardTitle>
              <CardDescription>
                Temel kiÅŸisel bilgilerinizi girin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="firstName">Ad *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="AdÄ±nÄ±z"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Soyad *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="SoyadÄ±nÄ±z"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">E-posta *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder={loading ? 'ornek@email.com' : t('contactPage.emailPlaceholder')}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Telefon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="0555 123 45 67"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="city">Ä°kamet Edilen Åehir *</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange('city', e.target.value)}
                    placeholder="Ankara"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                EÄŸitim Bilgileri
              </CardTitle>
              <CardDescription>
                Ãœniversite ve bÃ¶lÃ¼m bilgilerinizi girin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="university">Ãœniversite *</Label>
                  <Input
                    id="university"
                    value={formData.university}
                    onChange={(e) => handleInputChange('university', e.target.value)}
                    placeholder="Orta DoÄŸu Teknik Ãœniversitesi"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="department">BÃ¶lÃ¼m *</Label>
                  <Input
                    id="department"
                    value={formData.department}
                    onChange={(e) => handleInputChange('department', e.target.value)}
                    placeholder="Elektrik-Elektronik MÃ¼hendisliÄŸi"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="graduationYear">Mezuniyet YÄ±lÄ±</Label>
                  <Input
                    id="graduationYear"
                    type="number"
                    value={formData.graduationYear}
                    onChange={(e) => handleInputChange('graduationYear', e.target.value)}
                    placeholder="2024"
                    min="1990"
                    max={new Date().getFullYear()}
                  />
                </div>
                <div>
                  <Label htmlFor="gpa">Not OrtalamasÄ±</Label>
                  <Input
                    id="gpa"
                    value={formData.gpa}
                    onChange={(e) => handleInputChange('gpa', e.target.value)}
                    placeholder="3.50"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 4:
        if (formData.applicationType === 'internship') {
          return (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Dosyalar
                </CardTitle>
                <CardDescription>
                  Ã–zgeÃ§miÅŸ ve diÄŸer belgelerinizi yÃ¼kleyin
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="resume">Ã–zgeÃ§miÅŸ (PDF) *</Label>
                  <div className="mt-2">
                    <Input
                      id="resume"
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                      className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                      required
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    Maksimum dosya boyutu: 5MB
                  </p>
                </div>
                <div>
                  <Label htmlFor="coverLetter">Ã–n YazÄ±</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                    placeholder="Neden Revium'te staj yapmak istediÄŸinizi kÄ±saca aÃ§Ä±klayÄ±n..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>
          )
        }
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Ä°ÅŸ Deneyimi
              </CardTitle>
              <CardDescription>
                Mevcut iÅŸ deneyiminizi belirtin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="experienceYears">Toplam Deneyim SÃ¼resi *</Label>
                  <Input
                    id="experienceYears"
                    value={formData.experienceYears}
                    onChange={(e) => handleInputChange('experienceYears', e.target.value)}
                    placeholder="Ã¶rn: 2 yÄ±l, 5 yÄ±l, 10+ yÄ±l"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="currentPosition">Mevcut Pozisyon</Label>
                  <Input
                    id="currentPosition"
                    value={formData.currentPosition}
                    onChange={(e) => handleInputChange('currentPosition', e.target.value)}
                    placeholder="YazÄ±lÄ±m GeliÅŸtirici"
                  />
                </div>
                <div>
                  <Label htmlFor="currentCompany">Mevcut Åirket</Label>
                  <Input
                    id="currentCompany"
                    value={formData.currentCompany}
                    onChange={(e) => handleInputChange('currentCompany', e.target.value)}
                    placeholder="ABC Teknoloji"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        )

      case 5:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Dosyalar
              </CardTitle>
              <CardDescription>
                Ã–zgeÃ§miÅŸ ve diÄŸer belgelerinizi yÃ¼kleyin
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="resume">Ã–zgeÃ§miÅŸ (PDF) *</Label>
                <div className="mt-2">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf"
                    onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-primary/90"
                    required
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  Maksimum dosya boyutu: 5MB
                </p>
              </div>
              <div>
                <Label htmlFor="coverLetter">Ã–n YazÄ±</Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                  placeholder="Neden Revium'te Ã§alÄ±ÅŸmak istediÄŸinizi kÄ±saca aÃ§Ä±klayÄ±n..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          Kariyer BaÅŸvuru Formu
        </h2>
        <p className="text-slate-600">
          Revium ailesine katÄ±lmak iÃ§in formu doldurun
        </p>
      </div>

      {/* Step Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.slice(0, totalSteps).map((step, index) => {
            const Icon = step.icon
            const isActive = currentStep === step.id
            const isCompleted = currentStep > step.id
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  isActive 
                    ? 'bg-primary border-primary text-white' 
                    : isCompleted 
                    ? 'bg-green-500 border-green-500 text-white'
                    : 'bg-white border-slate-300 text-slate-400'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <Icon className="w-5 h-5" />
                  )}
                </div>
                <span className={`text-xs mt-2 text-center ${
                  isActive ? 'text-primary font-semibold' : 'text-slate-500'
                }`}>
                  {step.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Ã–nceki
          </Button>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={nextStep}
              className="flex items-center gap-2"
            >
              Sonraki
              <ChevronRight className="w-4 h-4" />
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2"
            >
              {isSubmitting ? 'GÃ¶nderiliyor...' : 'BaÅŸvuruyu GÃ¶nder'}
            </Button>
          )}
        </div>
      </form>
    </div>
  )
}
