import { ArrowRight, Cpu, Zap, Settings, BarChart3, Wrench, Code } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const services = [
  {
    icon: Cpu,
    title: 'Painéis Elétricos',
    description: 'Desenvolvimento e montagem de painéis elétricos industriais com componentes de alta qualidade.',
    features: ['Projeto personalizado', 'Componentes certificados', 'Testes rigorosos'],
    link: '/servicos/paineis-eletricos'
  },
  {
    icon: Code,
    title: 'Programação CLP',
    description: 'Programação de Controladores Lógicos Programáveis para automação de processos industriais.',
    features: ['Ladder e Structured Text', 'IHMs personalizadas', 'Comunicação industrial'],
    link: '/servicos/programacao-clp'
  },
  {
    icon: Settings,
    title: 'Retrofit Industrial',
    description: 'Modernização de equipamentos e linhas de produção existentes com tecnologia atual.',
    features: ['Análise técnica', 'Mínima parada', 'ROI garantido'],
    link: '/servicos/retrofit'
  },
  {
    icon: Zap,
    title: 'Esquemas Elétricos',
    description: 'Elaboração de projetos elétricos industriais completos e documentação técnica.',
    features: ['CAD profissional', 'Normas técnicas', 'Documentação completa'],
    link: '/servicos/esquemas-eletricos'
  },
  {
    icon: Wrench,
    title: 'Células Robóticas',
    description: 'Integração de robôs industriais para automação de processos repetitivos.',
    features: ['Robôs colaborativos', 'Programação avançada', 'Segurança integrada'],
    link: '/servicos/celulas-roboticas'
  },
  {
    icon: BarChart3,
    title: 'Software de Monitoramento',
    description: 'Sistemas SCADA e MES para monitoramento e controle de processos industriais.',
    features: ['Dashboards em tempo real', 'Relatórios automáticos', 'Integração ERP'],
    link: '/servicos/software-monitoramento'
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Soluções completas em automação industrial para transformar 
            seus processos e aumentar a competitividade.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 group hover:border-primary/20"
              >
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group/link"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para desenvolver 
              a solução ideal para suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/servicos">
                  Ver Todos os Serviços
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link href="/contato">
                  Solicitar Orçamento
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}