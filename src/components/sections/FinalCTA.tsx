"use client"

import { useState } from 'react'
import { CheckCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import LeadForm from '@/components/forms/LeadForm'
import { trackCTAClick } from '@/lib/analytics'

const benefits = [
  'Análise gratuita da sua operação',
  'Proposta personalizada em 48h',
  'ROI comprovado e garantido',
  'Suporte técnico especializado'
]

export default function FinalCTA() {
  const [showForm, setShowForm] = useState(false)

  const handleCTAClick = (ctaType: string) => {
    trackCTAClick({
      cta_type: ctaType,
      cta_location: 'final_cta_section',
      page_url: window.location.href,
    })
  }

  const handleWhatsAppClick = () => {
    handleCTAClick('whatsapp')
    const message = encodeURIComponent(
      'Olá! Gostaria de solicitar uma análise gratuita para automação industrial da minha empresa.'
    )
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank')
  }

  const handlePhoneClick = () => {
    handleCTAClick('phone')
    window.location.href = 'tel:+5511999999999'
  }

  const handleFormSuccess = () => {
    setShowForm(false)
    // Additional success handling if needed
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        {!showForm ? (
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Transforme sua Indústria
                <span className="block text-secondary">
                  Hoje Mesmo
                </span>
              </h2>
              <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-3xl mx-auto">
                Solicite uma análise gratuita dos seus processos industriais e descubra 
                como nossa automação pode revolucionar sua produção.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span className="text-primary-foreground/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Options */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group text-lg px-8 py-4"
                  onClick={handleWhatsAppClick}
                >
                  <MessageCircle className="mr-2 h-6 w-6" />
                  WhatsApp: Resposta Rápida
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="group text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => {
                    handleCTAClick('form')
                    setShowForm(true)
                  }}
                >
                  Formulário Completo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              <div className="text-center">
                <p className="text-primary-foreground/70 mb-2">Ou ligue diretamente:</p>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10 text-xl font-semibold"
                  onClick={handlePhoneClick}
                >
                  <Phone className="mr-2 h-6 w-6" />
                  (11) 99999-9999
                </Button>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                  <div className="text-primary-foreground/80 text-sm">Projetos Entregues</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                  <div className="text-primary-foreground/80 text-sm">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                  <div className="text-primary-foreground/80 text-sm">Satisfação</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
                  <div className="text-primary-foreground/80 text-sm">Suporte Técnico</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Solicitar Análise Gratuita
                </h3>
                <p className="text-primary-foreground/90">
                  Preencha o formulário e nossa equipe entrará em contato em até 2 horas.
                </p>
              </div>
              
              <LeadForm
                title=""
                description=""
                ctaText="Solicitar Análise Gratuita"
                onSuccess={handleFormSuccess}
              />
              
              <div className="text-center mt-6">
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/10"
                  onClick={() => setShowForm(false)}
                >
                  Voltar às opções
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}