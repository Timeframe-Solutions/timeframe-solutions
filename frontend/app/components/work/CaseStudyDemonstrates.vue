<template>
  <UiSectionWrapper bg="surface" py="lg">
    <div class="bg-tf-text-primary p-12 md:p-20 rounded-[3rem] border border-tf-primary/20 shadow-2xl relative overflow-hidden">
      <!-- Subtle decoration -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-tf-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
      
      <div class="relative z-10 max-w-3xl">
        <span class="block text-tf-primary text-xs font-bold uppercase tracking-[0.3em] mb-8">Studio Insights</span>
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight tracking-tight">The takeaway for your project</h2>
        <p class="text-tf-text-inverse/80 text-xl md:text-2xl leading-relaxed font-medium">
          {{ body }}
        </p>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
defineProps<{
  body: string
}>()
</script>
