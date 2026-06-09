<template>
  <UiSectionWrapper bg="surface-alt" py="lg">
    <div class="max-w-5xl">
      <h2 class="text-3xl md:text-4xl font-extrabold text-tf-text-primary mb-12 tracking-tight">Technical Implementation</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        <div 
          v-for="feature in features" 
          :key="feature"
          class="flex items-start gap-5 group"
        >
          <div class="mt-1 w-6 h-6 rounded-full bg-tf-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Icon name="lucide:check" class="w-3.5 h-3.5 text-white" />
          </div>
          <span class="text-tf-text-body text-lg font-medium leading-snug">{{ feature }}</span>
        </div>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
defineProps<{
  features: string[]
}>()
</script>
