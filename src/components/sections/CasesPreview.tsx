import { ArrowRight, TrendingUp, Clock, DollarSign, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const cases = [
  {
    industry: 'Indústria Alimentícia',
    company: 'Processadora de Alimentos ABC',
    challenge: 'Linha de produção manual com baixa eficiência e alto índice de retrabalho',
    solution: 'Automação completa da linha com CLPs, sensores e sistema de monitoramento',
    results: [
      { icon: Clock, label: 'Redução de tempo', value: '45%' },
      { icon: DollarSign, label: 'ROI alcançado', value: '8 meses' },
      { icon: TrendingUp, label: 'Aumento OEE', value: '35%' }
    ],
    testimonial: 'A automação da Jamek transformou nossa produção. Conseguimos aumentar significativamente nossa capacidade produtiva.',
    author: 'João Silva, Diretor Industrial'
  },
  {
    industry: 'Metalurgia',
    company: 'Siderúrgica XYZ',
    challenge: 'Controle manual de temperatura em fornos causando desperdício de energia',
    solution: 'Sistema automatizado de controle de temperatura com algoritmos preditivos',
    results: [
      { icon: Zap, label: 'Economia energia', value: '30%' },
      { icon: DollarSign, label: 'Redução custos', value: 'R$ 2M/ano' },
      { icon: TrendingUp, label: 'Melhoria qualidade', value: '25%' }
    ],
    testimonial: 'O sistema da Jamek nos permitiu otimizar nossos processos térmicos com economia significativa de energia.',
    author: 'Maria Santos, Gerente de Produção'
  },
  {
    industry: 'Têxtil',
    company: 'Tecelagem DEF',
    challenge: 'Paradas frequentes por falhas de equipamento e manutenção reativa',
    solution: 'Implementação de manutenção preditiva com IoT e análise de dados',
    results: [
      { icon: Clock, label: 'Redução paradas', value: '60%' },
      { icon: DollarSign, label: 'Economia manutenção', value: '40%' },
      { icon: TrendingUp, label: 'Disponibilidade', value: '95%' }
    ],
    testimonial: 'A manutenção preditiva revolucionou nossa operação. Praticamente eliminamos as paradas não programadas.',
    author: 'Carlos Oliveira, Diretor Técnico'
  }
]

const trustIndicators = [
  { value: '500+', label: 'Projetos Concluídos' },
  { value: '15+', label: 'Anos de Experiência' },
  { value: '98%', label: 'Taxa de Satisfação' },
  { value: 'R$ 50M+', label: 'Economia Gerada' }
]

export default function CasesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Conheça como transformamos indústrias de diferentes setores com 
            nossas soluções de automação personalizadas.
          </p>
        </div>

        {/* Cases */}
        <div className="space-y-8 mb-16">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Case info */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                      {case_.industry}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {case_.company}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Desafio:</h4>
                      <p className="text-gray-600">{case_.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solução:</h4>
                      <p className="text-gray-600">{case_.solution}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <blockquote className="text-gray-700 italic mb-2">
                      "{case_.testimonial}"
                    </blockquote>
                    <cite className="text-sm text-gray-600 font-medium">
                      — {case_.author}
                    </cite>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Resultados:</h4>
                  <div className="space-y-4">
                    {case_.results.map((result, resultIndex) => {
                      const Icon = result.icon
                      return (
                        <div key={resultIndex} className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-gray-900">
                              {result.value}
                            </div>
                            <div className="text-sm text-gray-600">
                              {result.label}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="bg-white rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {indicator.value}
                </div>
                <div className="text-gray-600">
                  {indicator.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para ser nosso próximo caso de sucesso?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Solicite uma análise gratuita dos seus processos e descubra como 
              podemos transformar sua indústria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/casos">
                  Ver Todos os Casos
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link href="/contato">
                  Solicitar Consulta Gratuita
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}