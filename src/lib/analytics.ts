// Google Analytics 4 configuration
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Initialize Google Analytics
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Track events
export const trackEvent = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom events for lead generation
export const trackFormSubmission = (data: {
  form_type: string
  form_location: string
  lead_source: string
  [key: string]: any
}) => {
  trackEvent({
    action: 'form_submission',
    category: 'Lead Generation',
    label: `${data.form_type}_${data.form_location}`,
  })
  
  // Send custom event with additional data
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'generate_lead', {
      currency: 'BRL',
      value: 1000, // Estimated lead value
      form_type: data.form_type,
      form_location: data.form_location,
      lead_source: data.lead_source,
    })
  }
}

export const trackCTAClick = (data: {
  cta_type: string
  cta_location: string
  page_url: string
}) => {
  trackEvent({
    action: 'cta_click',
    category: 'Engagement',
    label: `${data.cta_type}_${data.cta_location}`,
  })
}

// Track contact actions
export const trackContactAction = (action: 'phone' | 'whatsapp' | 'email') => {
  trackEvent({
    action: 'contact_action',
    category: 'Contact',
    label: action,
  })
}

// Track downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent({
    action: 'download',
    category: 'Content',
    label: `${fileType}_${fileName}`,
  })
}

// Track video plays
export const trackVideoPlay = (videoTitle: string, videoLocation: string) => {
  trackEvent({
    action: 'video_play',
    category: 'Content',
    label: `${videoLocation}_${videoTitle}`,
  })
}

// Track service/case views
export const trackServiceView = (serviceName: string) => {
  trackEvent({
    action: 'service_view',
    category: 'Content',
    label: serviceName,
  })
}

export const trackCaseView = (caseName: string) => {
  trackEvent({
    action: 'case_view',
    category: 'Content',
    label: caseName,
  })
}

// Track quote requests
export const trackQuoteRequest = (serviceType: string, budgetRange: string) => {
  trackEvent({
    action: 'quote_request',
    category: 'Lead Generation',
    label: `${serviceType}_${budgetRange}`,
  })
}

// Set user properties
export const setUserProperties = (properties: { [key: string]: any }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      custom_map: properties,
    })
  }
}