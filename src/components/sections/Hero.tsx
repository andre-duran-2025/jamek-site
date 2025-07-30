"use client"

import { ArrowRight, Play, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { trackCTAClick } from '@/lib/analytics'

const benefits = [
  'Redução de até 40% no tempo de produção',
  'ROI comprovado em menos de 12 meses',
  'Suporte técnico especializado 24/7',
]

export default function Hero() {
  const handleCTAClick = (ctaType: string) => {
    trackCTAClick({
      cta_type: ctaType,
      cta_location: 'hero_section',
      page_url: window.location.href,
    })
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-20 lg:py-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                ✨ Líderes em Automação Industrial
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme sua
                <span className="text-primary block">
                  Indústria
                </span>
                com Automação
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Soluções completas em automação industrial que aumentam a produtividade, 
                reduzem custos e garantem a competitividade do seu negócio.
              </p>
            </div>

            {/* Benefits list */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="group"
                asChild
                onClick={() => handleCTAClick('primary_cta')}
              >
                <Link href="/contato">
                  Solicitar Análise Gratuita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="group"
                asChild
                onClick={() => handleCTAClick('secondary_cta')}
              >
                <Link href="/casos">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Casos de Sucesso
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-gray-600">Projetos Entregues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-gray-600">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Visual/Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 shadow-2xl">
              {/* Placeholder for industrial automation image */}
              <div className="aspect-square bg-white/10 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/30 rounded-lg" />
                  </div>
                  <p className="text-lg font-semibold">Automação Industrial</p>
                  <p className="text-sm opacity-90">Tecnologia de Ponta</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">+40%</div>
                <div className="text-xs text-gray-600">Produtividade</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg">
                <div className="text-sm font-semibold text-gray-900">-60%</div>
                <div className="text-xs text-gray-600">Tempo Setup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}