"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { leadFormSchema, type LeadFormData } from '@/lib/validations'
import { trackFormSubmission } from '@/lib/analytics'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'

interface LeadFormProps {
  title?: string
  description?: string
  ctaText?: string
  onSuccess?: () => void
}

export default function LeadForm({
  title = "Solicitar Orçamento",
  description = "Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas.",
  ctaText = "Enviar Solicitação",
  onSuccess
}: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema)
  })

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Track form submission
      trackFormSubmission({
        form_type: 'lead_form',
        form_location: 'contact_section',
        lead_source: 'website',
        ...data
      })

      // Simulate API call - replace with actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      // const response = await fetch('/api/leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      
      // if (!response.ok) throw new Error('Failed to submit form')
      
      setSubmitStatus('success')
      reset()
      onSuccess?.()
      
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Erro ao enviar formulário. Tente novamente ou entre em contato por telefone.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Solicitação Enviada!
        </h3>
        <p className="text-gray-600 mb-4">
          Recebemos sua solicitação e nossa equipe entrará em contato em até 2 horas.
        </p>
        <p className="text-sm text-gray-500">
          Você também pode nos ligar diretamente: <strong>(11) 99999-9999</strong>
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {title && (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Input
              {...register('name')}
              placeholder="Seu nome completo"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          
          <div>
            <Input
              {...register('email')}
              type="email"
              placeholder="Seu e-mail"
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Input
              {...register('phone')}
              placeholder="Telefone com DDD"
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>
          
          <div>
            <Input
              {...register('company')}
              placeholder="Nome da empresa"
              className={errors.company ? 'border-red-500' : ''}
            />
            {errors.company && (
              <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
            )}
          </div>
        </div>

        <div>
          <textarea
            {...register('message')}
            placeholder="Descreva brevemente sua necessidade ou projeto..."
            rows={4}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none ${
              errors.message ? 'border-red-500' : ''
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md">
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
          size="lg"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Enviando...
            </>
          ) : (
            ctaText
          )}
        </Button>
      </form>

      <div className="text-center text-sm text-gray-500">
        <p>
          Ao enviar este formulário, você concorda com nossa{' '}
          <a href="/privacidade" className="text-primary hover:underline">
            Política de Privacidade
          </a>
        </p>
      </div>
    </div>
  )
}