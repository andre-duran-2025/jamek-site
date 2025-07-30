import { z } from 'zod'

// Contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  subject: z.string().min(5, 'Assunto deve ter pelo menos 5 caracteres'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
})

// Lead form validation
export const leadFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  message: z.string().optional(),
})

// Quote form validation
export const quoteFormSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
  company: z.string().min(2, 'Nome da empresa deve ter pelo menos 2 caracteres'),
  serviceType: z.enum([
    'paineis-eletricos',
    'programacao-clp',
    'retrofit',
    'esquemas-eletricos',
    'celulas-roboticas',
    'software-monitoramento',
    'consultoria',
    'manutencao',
    'outros'
  ], {
    errorMap: () => ({ message: 'Selecione um tipo de serviço' })
  }),
  budget: z.enum([
    'ate-50k',
    '50k-100k',
    '100k-250k',
    '250k-500k',
    'acima-500k',
    'nao-definido'
  ], {
    errorMap: () => ({ message: 'Selecione uma faixa de orçamento' })
  }),
  timeline: z.enum([
    'urgente',
    '1-3-meses',
    '3-6-meses',
    '6-12-meses',
    'acima-12-meses'
  ], {
    errorMap: () => ({ message: 'Selecione um prazo' })
  }),
  description: z.string().min(20, 'Descrição deve ter pelo menos 20 caracteres'),
  currentProcess: z.string().optional(),
  challenges: z.string().optional(),
})

// Service types for forms
export const serviceTypes = [
  { value: 'paineis-eletricos', label: 'Painéis Elétricos' },
  { value: 'programacao-clp', label: 'Programação CLP' },
  { value: 'retrofit', label: 'Retrofit Industrial' },
  { value: 'esquemas-eletricos', label: 'Esquemas Elétricos' },
  { value: 'celulas-roboticas', label: 'Células Robóticas' },
  { value: 'software-monitoramento', label: 'Software de Monitoramento' },
  { value: 'consultoria', label: 'Consultoria' },
  { value: 'manutencao', label: 'Manutenção' },
  { value: 'outros', label: 'Outros' },
]

// Budget ranges
export const budgetRanges = [
  { value: 'ate-50k', label: 'Até R$ 50.000' },
  { value: '50k-100k', label: 'R$ 50.000 - R$ 100.000' },
  { value: '100k-250k', label: 'R$ 100.000 - R$ 250.000' },
  { value: '250k-500k', label: 'R$ 250.000 - R$ 500.000' },
  { value: 'acima-500k', label: 'Acima de R$ 500.000' },
  { value: 'nao-definido', label: 'Não definido' },
]

// Timeline options
export const timelineOptions = [
  { value: 'urgente', label: 'Urgente (até 1 mês)' },
  { value: '1-3-meses', label: '1 a 3 meses' },
  { value: '3-6-meses', label: '3 a 6 meses' },
  { value: '6-12-meses', label: '6 a 12 meses' },
  { value: 'acima-12-meses', label: 'Acima de 12 meses' },
]

// Type exports
export type ContactFormData = z.infer<typeof contactFormSchema>
export type LeadFormData = z.infer<typeof leadFormSchema>
export type QuoteFormData = z.infer<typeof quoteFormSchema>