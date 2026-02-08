"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowUp, MessageCircle, Phone, Mail } from 'lucide-react'

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
      
      <div className="flex flex-col space-y-2">
        <Button
          size="icon"
          variant="outline"
          className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          title="WhatsApp"
        >
          <MessageCircle className="h-5 w-5" />
        </Button>
        
        <Button
          size="icon"
          variant="outline"
          className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          title="Telefon"
        >
          <Phone className="h-5 w-5" />
        </Button>
        
        <Button
          size="icon"
          variant="outline"
          className="h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          title="E-posta"
        >
          <Mail className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
