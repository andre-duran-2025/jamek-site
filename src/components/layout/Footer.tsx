import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram } from 'lucide-react'
import CookieSettings from '@/components/cookies/CookieSettings'

const services = [
  'Painéis Elétricos',
  'Esquemas Elétricos',
  'Retrofit Industrial',
  'Programação CLP',
  'Células Robóticas',
  'Software de Monitoramento',
]

const quickLinks = [
  { name: 'Início', href: '/' },
  { name: 'Serviços', href: '/servicos' },
  { name: 'Casos de Sucesso', href: '/casos' },
  { name: 'Sobre Nós', href: '/sobre' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contato', href: '/contato' },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">
              JAMEK
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Especialistas em automação industrial com mais de 15 anos de experiência. 
              Transformamos processos industriais através de soluções tecnológicas inovadoras.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/jamek"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com/jamek_automacao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nossos Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/servicos"
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Rua da Automação, 123</p>
                  <p>Distrito Industrial</p>
                  <p>São Paulo - SP, 01234-567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+5511999999999"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  (11) 99999-9999
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@jamek.com.br"
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  contato@jamek.com.br
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Segunda à Sexta: 8h às 18h</p>
                  <p>Sábado: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jamek Automação Industrial. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacidade"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/termos"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
              <CookieSettings />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}