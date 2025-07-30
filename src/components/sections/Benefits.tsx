import { Zap, Shield, TrendingUp, Users, Clock, Award } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Aumento da Produtividade',
    description: 'Sistemas automatizados que otimizam processos e reduzem tempo de ciclo em até 40%.',
    stats: '+40% produtividade'
  },
  {
    icon: Shield,
    title: 'Maior Segurança',
    description: 'Protocolos de segurança avançados que protegem equipamentos e operadores.',
    stats: '99.9% uptime'
  },
  {
    icon: TrendingUp,
    title: 'ROI Comprovado',
    description: 'Retorno sobre investimento garantido em menos de 12 meses com nossas soluções.',
    stats: 'ROI < 12 meses'
  },
  {
    icon: Users,
    title: 'Equipe Especializada',
    description: 'Profissionais certificados com mais de 15 anos de experiência em automação.',
    stats: '15+ anos experiência'
  },
  {
    icon: Clock,
    title: 'Suporte 24/7',
    description: 'Atendimento técnico especializado disponível 24 horas por dia, 7 dias por semana.',
    stats: 'Suporte 24/7'
  },
  {
    icon: Award,
    title: 'Qualidade Certificada',
    description: 'Processos certificados ISO 9001 e componentes de fornecedores homologados.',
    stats: 'ISO 9001'
  },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a Jamek?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Mais de 15 anos transformando indústrias com soluções de automação 
            que geram resultados reais e mensuráveis.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {benefit.description}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {benefit.stats}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para transformar sua indústria?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Solicite uma análise gratuita dos seus processos e descubra como 
              podemos aumentar sua produtividade e reduzir custos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Solicitar Análise Gratuita
              </a>
              <a
                href="tel:+5511999999999"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Ligar Agora: (11) 99999-9999
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}