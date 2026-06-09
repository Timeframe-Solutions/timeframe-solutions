<template>
  <UiSectionWrapper bg="surface-alt" py="sm" class="border-y border-tf-border">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
      <div class="space-y-2">
        <span class="block text-tf-text-muted text-xs font-bold uppercase tracking-[0.2em]">Industry</span>
        <span class="text-xl font-bold text-tf-text-primary">{{ industry }}</span>
      </div>
      <div class="space-y-2">
        <span class="block text-tf-text-muted text-xs font-bold uppercase tracking-[0.2em]">Scale</span>
        <span class="text-xl font-bold text-tf-text-primary">{{ pages }}</span>
      </div>
      <div class="space-y-2">
        <span class="block text-tf-text-muted text-xs font-bold uppercase tracking-[0.2em]">Functionality</span>
        <span class="text-xl font-bold text-tf-text-primary">{{ features }}</span>
      </div>
    </div>
  </UiSectionWrapper>
</template>

<script setup lang="ts">
defineProps<{
  industry: string
  pages: string
  features: string
}>()
</script>
