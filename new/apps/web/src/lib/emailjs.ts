import emailjs from '@emailjs/browser'

// EmailJS konfigÃ¼rasyonu
// Bu deÄŸerleri EmailJS dashboard'dan alacaksÄ±nÄ±z: https://dashboard.emailjs.com
const EMAILJS_SERVICE_ID = 'service_j2hlhs8' // EmailJS servis ID'niz
const EMAILJS_TEMPLATE_ID_CONTACT = 'template_sdbgt8s' // Ä°letiÅŸim formu template ID'niz
const EMAILJS_TEMPLATE_ID_QUOTE = 'template_16a1nsl' // Teklif formu template ID'niz
const EMAILJS_PUBLIC_KEY = '2Z4rZXjs-otWY0IY1' // EmailJS public key'iniz

// EmailJS'i baÅŸlat
emailjs.init(EMAILJS_PUBLIC_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  company?: string
  product: string
  power: string
  application: string
  budget?: string
  requirements?: string
  installationDate?: string
  message?: string
}

export const sendContactEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    console.log('ğŸ“§ EmailJS gÃ¶nderiliyor...', data)
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'BelirtilmemiÅŸ',
      subject: data.subject,
      message: data.message,
      to_email: 'iletisim@reviumtech.com'
    }

    console.log('ğŸ“§ Template parametreleri:', templateParams)

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_CONTACT,
      templateParams
    )

    console.log('âœ… EmailJS baÅŸarÄ±lÄ±:', result)
    return true
  } catch (error) {
    console.error('âŒ EmailJS hatasÄ±:', error)
    return false
  }
}

export const sendQuoteEmail = async (data: QuoteFormData): Promise<boolean> => {
  try {
    console.log('ğŸ“§ EmailJS teklif gÃ¶nderiliyor...', data)
    
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      company: data.company || 'BelirtilmemiÅŸ',
      product: data.product,
      power: data.power,
      application: data.application,
      budget: data.budget || 'BelirtilmemiÅŸ',
      requirements: data.requirements || 'BelirtilmemiÅŸ',
      installationDate: data.installationDate || 'BelirtilmemiÅŸ',
      message: data.message || 'BelirtilmemiÅŸ',
      to_email: 'iletisim@reviumtech.com'
    }

    console.log('ğŸ“§ Template parametreleri:', templateParams)

    const result = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID_QUOTE,
      templateParams
    )

    console.log('âœ… EmailJS baÅŸarÄ±lÄ±:', result)
    return true
  } catch (error) {
    console.error('âŒ EmailJS hatasÄ±:', error)
    return false
  }
}
