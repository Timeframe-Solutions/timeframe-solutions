<template>
  <div class="bg-tf-surface p-10 lg:p-16 rounded-[2.5rem] border border-tf-border shadow-2xl shadow-tf-primary/5 h-full">
    <h2 class="text-3xl font-bold text-tf-text-primary mb-10 tracking-tight">Send a project brief.</h2>
    
    <form @submit.prevent="submit" class="space-y-8">
      <Transition 
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="status === 'success'" class="bg-tf-primary-light p-10 rounded-3xl text-tf-primary font-bold text-center border border-tf-primary/10">
          <Icon name="lucide:check-circle-2" class="w-16 h-16 mx-auto mb-6 opacity-40" />
          <h3 class="text-2xl mb-4">Message Sent Successfully</h3>
          <p class="text-lg opacity-80 font-medium">We'll review your brief and reply within 24 hours.</p>
        </div>
      </Transition>
      
      <div v-if="status !== 'success'" class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label class="block text-sm font-bold text-tf-text-primary mb-3">Your Name</label>
            <input 
              v-model="form.name" 
              type="text" 
              placeholder="John Doe"
              class="w-full px-6 py-4 rounded-xl border border-tf-border focus:ring-2 focus:ring-tf-primary focus:border-transparent transition-all outline-none bg-tf-surface-alt/50"
              :class="{ 'border-tf-error bg-tf-error/5': errors.name }"
            >
          </div>

          <div>
            <label class="block text-sm font-bold text-tf-text-primary mb-3">Business Name</label>
            <input 
              v-model="form.businessName" 
              type="text" 
              placeholder="Nairobi Solutions"
              class="w-full px-6 py-4 rounded-xl border border-tf-border focus:ring-2 focus:ring-tf-primary focus:border-transparent transition-all outline-none bg-tf-surface-alt/50"
              :class="{ 'border-tf-error bg-tf-error/5': errors.businessName }"
            >
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-tf-text-primary mb-3">Your Industry</label>
          <div class="relative">
            <select 
              v-model="form.industry" 
              class="w-full px-6 py-4 rounded-xl border border-tf-border focus:ring-2 focus:ring-tf-primary focus:border-transparent transition-all outline-none appearance-none bg-tf-surface-alt/50"
              :class="{ 'border-tf-error bg-tf-error/5': errors.industry }"
            >
              <option value="" disabled selected>Select Industry</option>
              <option v-for="v in services" :key="v.id" :value="v.id">{{ v.title }}</option>
              <option value="other">Other</option>
            </select>
            <Icon name="lucide:chevron-down" class="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-tf-text-muted pointer-events-none" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-tf-text-primary mb-3">Tell us about your project</label>
          <textarea 
            v-model="form.message" 
            rows="5"
            placeholder="What goals are you trying to achieve with a new website?"
            class="w-full px-6 py-4 rounded-xl border border-tf-border focus:ring-2 focus:ring-tf-primary focus:border-transparent transition-all outline-none bg-tf-surface-alt/50 resize-none"
            :class="{ 'border-tf-error bg-tf-error/5': errors.message }"
          ></textarea>
        </div>

        <UiAppButton 
          variant="primary" 
          type="submit" 
          class="w-full justify-center py-5 text-lg shadow-xl shadow-tf-primary/10"
          :disabled="status === 'loading'"
        >
          {{ status === 'loading' ? 'Submitting Brief...' : 'Send Project Brief' }}
        </UiAppButton>

        <p v-if="status === 'error'" class="text-center text-sm text-tf-error font-medium flex items-center justify-center gap-2">
          <Icon name="lucide:alert-circle" class="w-4 h-4" />
          Something went wrong. Please try WhatsApp.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { services } from '~/data/services'

const { form, status, errors, submit } = useContactForm()
</script>
