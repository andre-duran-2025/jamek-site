"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CookieSettings() {
  const [showSettings, setShowSettings] = useState(false)

  const handleOpenSettings = () => {
    setShowSettings(true)
    // Here you would typically open a cookie settings modal
    // For now, we'll just show an alert
    alert('Configurações de cookies serão implementadas em breve.')
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleOpenSettings}
      className="text-gray-400 hover:text-white transition-colors p-0 h-auto font-normal"
    >
      Configurar Cookies
    </Button>
  )
}