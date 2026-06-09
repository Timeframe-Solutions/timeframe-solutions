import { reactive, ref } from 'vue'

export const useContactForm = () => {
  const form = reactive({
    name: '',
    businessName: '',
    industry: '',
    message: ''
  })
  
  const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
  const errors = reactive<Record<string, string>>({})

  const validate = () => {
    let isValid = true
    Object.keys(errors).forEach(key => delete errors[key])
    
    if (!form.name) {
      errors.name = 'Name is required'
      isValid = false
    }
    if (!form.businessName) {
      errors.businessName = 'Business name is required'
      isValid = false
    }
    if (!form.industry) {
      errors.industry = 'Please select an industry'
      isValid = false
    }
    if (!form.message) {
      errors.message = 'Message is required'
      isValid = false
    }
    
    return isValid
  }

  const submit = async () => {
    if (!validate()) return
    
    status.value = 'loading'
    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: form
      })
      status.value = 'success'
    } catch (err) {
      console.error('Contact form submission error:', err)
      status.value = 'error'
    }
  }

  return { form, status, errors, submit }
}
