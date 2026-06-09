<template>
  <UiSectionWrapper bg="surface-alt" py="lg">
    <div class="text-center mb-24">
      <UiAppBadge label="Our Stack" variant="eyebrow" class="mb-6" />
      <h2 class="text-4xl md:text-5xl font-extrabold text-tf-text-primary tracking-tight">
        Modern tech for modern business.
      </h2>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
      <div 
        v-for="tech in stack" 
        :key="tech.name"
        class="group bg-tf-surface p-10 rounded-3xl border border-tf-border text-center flex flex-col items-center gap-6 hover:shadow-2xl hover:shadow-tf-primary/5 transition-all duration-300 hover:-translate-y-1"
      >
        <div class="p-4 bg-tf-primary-light rounded-2xl group-hover:bg-tf-primary transition-colors duration-300">
          <Icon :name="tech.icon" class="w-10 h-10 text-tf-primary group-hover:text-white transition-colors" />
        </div>
        <div>
          <h3 class="text-xl font-bold text-tf-text-primary">{{ tech.name }}</h3>
          <p class="text-sm text-tf-text-muted font-medium mt-2">{{ tech.role }}</p>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
const stack = [
  { name: 'Nuxt 4', role: 'Frontend Core', icon: 'lucide:layers' },
  { name: 'Tailwind 3', role: 'Premium Styling', icon: 'lucide:palette' },
  { name: 'Vercel', role: 'Edge Delivery', icon: 'lucide:cloud' },
  { name: 'Lucide', role: 'System Icons', icon: 'lucide:box' },
  { name: 'TypeScript', role: 'Safety & Logic', icon: 'lucide:code' }
]
</script>
