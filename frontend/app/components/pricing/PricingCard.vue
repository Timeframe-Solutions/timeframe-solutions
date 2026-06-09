<template>
  <div class="flex justify-center">
    <div class="max-w-2xl w-full bg-tf-surface rounded-[2.5rem] border border-tf-border shadow-2xl shadow-tf-primary/5 p-8 md:p-16 relative">
      <!-- Popular Badge -->
      <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-tf-text-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
        Standard Package
      </div>

      <div class="text-center mb-16">
        <h3 class="text-tf-text-muted text-sm font-bold uppercase tracking-[0.2em] mb-8">
          The Business Website
        </h3>
        <div class="flex items-baseline justify-center gap-2">
          <span class="text-3xl font-bold text-tf-text-primary">KES</span>
          <span class="text-8xl font-extrabold text-tf-text-primary font-display tracking-tighter">80k</span>
        </div>
        <p class="text-tf-text-muted mt-6 font-medium text-lg italic">"A fair price for world-class work."</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mb-16">
        <div v-for="item in includedItems" :key="item" class="flex items-start gap-4 group">
          <div class="mt-1 w-5 h-5 rounded-full bg-tf-primary-light flex items-center justify-center flex-shrink-0 group-hover:bg-tf-primary transition-colors">
            <Icon name="lucide:check" class="w-3 h-3 text-tf-primary group-hover:text-white transition-colors" />
          </div>
          <span class="text-tf-text-body font-medium leading-tight">{{ item }}</span>
        </div>
      </div>

      <UiAppButton variant="accent" :href="url" target="_blank" class="w-full justify-center py-6 text-xl shadow-xl shadow-tf-accent/20">
        Launch Your Site Now
      </UiAppButton>
      
      <p class="text-center mt-10 text-sm text-tf-text-muted font-medium">
        Need custom backend features? 
        <a :href="url" target="_blank" class="text-tf-primary hover:underline decoration-2 underline-offset-4">Get a custom quote →</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { url } = useWhatsApp()

const includedItems = [
  'Up to 6 Page Architecture',
  'Full Responsive Mobile UX',
  'WhatsApp Conversion Flow',
  'Local SEO Optimisation',
  'High-Speed Performance',
  'Vercel Edge Deployment',
  'Domain & Email Setup',
  'Secure Contact Systems'
]
</script>
