<template>
  <div class="bg-tf-primary-light p-10 lg:p-16 rounded-[2.5rem] border border-tf-primary/5 h-full flex flex-col justify-center">
    <div class="mb-12">
      <h2 class="text-4xl font-extrabold text-tf-text-primary mb-8 tracking-tight">The fastest way to start.</h2>
      <p class="text-xl text-tf-text-body leading-relaxed opacity-90">
        Most of our projects begin with a simple WhatsApp message. Send us your business name, your industry, and a short description of what you need.
      </p>
    </div>
    
    <div class="space-y-6">
      <UiAppButton 
        variant="accent" 
        :href="url" 
        target="_blank" 
        class="w-full justify-center text-xl py-6 shadow-2xl shadow-tf-accent/20"
      >
        <Icon name="lucide:message-circle" class="mr-3 h-7 w-7" />
        Open WhatsApp
      </UiAppButton>
      
      <p class="text-center text-tf-text-muted font-medium flex items-center justify-center gap-3">
        <span class="w-8 h-px bg-tf-border"></span>
        Typical response time: 2 hours
        <span class="w-8 h-px bg-tf-border"></span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { url } = useWhatsApp()
</script>
