import { Monitor, BarChart3, Zap, Shield, Users, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
  {
    icon: BarChart3,
    title: 'Dashboards em Tempo Real',
    description: 'Visualize todos os indicadores de produção em tempo real com gráficos intuitivos.'
  },
  {
    icon: Zap,
    title: 'Alertas Inteligentes',
    description: 'Sistema de notificações automáticas para desvios de processo e manutenção preventiva.'
  },
  {
    icon: Shield,
    title: 'Segurança Avançada',
    description: 'Controle de acesso por níveis e auditoria completa de todas as operações.'
  },
  {
    icon: Users,
    title: 'Multi-usuário',
    description: 'Acesso simultâneo para múltiplos usuários com perfis personalizados.'
  },
]

const benefits = [
  'Redução de 30% no tempo de setup',
  'Aumento de 25% na eficiência operacional',
  'Diminuição de 40% nas paradas não programadas',
  'ROI comprovado em menos de 8 meses'
]

export default function SoftwareHighlight() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                💻 Software Proprietário
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Sistema de Monitoramento
                <span className="text-primary block">
                  Jamek Control
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Nossa plataforma proprietária de monitoramento industrial oferece 
                controle total sobre seus processos com interface intuitiva e 
                recursos avançados de análise.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900">Resultados Comprovados:</h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg">
                <Link href="/software">
                  Conhecer o Sistema
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/demo">
                  Solicitar Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Visual/Mockup */}
          <div className="relative">
            {/* Main screen mockup */}
            <div className="relative bg-gray-900 rounded-2xl p-4 shadow-2xl">
              {/* Browser bar */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              
              {/* Dashboard content */}
              <div className="bg-white rounded-lg p-6 space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Jamek Control</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm text-gray-600">Online</span>
                  </div>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-600">87%</div>
                    <div className="text-xs text-blue-600">OEE</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-600">1.2k</div>
                    <div className="text-xs text-green-600">Peças/h</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-orange-600">2.1%</div>
                    <div className="text-xs text-orange-600">Refugo</div>
                  </div>
                </div>
                
                {/* Chart placeholder */}
                <div className="bg-gray-50 rounded-lg h-24 flex items-center justify-center">
                  <Monitor className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-green-500" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">24/7</div>
                  <div className="text-xs text-gray-600">Monitoramento</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-3 shadow-lg border border-gray-200">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                <div>
                  <div className="text-sm font-semibold text-gray-900">+25%</div>
                  <div className="text-xs text-gray-600">Eficiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}